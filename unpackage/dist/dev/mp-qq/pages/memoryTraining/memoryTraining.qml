<view data-event-opts="{{[['tap',[['startPlay',['$event']]]]]}}" class="background" style="{{'background-color:'+(background_color)+';'}}" bindtap="__e"><block qq:if="{{start_flag===false}}"><view class="init"><view class="icon"><text>123</text></view><view class="content"><view>最厉害的人可以瞬间记住7个数字</view><view>你能做到吗?</view><text>单击任意位置开始</text></view></view></block><block qq:else><view class="start"><block qq:if="{{memory_flag}}"><block><text id="score">{{value}}</text><view class="time-schedule"><view class="sum-schedule"></view><view class="current-schedule" style="{{'width:'+(currentSchedule+'rpx')+';'}}"></view></view><view class="time-num">{{"倒计时："+$root.g0+"s"}}</view><view class="prompt">请在5s内记住数字和字母</view></block></block><block qq:else><block><view class="answer"><block qq:if="{{isCorrect===null}}"><block><text>请输入所记字符</text><input data-event-opts="{{[['input',[['inputValueFun',['$event']]]]]}}" value="{{inputValue}}" bindinput="__e"/><button class="submit" type="default" data-event-opts="{{[['tap',[['submitResult',['$event']]]]]}}" bindtap="__e">确定</button></block></block><block qq:else><block qq:if="{{isCorrect===true}}"><block><text style="font-size:70rpx;color:#00a8f0;">回答正确</text><view>{{"您已成功坚持"+qualified+"轮"}}</view><button data-event-opts="{{[['tap',[['continuePlay',['$event']]]]]}}" class="continue" bindtap="__e">点击继续</button></block></block><block qq:else><block><text style="margin-bottom:40rpx;font-size:70rpx;color:#DD524D;">回答错误</text><view>正确答案:<text style="font-size:40rpx;color:#007AFF;">{{value}}</text></view><view>您的答案:<text style="font-size:40rpx;color:#ff9e02;">{{inputValue}}</text></view><view>您成功坚持<text style="font-size:45rpx;color:#ff0289;">{{qualified}}</text>轮</view><button class="resurrection" type="default" data-event-opts="{{[['tap',[['resurrectionPlay',['$event']]]]]}}" bindtap="__e">{{"复活继续("+freeResurrection+")"}}</button><button class="reset" type="default" data-event-opts="{{[['tap',[['resetPlay',['$event']]]]]}}" bindtap="__e">重新开始</button></block></block></block></view></block></block></view></block></view>