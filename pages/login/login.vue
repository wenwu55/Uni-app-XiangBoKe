<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎登录</view>
			<view class="u-demo-area">
				<u-field
					v-model="tel"
					label="手机号"
					maxlength="11"
					:error-message="errorMessage"
					placeholder="请填写手机号"
				>
				</u-field>
				<u-field
					v-model="code"
					label="验证码"
					placeholder="请填写验证码"
				>	
					<template slot="right">
						<u-verification-code :seconds="seconds" @end="end" @start="start" ref="uCode"
						@change="codeChange" :startText="startText" :changeText="changeText"></u-verification-code>
						<u-button size="mini" type="success" @click="getCode">{{tips}}</u-button>
					</template>
				</u-field>
				
				<u-button type="primary" :custom-style="{width: '600rpx', height: '70rpx', marginTop: '30rpx'}" @click="submit" shape="square">登录</u-button>
			</view>
		</view>
		<view class="buttom">
			<view class="loginType">
				<view class="wechat item">
					<view class="icon"><u-icon size="70" name="weixin-fill" color="rgb(83,194,64)"></u-icon></view>
					微信
				</view>
				<view class="QQ item">
					<view class="icon"><u-icon size="70" name="qq-fill" color="rgb(17,183,233)"></u-icon></view>
					QQ
				</view>
			</view>
			<view class="hint">
				登录代表同意
				<text class="link">美团点评用户协议、隐私政策，</text>
				并授权使用您的美团点评账号信息（如昵称、头像、收获地址）以便您统一管理
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tel: '',
			code: '',
			errorMessage: '',
			tips: '',
			seconds: 60,
			refCode: null,
			startText: '获取验证码',
			changeText: 'X秒重新获取',
			endText: '重新获取'
		}
	},
	onReady() {
		// 注意这里为错误示例，目前微信小程序最新稳定版开发工具如此
		// 赋值会报错，很诡异，其他端无此问题
		console.log(this)
		this.refCode = this.$refs.uCode;
	},
	methods: {
		codeChange(text) {
			// console.log(text);
			this.tips = text;
		},
		getCode() {
			if(this.refCode.canGetCode) {
				// 模拟向后端请求验证码
				uni.showLoading({
					title: '正在获取验证码'
				})
				let params = {
					mobile: this.tel
				}
				this.$u.api.fetchCode(params).then(res => {
					console.log(res)
					uni.hideLoading();
					// 这里此提示会被this.start()方法中的提示覆盖
					this.$u.toast('验证码已发送');
					// 通知验证码组件内部开始倒计时
					this.$refs.uCode.start();
				})
			} else {
				this.$u.toast('验证码已发送，请耐心等待');
			}
		},
		end() {
			this.$u.toast('倒计时结束');
		},
		start() {
			this.$u.toast('倒计时开始');
		},
		submit() {
			// {
			// 	"account":"15114879865",
			// 	"code":"123456"
			// }
			if(this.$u.test.mobile(this.tel) && this.code) {
				const params = {
					account: this.tel,
					code: this.code
				}
				console.log(params)
				this.$u.api.login(params).then(res => {
					console.log(res)
					uni.setStorageSync('token', res.token)
					uni.setStorageSync('name', res.name)
					this.$u.route({
						type: 'switchTab',
						url: 'pages/index/index'
					})
				})
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.wrap {
	background-color: #FFFFFF;
	font-size: 28rpx;
	padding-top: 80rpx;
	.content {
		width: 680rpx;
		margin: 0 auto 0;

		.title {
			text-align: left;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 100rpx;
		}
		input {
			text-align: left;
			margin-bottom: 10rpx;
			padding-bottom: 6rpx;
		}
		.getCaptcha {
			background-color: rgb(253, 243, 208);
			color: $u-tips-color;
			border: none;
			font-size: 30rpx;
			padding: 12rpx 0;
			
			&::after {
				border: none;
			}
		}
		.alternative {
			color: $u-tips-color;
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
		}
	}
	.buttom {
		.loginType {
			display: flex;
			padding: 350rpx 150rpx 150rpx 150rpx;
			justify-content:space-between;
			
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: $u-content-color;
				font-size: 28rpx;
			}
		}
		
		.hint {
			padding: 20rpx 40rpx;
			font-size: 20rpx;
			color: $u-tips-color;
			
			.link {
				color: $u-type-warning;
			}
		}
	}
}
</style>
