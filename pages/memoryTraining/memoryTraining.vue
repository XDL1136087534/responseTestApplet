<template>
	<view @click="startPlay" class="background" v-bind:style="{ 'background-color': background_color}">
		
		<!-- 页面初始化 -->
		<view v-if="start_flag===false" class="init">
			<view class="icon">
				<text>123</text>
			</view>
			<view class="content">
				<view>最厉害的人可以瞬间记住7个字符</view>
				<view>你能做到吗?</view>
				<text>单击任意位置开始</text>
			</view>
			<!-- 字节跳动banner -->
			<!--  #ifdef  MP-TOUTIAO -->
			<ad
			    unit-id="165r39oskhv2bl8hcb"
			    @load="adloadhandler"
			    @error="aderrorhandler"
			    @close="adclosehandler"
				style="position: fixed;top: 1000rpx;left: 0rpx;"
			  ></ad>
			<!--  #endif -->
		</view>
		<view v-else class="start">
			<!-- 记忆阶段 -->
			<block v-if="memory_flag">
				<text id="score">{{value}}</text>
				<view class="time-schedule">
					<view class="sum-schedule" ></view>
					<view class="current-schedule" v-bind:style="{ width: currentSchedule + 'rpx'}"></view>
				</view>
				<view class="time-num">倒计时：{{Math.ceil(time)}}s</view>
				<view class="prompt">请在5s内记住数字和字母</view>
				<view style="display: flex;justify-content: center;align-items: center;">
					<!-- 字节跳动banner -->
					<!--  #ifdef  MP-TOUTIAO -->
					<ad
						unit-id="165r39oskhv2bl8hcb"
						@load="adloadhandler"
						@error="aderrorhandler"
						@close="adclosehandler"
						style="position: fixed;top: 900rpx;"
					  ></ad>
					<!--  #endif -->
				</view>
			</block> 
			<!-- 答题阶段 -->
			<block v-else>
				<view class="answer">
					<block v-if="isCorrect===null">
						<text>请输入所记字符</text>
						<input @input="inputValueFun" v-bind:value="inputValue"/>
						<button class="submit" @click="submitResult" type="default">确定</button>
						<view style="display: flex;justify-content: center;align-items: center;">
							<!-- 字节跳动banner -->
							<!--  #ifdef  MP-TOUTIAO -->
							<ad
								unit-id="165r39oskhv2bl8hcb"
								@load="adloadhandler"
								@error="aderrorhandler"
								@close="adclosehandler"
								style="position: absolute;top: 375rpx;"
							  ></ad>
						<!--  #endif -->
						</view>
					</block>
					<block v-else-if="isCorrect===true">
						<text style="font-size: 70rpx; color: #00a8f0;">回答正确</text>
						<view>您已成功坚持<text style="font-size: 45rpx;color: #ff0289">{{qualified}}</text>轮</view>
						<button class="continue" @click="continuePlay">点击继续</button>
						<view style="display: flex;justify-content: center;align-items: center;">
							<!-- 字节跳动banner -->
							<!--  #ifdef  MP-TOUTIAO -->
							<ad
								unit-id="165r39oskhv2bl8hcb"
								@load="adloadhandler"
								@error="aderrorhandler"
								@close="adclosehandler"
								style="position: absolute;top: 365rpx;"
							  ></ad>
							<!--  #endif -->
						</view>
					</block>
					<block v-else>
						<text style="margin-bottom: 40rpx;font-size: 70rpx; color: #DD524D;">回答错误</text>
						<view>正确答案:<text style="font-size: 40rpx;color: #007AFF">{{value}}</text></view>
						<view>您的答案:<text style="font-size: 40rpx;color: #ff9e02">{{inputValue}}</text></view>
						<view>您成功坚持<text style="font-size: 45rpx;color: #ff0289">{{qualified}}</text>轮</view>
						<button @click="resurrectionPlay" class="resurrection" type="default">
							复活挑战
							<block v-if="freeResurrection > 0">({{freeResurrection}})</block>
							<block v-else><image style="width: 40rpx;height: 40rpx;" src="../../static/video.png"></image></block>
						</button>
						<button @click="resetPlay" class="reset" type="default">重新开始</button>
						<view style="display: flex;justify-content: center;align-items: center;">
							<!-- 字节跳动banner -->
							<!--  #ifdef  MP-TOUTIAO -->
							<ad
								unit-id="165r39oskhv2bl8hcb"
								@load="adloadhandler"
								@error="aderrorhandler"
								@close="adclosehandler"
								style="position: absolute;top: 555rpx;"
							  ></ad>
							<!--  #endif -->
						</view>
					</block>
				</view>
			</block>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background_color: 'rgb(137, 217, 254)',  // 背景颜色
				start_flag: false,   // 开始标记
				memory_flag: true,   // 记忆阶段标记
				currentSchedule: 500,   // 进度条长度
				strList: '0123456789',  // 题目的范围
				value: '',   // 当前的题目
				inputValue: '',  // 用户输入的值
				time: 3  ,// 倒计时
				timeSpace: 16.6,  // 进度条缩小像素
				isCorrect: null,   // 回答是否正确, 为空表示不暂时不显示
				duplicateFlag: 0,   // 每一个长度重复3次 
				stringLength: 4,   // 题目的长度
				freeResurrection: 0, // 免费复活次数
				qualified: 0,  // 当前坚持的次数
			};
		},
		onLoad() {
			// 获取免费复活次数
			var data = uni.getStorageSync('freeResurrection');
			this.freeResurrection = data.two_num;
			
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
			// 开始游戏
			startPlay: function(){
				if(this.start_flag === false){
					this.start_flag = true;
					// 根据坚持次数增加游戏难度
					if(this.qualified >= 6 && this.qualified < 9){
						// this.currentSchedule = this.currentSchedule + 100 * 2;
						this.time  = this.time + 2   // 延长记忆时间
						this.timeSpace = 10;
						this.strList = this.strList.concat('abcdefghijklmnopqrstuvwxyz');
						console.log(this.strList);
					}
					else if(this.qualified >= 9){
						// this.currentSchedule = this.currentSchedule + 100 * 3;
						this.time  = this.time + 4;   // 延长记忆时间
						this.timeSpace = 7.14;
						this.strList = this.strList.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
						console.log(this.strList);
					}
					this.value = this.randomString(this.strList, this.stringLength);  // 题目不限制长度
					// 开始倒计时
					let timer = setInterval(()=>{
						var time = this.time  * 1000 - 100;
						this.currentSchedule = this.currentSchedule - this.timeSpace;
						this.time = time / 1000;
						if(this.currentSchedule <= 0){
							clearInterval(timer);
							this.time = 0;
							this.memory_flag = false;   // 进入答题阶段
							this.background_color = 'rgb(163, 238, 134)';
						}
					},100);
				}
			},
			
			// 输入框输入值
			inputValueFun: function(event){
				this.inputValue = event.detail.value.trim();
			},
			
			// 提交结果
			submitResult: function(){
				console.log(this.value)
				console.log(this.inputValue)
				if(this.value === this.inputValue){
					this.isCorrect = true;
					this.duplicateFlag++;
					if(this.duplicateFlag >= 3){   // 题目重复3次，长度加一
						this.duplicateFlag = 0;
						this.stringLength++;
					}
					this.qualified++;
				}
				else{
					this.isCorrect = false;
				}
			},
			
			// 继续挑战
			continuePlay: function(){
				// 还原属性值
				this.value = '';
				this.inputValue = '';
				this.start_flag = false;
				this.isCorrect = null;
				this.memory_flag = true;
				this.currentSchedule = 500;
				this.time = 3;
				this.background_color = 'rgb(137, 217, 254)';
				this.startPlay();
			},
			
			// 复活继续
			resurrectionPlay: function(){
				if(this.freeResurrection > 0){
					this.freeResurrection--;
					var data = uni.getStorageSync('freeResurrection');
					data.two_num = this.freeResurrection;
					uni.setStorageSync('freeResurrection', data);
					// 还原属性值
					this.continuePlay();
				}
				else
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
							this.freeResurrection++;
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
			},
			
			// 重新开始
			resetPlay: function(){
				// 还原属性值
				this.value = '';
				this.inputValue = '';
				this.start_flag = false;
				this.isCorrect = null;
				this.memory_flag = true;
				this.currentSchedule = 500;
				this.qualified = 0;
				this.stringLength = 4;
				this.duplicateFlag = 0;
				this.time = 3;
				this.timeSpace = 16.5;
				this.strList = '0123456789';
				this.background_color = 'rgb(137, 217, 254)';
			},
			
			// 生成随机字符串
			randomString: function(strList, length){    // strList: 随机字符串的范围   length: 需生成的字符串长度
				var str = '';  // 初始化字符串
				for(var i = 0;i < length;i++){
					str = str + strList[Math.floor(Math.random()*strList.length)];
				}
				return str;
			},
			
			// 字节跳动视频广告
			TOUTIAO_ad: function(){
				// 显示广告
				this.videoAd
					.show()
					.then(() => {
					    console.log("广告显示成功");
					})
					.catch((err) => {
						uni.showToast({
							title: '广告组件出现问题',
							icon: 'none',
							mask: true,
							duration: 2000
						});
						this.freeResurrection++;   // 直接给予用户奖励
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
			// #endif
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
	position: fixed;
	top: 15%;
	left: 10%;
	width: 600rpx;
	height: 950rpx;
	.icon{
		position: relative;
		left: 37%;
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		border: 8rpx solid white;
		text{
			position: relative;
			top: 40rpx;
			left: 27rpx;
			font-size: 50rpx;
			font-weight: bold;
			color: white;
		}
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
			top: 75%;
			left: 23%;
		}
	}
}

.start{
	position: absolute;
	top: 20%;
	left: 10%;
	text-align: center;
	#score{
		font-size: 80rpx;
		color: white;
	}
	.time-schedule{
		margin: 60rpx 0rpx;
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
			// width: 500rpx;
			height: 20rpx;
			background-color: blue;
			border-radius: 20rpx;
			margin: 0rpx 50rpx;
		}
	}
	.time-num{
		display: flex;
		justify-content: center;
	}
	.prompt{
		margin-top: 200rpx;
		font-size: 40rpx;
		color: white;
		font-weight: bold;
	}
	.answer{
		position: absolute;
		width: 600rpx;
		height: 500rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		text{
			font-size: 60rpx;
			color: white;
		}
		input{
			width: 400rpx;
			height: 70rpx;
			background-color: white;
			border-radius: 20rpx;
		}
		button{
			width: 250rpx;
			height: 100rpx;
			font-size: 35rpx;
			border: 3px solid white;
			color: white;
		}
		.submit{
			background-color: transparent;
		}
		.continue{
			background-color: transparent;
		}
		.resurrection{
			position: relative;
			top: 195rpx;
			left: -140rpx;
			width: 250rpx;
			background-color: #87f70e;
		}
		.reset{
			position: relative;
			top: 90rpx;
			left: 170rpx;
			width: 220rpx;
			background-color: #f7dd48;
		}
	}
}
</style>
