<template>
	<view>
		
		<!-- 背景 -->
		<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoyouxi/c0d2da70-cb69-11ea-b244-a9f5e5565f30.jpg"></image>
		
		<!-- 页面初始化 -->
		<view v-if="start_flag===false" class="init">
			<image @click="start" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoyouxi/91b9e040-cb0e-11ea-8a36-ebb87efcf8c0.png"></image>
			<view @click="start">点击开始</view>
			<view >当红包出现,开始点击红包测试</view>
		</view>
		<!-- 游戏开始 -->
		<view v-else class="start">
			<view v-show="awit_flag===true">等待红包出现</view>
			<image
				 v-show="showRedEnvelope"
				 v-bind:style="{ top: redEnvelopeLocationTop + 'px', left: redEnvelopeLocationLeft + 'px' }"
				 src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoyouxi/91b9e040-cb0e-11ea-8a36-ebb87efcf8c0.png"
				 @click="stopTimer"
			 ></image>
			 <view class="result" v-show="speed!=0">
				 <view v-if="speed<=qualifiedTime">
					 <view style="font-size: 40px;">{{speed}}ms</view>
					 <view style="color:green;font-size: 20px;">测试合格</view>
					 <view style="margin-top: 20rpx;font-size: 35rpx;">当前合格时间:{{qualifiedTime}}ms</view>
					 <view style="margin-top: 20rpx;font-size: 35rpx;">下轮合格时间:{{futureQualifiedTime}}ms</view>
					 <view style="font-size: 20px;">您已成功坚持<text style="font-size: 50rpx;color: #007AFF">{{qualified}}</text>轮</view>
					 <button @click="continuePlay" type="default" style="margin-top: 100px;background-color: #4CD964;">继续挑战</button>
				</view>
				 <view v-else>
					 <view style="font-size: 40px;">{{speed}}ms</view>
					 <view style="color:rgb(251, 227, 43);font-size: 20px;">测试不合格</view>
					 <view style="margin-top: 20rpx;font-size: 35rpx;">当前合格时间:{{qualifiedTime}}ms</view>
					 <view style="font-size: 20px;">您成功坚持<text style="font-size: 50rpx;color: #007AFF">{{qualified}}</text>轮</view>
					 <button class="resurrection" @click="start" type="default">复活挑战</button>
					 <button class="reset" @click="reset" type="default">重新挑战</button>
				 </view>
			 </view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				start_flag: false,   // 游戏开始标记
				awit_flag: true,     // 等待红包出现
				redEnvelopeLocationTop: 0,    // 红包的位置
				redEnvelopeLocationLeft: 0,
				qualifiedTime: 500,  // 合格时间
				futureQualifiedTime: 500,   // 下一次的合格时间
				showRedEnvelope: false,    // 红包是否已出现
				showTime: 0,    // 红包出现的时间
				endTime: 0,     // 红包被点击的时间
				speed: 0,    // 测试的速度
				qualified: 0   // 坚持的次数
			};
		},
		methods:{
			start: function(){
				this.awit_flag = true;
				this.speed = 0;
				this.start_flag = true;
				var time = Math.random() * 3 + 2;   // 随机控制红包出现的时间 2-5秒  不取整
				setTimeout(()=>{
					this.showRedEnvelope = true;
					this.awit_flag = false;
					this.redEnvelopeLocationTop = Math.ceil(Math.random() * 500 + 50);
					this.redEnvelopeLocationLeft = Math.ceil(Math.random() * 200 + 50);
					this.showTime = new Date().getTime();
					console.log(this.showTime);
				},Math.ceil(time*1000));
			},
			// 计算手速
			stopTimer: function(){
				this.showRedEnvelope = false;
				this.endTime = new Date().getTime();
				this.speed = this.endTime - this.showTime;
				if(this.speed < this.qualifiedTime){   // 测试合格则坚持的轮数加一
					this.qualified++;
					var space = (50 - (this.qualified - 1) * 5) < 30 ? 30 : (50 - (this.qualified - 1) * 5);
					this.futureQualifiedTime = this.qualifiedTime - space;   // 以50-30间距缩小合格时间
				}
			},
			
			// 继续游戏
			continuePlay: function(){
				this.qualifiedTime = this.futureQualifiedTime;
				this.start();
			},
			
			// 重新开始游戏
			reset: function(){
				this.qualified = 0;
				this.qualifiedTime = 500;
				this.start();
			}
		}
	}
</script>

<style lang="less">
	
*{
	margin: 0;
	padding: 0;
}
	
image:first-of-type{
	width: 750rpx;
	height: 1400rpx;
}
	
.init{
	position: absolute;
	top: 30%;
	left: 15%;
	text-align: center;
	image{
		width: 250rpx;
		height: 250rpx;
	}
	view:first-of-type{
		margin-top: 70rpx;
		font-size: 60rpx;
	}
}

.start{
	position: absolute;
	top: 0%;
	left: 28%;
	view:first-of-type{
		margin-top: 300px;
		font-size: 30px;
	}
	image{
		position: fixed;
		width: 100px;
		height: 100px;
	}
	.result{
		position: fixed;
		text-align: center;
		margin: -300rpx 20rpx;
		.resurrection{
			position: relative;
			top: 280rpx;
			left: -140rpx;
			width: 220rpx;
			background-color: #87f70e;
		}
		.reset{
			position: relative;
			top: 190rpx;
			left: 170rpx;
			width: 220rpx;
			background-color: #f7dd48;
		}
	}
}

</style>
