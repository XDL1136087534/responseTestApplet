<template>
	<view class="background">
		
		<canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas"></canvas>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shapeList: ['圆形', '正方形', '长方形'],
				colorList: ['白', '红', '蓝', '绿', '紫', '黄'],
				currentShape: null
			};
		},
		onReady: function (e) {
		        var context = uni.createCanvasContext('firstCanvas')
		
		        context.setStrokeStyle("#00ff00")
		        context.setLineWidth(5)
		        context.rect(0, 0, 200, 200)
		        context.stroke()
		        context.setStrokeStyle("#ff0000")
		        context.setLineWidth(2)
		        context.moveTo(160, 100)
		        context.arc(100, 100, 60, 0, 2 * Math.PI, true)
		        context.moveTo(140, 100)
		        context.arc(100, 100, 40, 0, Math.PI, false)
		        context.moveTo(85, 80)
		        context.arc(80, 80, 5, 0, 2 * Math.PI, true)
		        context.moveTo(125, 80)
		        context.arc(120, 80, 5, 0, 2 * Math.PI, true)
		        context.stroke()
		        context.draw()
		},
		methods:{
			start: function(){
				var shape = this.shapeList[Math.floor(Math.random()*3)];  // 选取形状
				var color = this.colorList[Math.floor(Math.random()*6)];  // 选取颜色
				
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

</style>
