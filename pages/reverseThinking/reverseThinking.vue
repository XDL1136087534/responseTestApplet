<template>
	<view class="background" @click="startPlay">
		
		<view v-if="start_flag===false" class="init">
			<view class="icon">
				<canvas canvas-id="Canvas-init"></canvas>
			</view>
			<view class="content">
				<view>锻炼逆向思维</view>
				<view>成为极少数的成功者</view>
				<text>单击任意位置开始</text>
			</view>
		</view>
		<view v-else class="startPlay_box">
			<canvas canvas-id="Canvas-startPlay"></canvas>
			<text>{{currentShape}}</text>
			<view class="buttons">
				<view @click="judgeIsCorrect(true)" class="yes_btn">√</view>
				<view @click="judgeIsCorrect(false)" class="no_btn">×</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				start_flag: false, // 开始标记
				canvasWidth: 350,
				canvasHeight: 350,
				shapeList: ['Square', 'Circle', 'Rectangle', 'RegularPolygon'],
				colorList: ['white', 'red', 'blue', 'green', 'purple', 'yellow'],
				currentShape: null,
				pen: uni.createCanvasContext('Canvas-startPlay')    // 画笔
			};
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
					this.pen.clearRect(0, 0, this.canvasWidth, this.canvasHeight);   // 清理画布
					var shape = this.shapeList[Math.floor(Math.random() * this.shapeList.length)];  // 选取形状
					var color = this.colorList[Math.floor(Math.random() * this.colorList.length)];  // 选取颜色
					this.currentShape = color + "的" + shape;
					// 根据形状与颜色绘制图形
					switch(shape){
						case 'Square': 
							this.drawSquare(color);
							this.currentShape = color + "的正方形";
							break;
						case 'Circle': 
							this.drawCircle(color);
							this.currentShape = color + "的圆形";
							break;
						case 'Rectangle': 
							this.drawRectangle(color);
							this.currentShape = color + "的长方形";
							break;
						case 'RegularPolygon': 
							this.drawRegularPolygon(color);
							this.currentShape = color + "的多边形";
					}
				}
			},
			
			// 判断正确与否
			judgeIsCorrect: function( ){
				
			},
			
			// 圆形
			drawCircle: function(color){
				this.pen.setStrokeStyle("black");
				this.pen.setLineWidth(2);
				this.pen.arc(85, 90, 70, 0, 2 * Math.PI);
				this.pen.setFillStyle(color);
				this.pen.fill();
				this.pen.stroke();
				this.pen.draw();
			},
			
			// 长方形
			drawRectangle: function(color){
				this.pen.rect(10, 45, 155, 85);
				this.pen.setFillStyle(color);
				this.pen.fill();
				this.pen.stroke();
				this.pen.draw();
			},
			
			// 正方形
			drawSquare: function(color){
				this.pen.rect(20, 20, 135, 135);
				this.pen.setFillStyle(color);
				this.pen.fill();
				this.pen.stroke();
				this.pen.draw();
			},
			
			// 三角形
			drawTriangle: function(color){
				this.pen.moveTo(90, 30);
				this.pen.lineTo(10, 90);
				this.pen.lineTo(165, 90);
				this.pen.lineTo(90, 30);
				this.pen.setFillStyle(color);
				this.pen.fill();
				this.pen.stroke();
				this.pen.draw();
			},
			
			// 正多边形
			drawRegularPolygon: function(color){
				var num = Math.ceil(Math.random() * 6) + 3;
				this.createPolygonPath(this.canvasWidth/4,this.canvasHeight/4,this.canvasWidth/6,num,0);
				this.pen.setFillStyle(color);
				this.pen.fill();
				this.pen.stroke();
				this.pen.draw();
			},
			
			// 连接正多边形的点
			createPolygonPath: function(centerX,centerY,radius,sides,startAngle) {
			    let points = this.getPolygonPoints(centerX,centerY,radius,sides,startAngle);
			
			    this.pen.beginPath();
			    this.pen.moveTo(points[0].x,points[0].y);
			
			    for (let i=0;i<sides;++i){
			        this.pen.lineTo(points[i].x,points[i].y);
			    }
			    this.pen.closePath();
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
	canvas{
		position: absolute;
		top: 10%;
		left: 27%;
		width: 350rpx;
		height: 350rpx;
	}
	text{
		position: absolute;
		top: 45%;
		font-size: 40rpx;
		font-weight: bold;
		color: white;
	}
	.buttons{
		display: flex;
		justify-content: space-around;
		position: absolute;
		top: 65%;
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


</style>
