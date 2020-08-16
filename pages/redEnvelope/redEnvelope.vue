<template>
	<view>
		
		<!-- 背景 -->
		<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoyouxi/c0d2da70-cb69-11ea-b244-a9f5e5565f30.jpg"></image>
		
		<!-- 页面初始化 -->
		<view v-if="start_flag===false" class="init">
			<image @click="start" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoyouxi/91b9e040-cb0e-11ea-8a36-ebb87efcf8c0.png"></image>
			<view @click="start">点击开始</view>
			<view >当红包出现,开始点击红包测试</view>
			<!-- 字节跳动banner -->
			<!--  #ifdef  MP-TOUTIAO -->
			<ad
			    unit-id="165r39oskhv2bl8hcb"
			    bindload="adloadhandler"
			    binderror="aderrorhandler"
			    bindclose="adclosehandler"
				type="lImg rImg"
				scale="100 100"
				style="position: fixed;top: 1000rpx;left: 0rpx;"
			  ></ad>
			<!--  #endif -->
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
					 <button class="resurrection" @click="resurrectionPlay" type="default">
						 复活挑战
						 <block v-if="freeResurrection > 0">({{freeResurrection}})</block>
						 <block v-else><image style="margin: 20rpx 10rpx;width: 40rpx;height: 40rpx;" src="../../static/video.png"></image></block>
					</button>
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
				qualifiedTime: 800,  // 合格时间
				futureQualifiedTime: 500,   // 下一次的合格时间
				showRedEnvelope: false,    // 红包是否已出现
				showTime: 0,    // 红包出现的时间
				endTime: 0,     // 红包被点击的时间
				speed: 0,    // 测试的速度
				freeResurrection: 0,   // 免费复活次数
				qualified: 0, // 坚持的次数
				videoAd: null   // 广告
			};
		},
		onLoad() {
			// 获取免费复活次数
			var data = uni.getStorageSync('freeResurrection');
			this.freeResurrection = data.one_num;
			
			// 字节跳动   接入广告
			//#ifdef MP-TOUTIAO	   
			tt.getSystemInfo({
				 success:(res)=>{
				   if(res.appName == 'Douyin'){  // 抖音小程序
					this.videoAd = tt.createRewardedVideoAd({ adUnitId: 'm4b0cj6iplh26cqvst' });
					// 监听用户是否观看完视频
					this.videoAd.onClose((res) => {
						if(res.isEnded) {
							this.continuePlay();   // 继续游戏
						}
					});
				}
				 },
			});
			//#endif
			
			 // 微信小程序  接入广告
			//#ifdef MP-WEIXIN   
			this.videoAd = wx.createRewardedVideoAd({ adUnitId: 'xxxx' })
			this.videoAd .onLoad(() => {
				 console.log('onLoad event emit')
			})
			this.videoAd .onError((err) => {
				 console.log('onError event emit', err)
			})
			this.videoAd .onClose((res) => {
				 console.log('onClose event emit', res)
			})
			console.log('videoAd: ' + this.videoAd);
			//#endif
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
					// 以50间距缩小合格时间  100ms为最终值
					this.futureQualifiedTime = (this.qualifiedTime - 50)<100?100:(this.qualifiedTime - 50);
				}
			},
			
			// 继续游戏
			continuePlay: function(){
				this.qualifiedTime = this.futureQualifiedTime;
				this.start();
			},
			
			// 复活继续
			resurrectionPlay: function(){
				if(this.freeResurrection > 0){
					this.freeResurrection--;
					var data = uni.getStorageSync('freeResurrection');
					data.one_num = this.freeResurrection;
					uni.setStorageSync('freeResurrection', data);
					this.start();
				}
				else{
					//#ifndef MP-TOUTIAO
						uni.showToast({
							title: '其他播放广告',
							icon: 'none',
							mask: true,
							duration: 2000
						});
					//#endif
					
					// 字节跳动小程序广告
					//#ifdef MP-TOUTIAO
						if(this.videoAd != null){   // 用户设备支持广告
							uni.showModal({
								title: '提示',
								content: '需观看完整视频，才能复活哦',
								success: (res)=>{
									if (res.confirm) {
										this.TOUTIAO_ad();
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						}
						else{
							uni.showModal({
								title: '暂不支持广告',
								duration: 2000,
								icon: 'none'
							})
						}
					//#endif
					
					//#ifdef MP-WEIXIN
						this.videoAd.show()
						.catch(() => {
						    this.videoAd.load()
						    .then(() => this.videoAd.show())
						    .catch(err => {
						      console.log('激励视频 广告显示失败')
						    })
						})
					//#endif
				}
			},
			
			// 重新开始游戏
			reset: function(){
				this.qualified = 0;
				this.qualifiedTime = 800;
				this.start();
			},
			
			// 字节跳动广告
			TOUTIAO_ad: function(){
				// 显示广告
				this.videoAd
					.show()
					.then(() => {
					    console.log("广告显示成功");
					})
					.catch((err) => {
					    console.log("广告组件出现问题", err);
						uni.showToast({
							title: '广告组件出现问题',
							icon: 'none',
							mask: true,
							duration: 2000
						});
					    // 可以手动加载一次
					    this.videoAd.load().then(() => {
					      console.log("手动加载成功");
					      // 加载成功后需要再显示广告
					      return this.videoAd.show();
					    });
					});
			},
			
			// 字节跳动banner广告
			// #ifdef MP-TOUTIAO
			adloadhandler: function(e){
			    console.log("广告加载成功");
			},
			  
			aderrorhandler: function(e){
			    console.log("广告加载失败", e);
				tt.showToast({
			      title: "广告加载失败" + e.errMsg,
			      icon: "fail",
			    });
			},
			
			adclosehandler: function(e){
			   console.log("广告关闭");
			},
			//#endif
			
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
			top: 285rpx;
			left: -160rpx;
			width: 260rpx;
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
