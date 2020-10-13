<template>
	<view class="main">
		<u-action-sheet :list="list" @click="click" v-model="show"></u-action-sheet>
		<u-button class="button" type="primary" shape="circle" @click="show = true">点击拨打运营经理{{user.name}}</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					name: '',
					tel: ''
				},
				list: [{
					text: this.user.tel
				}, {
					text: '呼叫',
					color: 'blue',
				}],
				show: false
			};
		},
		onLoad(options) {
			console.log(options)
			this.user = options
		},
		onBackPress(e) {
			uni.switchTab({
				url: '/pages/index/index'
			});
			return true;
		},
		methods: {
			click(index) {
				console.log(index)
				uni.makePhoneCall({
				    phoneNumber: '15386495999' //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss">
	.main {
		color: #000;
	}
	.button {
		margin-top: 463rpx;
		width: 80%;
		background-color: rgb(83, 119, 255);
	}
</style>
