<template>
	<view class="background" @click="startPlay" v-bind:style="{ 'background-color': background_color}">
		
		<view :style="start_flag===false?'':'display:none;'" class="init">
			<view class="icon">
				<canvas canvas-id="Canvas-init"></canvas>
			</view>
			<view class="content">
				<view>锻炼逆向思维</view>
				<view>成为极少数的成功者</view>
				<text>单击任意位置开始</text>
			</view>
		</view>
		<view :style="start_flag===true?'':'display:none;'" class="startPlay_box">
			<view style="display: flex;justify-content: center;" :style="answer_flag===true?'':'display:none;'">
				<canvas canvas-id="Canvas-startPlay"></canvas>
				<view class="time-schedule">
					<view class="sum-schedule"></view>
					<view class="current-schedule" v-bind:style="{ width: currentSchedule + 'rpx'}"></view>
				</view>
				<view class="time-num">倒计时：{{time}}s</view>
				<text :style="{ 'color': showShapeFontColor }">{{showShape}}</text>
				<view class="buttons">
					<view @click="judgeIsCorrect(true)" class="yes_btn">√</view>
					<view @click="judgeIsCorrect(false)" class="no_btn">×</view>
				</view>
			</view>
			<block v-if="answer_flag===false">
				<block v-if="result===true">
					<view class="result">
						<view style="color: #007AFF">回答正确</view>
						<view>您已成功坚持{{qualified}}轮</view>
						<button class="continue" @click="continuePlay">点击继续</button>
					</view>
				</block>
				<block v-else>
					<view class="result">
						<view style="color: #ff557f">回答错误</view>
						<view>您成功坚持{{qualified}}轮</view>
						<view class="buttons">
							<button @click="resurrectionPlay" class="resurrection" type="default">复活继续({{freeResurrection}})</button>
							<button @click="resetPlay" class="reset" type="default">重新开始</button>
						</view>
					</view>
				</block>
			</block>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				start_flag: false, // 开始标记
				answer_flag: false,  // 答题标记
				background_color: 'rgb(170, 170, 255)',
				canvasWidth: 350,
				canvasHeight: 350,
				time: 4,  // 答题时间
				timeSpace: 12.5,  // 进度条步长
				timer: null, // 计时器
				currentSchedule: 500,   // 进度条长度
				shapeList: ['Square', 'Circle', 'Rectangle', 'RegularPolygon'],
				colorList: ['white', 'red', 'blue', 'green', 'purple', 'yellow'],
				chineseShapeList: ['正方形', '圆形', '长方形', '边形'],
				chineseColorList: ['白色', '红色', '蓝色', '绿色', '紫色', '黄色'],
				chineseNum: ['五', '六', '七', '八', '九'],
				currentShape: null,  // 真实的图形
				showShape: null,     // 用户看到的题目
				showShapeFontColor: 'white',   // 题目的字体颜色，迷惑用户
				pen: uni.createCanvasContext('Canvas-startPlay'),    // 画笔
				result: null,   // 用户结果正确与否
				freeResurrection: null,
				qualified: 0
			};
		},
		onLoad() {
			// 获取免费复活次数
			var data = uni.getStorageSync('freeResurrection');
			this.freeResurrection = data.three_num;
		},
		onReady: function (e) {
		    this.iconInit();
		},
		methods:{
			// 页面图标初始化
			iconInit: function(){
				var pen = uni.createCanvasContext('Canvas-init');
				
				pen.beginPath();
				pen.setStrokeStyle("#ffaa7f");
				pen.setLineWidth(2);
				pen.arc(75, 75, 60, 0, 2 * Math.PI);
				pen.stroke();
				pen.closePath();
				
				
				pen.beginPath();
				pen.moveTo(95, 75);
				pen.setStrokeStyle("#ffaaff");
				pen.arc(75, 75, 20, 0, 2 * Math.PI);
				pen.stroke();
				pen.closePath()
				
				pen.beginPath();
				pen.setStrokeStyle('#ffffff');
				pen.moveTo(75, 15);
				pen.lineTo(20, 97);
				pen.lineTo(130, 97);
				pen.lineTo(75, 15);
				pen.stroke();
				pen.closePath();
				
				pen.draw();
			},
			
			startPlay: function(){
				if(this.start_flag===false){
					this.start_flag = true;
					this.answer_flag = true;
					this.time = 4;
					var pen = uni.createCanvasContext('Canvas-startPlay');
					this.upDifficulty();   // 提升难度
					this.Timer();   // 开始倒计时
					pen.clearRect(0, 0, this.canvasWidth, this.canvasHeight);   // 清理画布
					var shapeDetailList = this.produceShape();   // 随机生成图形
					var color = shapeDetailList[0];
					var shape = shapeDetailList[1];
					var englishColor = shapeDetailList[2];
					var englishShape = shapeDetailList[3];
					// this.currentShape = color + '的' + shape;   // 当前正确的图形
					// 根据形状与颜色绘制图形
					var num = null;
					switch(shape){
						case '边形':
							num = this.chineseNum[this.drawRegularPolygon(pen, englishColor) - 5];
							this.currentShape = color + '的' + num + shape;   // 当前正确的图形
							break;
						case '正方形': 
							this.drawSquare(pen, englishColor);
							break;
						case '圆形': 
							this.drawCircle(pen, englishColor);
							break;
						case '长方形': 
							this.drawRectangle(pen, englishColor);
					}
					if(shape != '边形')
						this.currentShape = color + '的' + shape;   // 当前正确的图形
					// 随机生成正确或错误的题目
					if(Math.random() < 0.55){   // 理论上错误的题目,有可能随机到正确的题目
						if(shape === '边形'){
							if(Math.random() < 0.3)   // 颜色比形状好区分，因此变化形状，迷惑用户
								this.showShape = this.chineseColorList[Math.floor(Math.random() * this.chineseColorList.length)] + '的' + num + shape;
							else{
								num = this.chineseNum[Math.floor(Math.random() * this.chineseNum.length)]
								this.showShape = color + '的' + num + shape;
							}
						}
						else{
							shapeDetailList = this.produceShape();
							if(shapeDetailList[1] === '边形'){
								num = this.chineseNum[Math.floor(Math.random() * this.chineseNum.length)];
								this.showShape = shapeDetailList[0] + '的' + num + shapeDetailList[1];
							}
							else
								this.showShape = shapeDetailList[0] + '的' + shapeDetailList[1];
						}
					}
					else{   // 正确的题目
						this.showShape = this.currentShape;
					}
					// 随机生成题目的颜色
					if(this.qualified >= 10)
						this.showShapeFontColor = this.colorList[Math.floor(Math.random() * this.colorList.length)];
				}
			},
			
			// 计时器
			Timer: function(){
				this.timer = setInterval(()=>{
					var time = this.time * 1000 - 100;
					this.time = (time / 1000).toFixed(1);
					this.currentSchedule = this.currentSchedule - this.timeSpace;
					if(this.currentSchedule <= 0){   // 超时
						clearInterval(this.timer);
						this.answer_flag = false;
						this.result = false;
						this.background_color = 'rgb(243, 223, 187)';
					}
				}, 100);
			},
			
			// 升级难度
			upDifficulty: function(){
				if(this.qualified >= 4 && this.qualified < 8){   // 升级难度
					this.time = 3.5;
					this.timeSpace = 14.2;
				}
				else if(this.qualified >= 8 && this.qualified < 12){
					this.time = 3;
					this.timeSpace = 16.5;
				}
				else if(this.qualified >= 12 && this.qualified < 16){
					this.time = 2.5;
					this.timeSpace = 20;
				}
				else if(this.qualified >= 16 && this.qualified < 20){
					this.time = 2;
					this.timeSpace = 25;
				}
				else if(this.qualified >= 20){
					this.time = 1.5;
					this.timeSpace = 33.4;
				}
			},
			
			// 随机生成图形
			produceShape: function(){
				var shapeIndex = Math.floor(Math.random() * this.chineseShapeList.length);
				var shape = this.chineseShapeList[shapeIndex];  // 选取形状
				var colorIndex = Math.floor(Math.random() * this.chineseColorList.length);
				var color = this.chineseColorList[colorIndex];  // 选取颜色
				var englishShape = this.shapeList[shapeIndex];
				var englishColor = this.colorList[colorIndex];
				return [color, shape, englishColor, englishShape];
			},
			
			// 判断正确与否
			judgeIsCorrect: function(userChoose){
				this.answer_flag = false;
				this.background_color = 'rgb(243, 229, 230)';
				clearInterval(this.timer);  // 停止倒计时
				if((this.currentShape === this.showShape) === userChoose){
					this.result = true;
					this.qualified++;
				}
				else{
					this.result = false;
				}
			},
			
			// 继续游戏
			continuePlay: function(){
				this.start_flag = false;
				this.currentSchedule = 500;
				this.background_color = 'rgb(170, 170, 255)';
				this.currentShape = null;
				this.showShape = null;
				this.result = null;
				this.startPlay();
			},
			
			// 复活继续
			resurrectionPlay: function(){
				if(this.freeResurrection > 0){
					this.freeResurrection--;
					var data = uni.getStorageSync('freeResurrection');
					data.three_num = this.freeResurrection;
					uni.setStorageSync('freeResurrection', data);
					// 还原属性值
					this.continuePlay();
				}
				else
					uni.showToast({
						title: '播放广告',
						icon: 'none',
						mask: true,
						duration: 2000
					});
			},
			
			// 重新开始
			resetPlay: function(){
				this.time = 4;
				this.timeSpace = 12.5;
				this.timer = null;
				this.start_flag = false;
				this.currentSchedule = 500;
				this.background_color = 'rgb(170, 170, 255)';
				this.currentShape = null;
				this.showShape = null;
				this.showShapeFontColor = 'white';
				this.result = null;
				this.qualified = 0;
			},
			
			// 圆形
			drawCircle: function(pen, color){
				pen.setStrokeStyle("black");
				pen.setLineWidth(2);
				pen.arc(85, 90, 70, 0, 2 * Math.PI);
				pen.setFillStyle(color);
				pen.fill();
				pen.stroke();
				pen.draw()
			},
			
			// 长方形
			drawRectangle: function(pen, color){
				pen.rect(10, 45, 155, 85);
				pen.setFillStyle(color);
				pen.fill();
				pen.stroke();
				pen.draw();
			},
			
			// 正方形
			drawSquare: function(pen, color){
				pen.rect(20, 20, 135, 135);
				pen.setFillStyle(color);
				pen.fill();
				pen.stroke();
				pen.draw();
			},
			
			// 三角形
			drawTriangle: function(pen, color){
				pen.moveTo(90, 30);
				pen.lineTo(10, 90);
				pen.lineTo(165, 90);
				pen.lineTo(90, 30);
				pen.setFillStyle(color);
				pen.fill();
				pen.stroke();
				pen.draw();
			},
			
			// 正多边形
			drawRegularPolygon: function(pen, color){
				var num = Math.ceil(Math.random() * this.chineseShapeList.length) + 4;
				this.createPolygonPath(this.canvasWidth/4,this.canvasHeight/4,this.canvasWidth/6,num,0, pen);
				pen.setFillStyle(color);
				pen.fill();
				pen.stroke();
				pen.draw();
				return num;
			},
			
			// 连接正多边形的点
			createPolygonPath: function(centerX, centerY, radius, sides, startAngle, pen) {
			    let points = this.getPolygonPoints(centerX,centerY,radius,sides,startAngle);
			
			    pen.beginPath();
			    pen.moveTo(points[0].x,points[0].y);
			
			    for (let i=0;i<sides;++i){
			        pen.lineTo(points[i].x,points[i].y);
			    }
			    pen.closePath();
			},
			
			// 得到正多边形的点
			getPolygonPoints: function(centerX,centerY,radius,sides,startAngle) {
				class Point{
				    constructor(x, y) {
				        this.x = x;
				        this.y = y;
				    }
				};
			    let points = [],
			        //这里的angle是基于钟表0点的位置开始计算，0点位置为0度，3点位置为π/2度
			        angle = startAngle||0;
			
			    for (let i=0;i<sides;++i){
			        points.push(new Point(centerX+radius*Math.sin(angle),centerY+radius*Math.cos(angle)));
			        angle += 2*Math.PI/sides;
			    }
			
			    return points;
			}
		}
	}
</script>

<style lang="less">
	
*{
	margin: 0;
	padding: 0;
}

.background{
	width: 750rpx;
	height: 1400rpx;
	background-color: #aaaaff;
}

.init{
	position: fixed;
	top: 15%;
	left: 10%;
	width: 600rpx;
	height: 950rpx;
	.icon{
		position: relative;
		left: 25%;
		width: 300rpx;
		height: 300rpx;
	}
	.content{
		margin-top: 70rpx;
		font-size: 40rpx;
		text-align: center;
		color: white;
		view{
			margin-top: 30rpx;
		}
		text{
			position: absolute;
			top: 95%;
			left: 23%;
		}
	}
}

.startPlay_box{
	display: flex;
	justify-content: center;
	align-items: center;
	canvas{
		position: absolute;
		top: 10%;
		left: 27%;
		width: 350rpx;
		height: 350rpx;
	}
	.time-schedule{
		position: relative;
		top: 550rpx;
		.sum-schedule{
			width: 500rpx;
			height: 20rpx;
			background-color: white;
			border-radius: 20rpx;
			margin: 0rpx 50rpx;
		}
		.current-schedule{
			position: relative;
			top: -20rpx;
			height: 20rpx;
			background-color: #ffaa00;
			border-radius: 20rpx;
			margin: 0rpx 50rpx;
		}
	}
	.time-num{
		position: absolute;
		top: 600rpx;
	}
	text{
		position: absolute;
		top: 60%;
		font-size: 60rpx;
		font-weight: bold;
		color: white;
	}
	.buttons{
		display: flex;
		justify-content: space-around;
		position: absolute;
		top: 75%;
		width: 750rpx;
		view{
			width: 100rpx;
			height: 100rpx;
			font-size: 60rpx;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 5rpx solid white;
		}
		.yes_btn{
			background-color: #00ff00;
		}
		.no_btn{
			background-color: #ff557f;
		}
	}
}

.result{
	position: absolute;
	top: 30%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	view:first-of-type{
		font-size: 70rpx;
	}
	view:nth-of-type(2){
		margin-top: 30rpx;
		font-size: 40rpx;
	}
	button{
		width: 250rpx;
		height: 100rpx;
		font-size: 35rpx;
		border: 3px solid white;
		color: white;
	}
	.continue{
		margin-top: 200rpx;
		background-color: #55ffff;
	}
	.buttons{
		position: absolute;
		top: 400rpx;
		left: -230rpx;
		display: flex;
		justify-content: space-between;
		.resurrection{
			width: 250rpx;
			background-color: #87f70e;
		}
		.reset{
			width: 220rpx;
			background-color: #f7dd48;
		}
	}
}

</style>
