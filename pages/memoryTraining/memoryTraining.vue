<template>
	<view @click="startPlay" class="background" v-bind:style="{ 'background-color': background_color}">
		
		<!-- 页面初始化 -->
		<view v-if="start_flag===false" class="init">
			<view class="icon">
				<text>123</text>
			</view>
			<view class="content">
				<view>最厉害的人可以瞬间记住7个数字</view>
				<view>你能做到吗?</view>
				<text>单击任意位置开始</text>
			</view>
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
			</block> 
			<!-- 答题阶段 -->
			<block v-else>
				<view class="answer">
					<block v-if="isCorrect===null">
						<text>请输入所记字符</text>
						<input @input="inputValueFun" v-bind:value="inputValue"/>
						<button class="submit" @click="submitResult" type="default">确定</button>
					</block>
					<block v-else-if="isCorrect===true">
						<text style="font-size: 70rpx; color: #00a8f0;">回答正确</text>
						<view>您已成功坚持{{qualified}}轮</view>
						<button class="continue" @click="continuePlay">点击继续</button>
					</block>
					<block v-else>
						<text style="margin-bottom: 40rpx;font-size: 70rpx; color: #DD524D;">回答错误</text>
						<view>正确答案:<text style="font-size: 40rpx;color: #007AFF">{{value}}</text></view>
						<view>您的答案:<text style="font-size: 40rpx;color: #ff9e02">{{inputValue}}</text></view>
						<view>您成功坚持<text style="font-size: 45rpx;color: #ff0289">{{qualified}}</text>轮</view>
						<button @click="resurrectionPlay" class="resurrection" type="default">复活继续({{freeResurrection}})</button>
						<button @click="resetPlay" class="reset" type="default">重新开始</button>
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
				time: 5  ,// 倒计时
				timeSpace: 10,  // 进度条缩小像素
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
						this.timeSpace = 7;
						this.strList = this.strList.concat('abcdefghijklmnopqrstuvwxyz');
						console.log(this.strList);
					}
					else if(this.qualified >= 9){
						// this.currentSchedule = this.currentSchedule + 100 * 3;
						this.time  = this.time + 5;   // 延长记忆时间
						this.timeSpace = 5;
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
				this.time = 5;
				this.background_color = 'rgb(137, 217, 254)';
			},
			
			// 复活继续
			resurrectionPlay: function(){
				if(this.freeResurrection > 0){
					this.freeResurrection--;
					var data = uni.getStorageSync('freeResurrection');
					data.two_num = this.freeResurrection;
					uni.setStorageSync('freeResurrection', data);
					// 还原属性值
					this.value = '';
					this.inputValue = '';
					this.start_flag = false;
					this.isCorrect = null;
					this.memory_flag = true;
					this.currentSchedule = 500;
					this.time = 5;
					this.background_color = 'rgb(137, 217, 254)';
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
				this.time = 5;
				this.timeSpace = 10;
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
			top: 95%;
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
