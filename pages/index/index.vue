<template>
	<view class="content">
		
		<view class="content">
			
			<navigator url="../redEnvelope/redEnvelope">
				<view class="unit">
					<view class="icon">
						<image src="https://yanxuan.nosdn.127.net/9caf7313b0d3a29b9f77d70870c1b06a.jpg"></image>
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
						<image src="https://yanxuan.nosdn.127.net/cf4d7e55842946f0ab2b0337a357dadf.jpg"></image>
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
			
			<navigator>
				<view class="unit">
					<view class="icon">
						<image src="https://yanxuan.nosdn.127.net/8c176fd0fdececc4f9493d4a36842ecd.jpg"></image>
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
						<image src="https://yanxuan.nosdn.127.net/bce0ea1801289176f2c3f858ed5f94cb.jpg"></image>
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
