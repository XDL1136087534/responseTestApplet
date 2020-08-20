<template>
	<view class="content">
		
		<view class="content">
			
			<navigator url="../redEnvelope/redEnvelope">
				<view class="unit">
					<view class="icon">
						<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoyouxi/797c01f0-e05a-11ea-b680-7980c8a877b8.jpg"></image>
					</view>
					<view class="title">
						<view class="title-top">抢红包测速</view>
						<view class="title-bottom">试一试你抢红包的手速吧</view>
					</view>
				</view>
			</navigator>
			<view class="boder" style="background-color: rgb(240, 42, 42);"></view>
			
			<navigator url="../memoryTraining/memoryTraining">
				<view class="unit">
					<view class="icon">
						<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoyouxi/7f3ef6a0-e05b-11ea-b997-9918a5dda011.jpg"></image>
					</view>
					<view class="title">
						<view class="title-top">数字记忆训练</view>
						<view class="title-bottom">
							<view>试一试你的记忆力,</view>
							<view>能挑战哪个难度</view>
						</view>
					</view>
				</view>
			</navigator>
			<view class="boder" style="background-color: rgb(240, 186, 42);"></view>
			
			<navigator url="../reverseThinking/reverseThinking">
				<view class="unit">
					<view class="icon">
						<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoyouxi/796d5bf0-e05a-11ea-81ea-f115fe74321c.jpg"></image>
					</view>
					<view class="title">
						<view class="title-top">逆向思维训练</view>
						<view class="title-bottom">锻炼逆向思维,成为逆向天才</view>
					</view>
				</view>
			</navigator>
			<view class="boder" style="background-color: rgb(47, 251, 229);"></view>
			
			<navigator url="../distinguishColor/distinguishColor">
				<view class="unit">
					<view class="icon">
						<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoyouxi/30f01e70-e05b-11ea-8a36-ebb87efcf8c0.jpg"></image>
					</view>
					<view class="title">
						<view class="title-top">色彩辨别测速</view>
						<view class="title-bottom">突破色彩识别极限</view>
					</view>
				</view>
			</navigator>
			<view class="boder" style="background-color: rgb(32, 61, 230);"></view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			var date = new Date();
			console.log(date.getDate())
			var currentDate = date.getDate();   // 获取当前日
			var yesterdayDate = uni.getStorageSync('yesterdayDate')?uni.getStorageSync('yesterdayDate'):null;
			if(yesterdayDate === null || yesterdayDate < currentDate){   // 新用户或已是新的一天，则有三次免费复活机会
				uni.setStorageSync('freeResurrection', {one_num: 3, two_num: 3, three_num: 3, four_num: 3});
				uni.setStorageSync('yesterdayDate', currentDate);   // 把当前日作为明天的昨天
			}
		},
		methods: {

		}
	}
</script>

<style lang="less">

*{
	padding: 0;
	margin: 0;
}

.content{
	position: absolute;
	top: 10rpx;
	left: 10rpx;
	right: 10rpx;
	bottom: 10rpx;
	background-color: rgb(179, 241, 155);
}

.unit{
	position: relative;
	display: flex;
	width: 630rpx;
	height: 250rpx;
	margin: 30rpx 40rpx;
	background-color: white;
	.icon{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		image{
			width: 100px;
			height: 100px;
		}
	}
	.title{
		flex: 1;
		.title-top{
			text-align: center;
			margin: 50rpx 0;
		}
		.title-bottom{
			font-size: 12px;
			text-align: center;
		}
	}
}

.boder{
		position: relative;
		left: 40rpx;
		width: 630rpx;
		height: 8rpx;
}


</style>
