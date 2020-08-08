<template>
	<view @click="start" class="background" v-bind:style="{ 'background-color': background_color}">
		
		<view v-show="start_flag===false" class="init">
			<view>挑战视觉极限</view>
			<text>单击任意位置开始</text>
		</view>
		<view v-show="start_flag===true" @click="start" class="big-box">
			<block v-if="isCorrect===null">
				<block v-for="(item,index) in colorList" :key="index">
					<view @click="judgeColor(index)" class="min-box" v-bind:style="{ 'background-color': item }"></view>
				</block>
				<view class="prompt">找出上图不同的色块</view>
			</block>
			<block v-else-if="isCorrect===true">
				<view class="result_title">挑战成功!</view>
				<view class="result_prompt">您已成功挑战<text style="font-size: 50rpx;color: #007AFF">{{qualified}}</text>轮</view>
				<button type="default" @click="continuePlay" id="continue_btn">继续挑战</button>
			</block>
			<block v-else>
				<view class="result_title">挑战失败!</view>
				<view class="result_prompt">您成功挑战<text style="font-size: 50rpx;color: #ff0289">{{qualified}}</text>轮</view>
				<view class="buttons">
					<button type="default" @click="resurrectionPlay" id="resurrection_btn">复活继续({{freeResurrection}})</button>
					<button type="default" @click="resetPlay" id="reset_btn">重新开始</button>
				</view>
			</block>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				start_flag: false,
				colorList: new Array(16),
				background_color: 'rgb(155, 239, 215)',
				colorDifference: 30,  // 颜色差异值
				currentDifferenceIndex: 0,   // 当前不同颜色的方块下标
				isCorrect: null,  // 是否正确
				freeResurrection: 0, // 免费复活次数
				qualified: 0,  // 当前坚持的次数
			};
		},
		onLoad() {
			// 获取免费复活次数
			var data = uni.getStorageSync('freeResurrection');
			this.freeResurrection = data.four_num;
		},
		methods:{
			start: function(){
				if(this.start_flag === false){
					this.start_flag = true;
					this.background_color = 'white';
					this.createColorList();
				}
			},
			
			// 生成颜色列表
			createColorList: function(){
				// 随机产生一个颜色
				var r = Math.floor(Math.random() * 255);
				var g = Math.floor(Math.random() * 255);
				var b = Math.floor(Math.random() * 255);
				var color = 'rgb(' + r + ',' + g + ',' + b + ')';
				this.colorList.fill(color)
				console.log(this.colorList);
				// 根据生成的颜色，生成一个相似的颜色  rgb变小则变深，rgb变大则变浅
				var symbol = Math.random() < 0.5 ? -1 : 1;  // rgb随机变大变小
				r = r + (this.colorDifference * symbol);
				g = g + (this.colorDifference * symbol);
				b = b + (this.colorDifference * symbol);
				r = r > 255 ? 255 : (r < 0 ? 0 : r);
				g = g > 255 ? 255 : (g < 0 ? 0 : g);
				b = b > 255 ? 255 : (b < 0 ? 0 : b);
				var twoColor = 'rgb(' + r + ',' + g + ',' + b + ')';
				console.log(twoColor);
				console.log(this.colorDifference);
				// 把相似的颜色随机放在颜色数组中
				this.currentDifferenceIndex = Math.floor(Math.random() * this.colorList.length);
				this.colorList[this.currentDifferenceIndex] = twoColor;
				// 改变难度
				this.colorDifference = this.colorDifference >= 6 ? this.colorDifference - 3 : 6;  // 最低为3
			},
			
			// 小方块的点击事件  判断是否正确
			judgeColor: function(clickIndex){
				if(clickIndex === this.currentDifferenceIndex){
					this.isCorrect = true;
					this.qualified++;
					this.background_color = 'rgb(162, 255, 192)';
				}
				else{
					this.isCorrect = false;
					this.background_color = 'rgb(232, 214, 205)';
				}
			},
			
			// 继续挑战
			continuePlay: function(){
				this.start_flag = false;
				this.isCorrect = null;
				this.start();
			},
			
			// 复活继续
			resurrectionPlay: function(){
				if(this.freeResurrection > 0){
					this.freeResurrection--;
					var data = uni.getStorageSync('freeResurrection');
					data.two_num = this.freeResurrection;
					uni.setStorageSync('freeResurrection', data);
					this.start_flag = false;
					this.isCorrect = null;
					this.start();
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
				this.start_flag = false;
				this.isCorrect = null;
				this.qualified = 0;
				this.colorDifference = 30;
				this.background_color = 'rgb(155, 239, 215)';
				this.colorList = new Array(16);
				this.currentDifferenceIndex = 0;
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
}
	
.init{
	position: absolute;
	top: 15%;
	left: 20%;
	text-align: center;
	display: flex;
	flex-direction: column;
	view{
		font-size: 70rpx;
		font-weight: bold;
		text-align: center;
	}
	text{
		text-align: center;
		margin-top: 600rpx;
	}
}
	
.big-box{
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 130rpx 90rpx;
	.min-box{
		margin: 10rpx 10rpx;
		width: 120rpx;
		height: 160rpx;
	}
	.result_title{
		margin-top: 200rpx;
		font-size: 80rpx;
		color: white;
	}
	.result_prompt{
		margin-top: 40rpx;
		font-size: 40rpx;
	}
	button{
		width: 250rpx;
		height: 100rpx;
		font-size: 35rpx;
		border: 3px solid white;
		color: white;
	}
	#continue_btn{
		position: absolute;
		margin-top: 600rpx;
		background-color: transparent;
	}
	.buttons{
		position: absolute;
		margin-top: 600rpx;
		#resurrection_btn{
			position: absolute;
			left: -300rpx;
			background-color: #87f70e;
		}
		#reset_btn{
			position: absolute;
			left: 70rpx;
			background-color: #f7dd48;
		}
	}
}

.prompt{
	font-size: 50rpx;
	margin: 100rpx 60rpx;
}

</style>
