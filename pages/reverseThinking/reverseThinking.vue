<template>
	<view class="background">
		
		<canvas canvas-id="Canvas"></canvas>
		<button @click="start">开始</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				canvasWidth: 350,
				canvasHeight: 350,
				shapeList: ['Square', 'Circle', 'Rectangle', 'RegularPolygon'],
				colorList: ['white', 'red', 'blue', 'green', 'purple', 'yellow'],
				currentShape: null,
				pen: uni.createCanvasContext('Canvas')
			};
		},
		onReady: function (e) {
		        // this.start();
		},
		methods:{
			start: function(){
				this.pen.clearRect(0, 0, this.canvasWidth, this.canvasHeight);   // 清理画布
				var shape = this.shapeList[Math.floor(Math.random() * this.shapeList.length)];  // 选取形状
				var color = this.colorList[Math.floor(Math.random() * this.colorList.length)];  // 选取颜色
				eval('this.draw'+shape+'(color)');
				// this.drawRegularPolygon(color);
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
			
			createPolygonPath: function(centerX,centerY,radius,sides,startAngle) {
			    let points = this.getPolygonPoints(centerX,centerY,radius,sides,startAngle);
			
			    this.pen.beginPath();
			    this.pen.moveTo(points[0].x,points[0].y);
			
			    for (let i=0;i<sides;++i){
			        this.pen.lineTo(points[i].x,points[i].y);
			    }
			    this.pen.closePath();
			},
			
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

.background{
	width: 400rpx;
	height: 1500rpx;
	// background-color: green;
}

view{
	width: 300rpx;
	height: 300rpx;
}

canvas{
	position: fixed;
	top: 60%;
	left: 27%;
	width: 350rpx;
	height: 350rpx;
	background-color: pink;
}

</style>
