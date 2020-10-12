<template>
	<view class="content">
		<u-navbar :is-back="false" title="控制台">
			<view class="slot-wrap">
				<u-icon name="scan" color="#3c65ff"></u-icon>
				<u-icon name="bell" color="#3c65ff"></u-icon>
			</view>
		</u-navbar>
		
		<view class="imageGroup">
			<u-image width="100%" height="400rpx" src="../../static/banner.png"></u-image>
			<text class="imgaeTitle">湘泊客 • 智慧停车引领者</text>
		</view>
		<view class="text-area">
			<view class="title">
				总车场指标
			</view>
			<view class="rightTabs">
				<u-subsection :list="list" :current="0" active-color="#5377FF" bgColor="#fff" buttonColor="#eee" @change="change"></u-subsection>
			</view>
		</view>
		
		<u-cell-group :border="false">
			<u-cell-item :title="item.name" :title-style="{fontSize: '32rpx', fontWeight: 700, color: '#000'}" v-for="(item,index) in dataList" :key="index">
				<view class="progress-view">
					<text class="text">{{item.percent}}%</text>
					<view class="progress-lable">
						<u-line-progress active-color="#5377FF" :percent="item.percent"></u-line-progress>
					</view>
					<text class="text mainC">¥{{item.money}}</text>
				</view>
			</u-cell-item>
		</u-cell-group>
		
		<view class="card u-font-sm">
			<view class="left">
				<view>昨日总收入</view>
				<view>
					<text class="mainColor">¥</text>
					<text class="blackColor font700">123456</text>
				</view>
			</view>
			<u-line color="#F5F6FA" length="56" direction="col"/>
			<view class="middle">
				<view class="">
					<text>当月累计收入：</text> <text class="mainColor">¥</text><text class="blackColor font700">123456</text>
				</view>
				<view class="">
					<text>当月环比上月下降 ：</text> <text class="mainColor font700">55%</text>
				</view>
			</view>
			<view class="right mainColor">
				<view class="u-flex iconCenter">
					<text>明细</text>
					<u-icon name="arrow-right" size="24"></u-icon>
				</view>
			</view>
		</view>
		
		<view class="tel u-font-sm">
			<view class="left">
				<u-image width="61rpx" height="86rpx" src="../../static/2.png"></u-image>
				<view class="info">
					<view>运营经理：啦啦</view>
					<view>联系电话：123-4567-8910</view>
				</view>
			</view>
			<view class="btn">
				<u-button type="primary" size="mini" shape="square">立即联系</u-button>
			</view>
		</view>
		
		<view class="maxW">
			<u-gap height="16" bg-color="#F5F6FA" margin-top="22"></u-gap>
		</view>
		
		<view class="cardTotal u-font-sm">
			<view class="title">
				<view class="u-flex">
					<text class="u-font-md u-margin-right-10">车场实时统计</text>
					<u-icon name="info-circle" color="#B5B5B5"></u-icon>
				</view>
				<view class="u-flex infoColor iconCenter">
					<text class="u-font-sm">更多</text>
					<u-icon name="arrow-right" size="24"></u-icon>
				</view>
			</view>
			
			<view class="main u-text-center u-margin-top-10">
				<view class="u-font-sm left">
					<view class="money">¥123456</view>
					<view class="infoColor">湘泊客缴费总额</view>
				</view>
				<view class="u-font-sm right">
					<view class="u-font-sm">
						<view class="money blackColor font700">123456</view>
						<view class="infoColor">入场车辆</view>
					</view>
					<view class="u-font-sm u-margin-left-30">
						<view class="money blackColor font700">123456</view>
						<view class="infoColor">出场车辆</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="maxW">
			<u-gap height="16" bg-color="#F5F6FA" margin-top="22"></u-gap>
		</view>
		
		<view class="cardTotal u-font-sm">
			<view class="title">
				<view class="u-flex">
					<text class="u-font-md u-margin-right-10">公告</text>
					<u-icon name="volume-up" color="#3C65FF"></u-icon>
				</view>
				<view class="u-flex infoColor iconCenter">
					<text class="u-font-sm">更多</text>
					<u-icon name="arrow-right" size="24"></u-icon>
				</view>
			</view>
			
			<view class="message u-margin-top-10">
				<view class="content">
					<view class="font700 blackColor">8/12日清算通知到账延迟通知</view>
					<view class="time">8-12</view>
				</view>
				<view class="content infoColor">
					<view>8/12日清算通知到账延迟通知</view>
					<view class="time">8-12</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				list: [
					{
						name: '收入'
					},
					{
						name: '车流'
					}
				],
				current: 0,
				dataList: [
					{
						name: '振业城',
						percent: 70,
						money: 50245
					},
					{
						name: '梅溪湖',
						percent: 40,
						money: 50245
					},
				]
			}
		},
		onLoad() {

		},
		onShow() {
			this.$u.api.getAdminInfo().then(res => {
				console.log(res)
			})
		},
		methods: {
			change(i) {
				this.current = i
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.imageGroup {
			width: 100%;
			position: relative;
			.imgaeTitle {
				position: absolute;
				width: 100%;
				height: 100rpx;
				background-color: #000000;
				line-height: 100rpx;
				color: #FFFFFF;
				font-size: 40rpx;
				font-weight: 700;
				padding-left: 30rpx;
				opacity: 0.4;
				bottom: 0;
				left: 0;
				right: 0;
			}
		}
	}
	.slot-wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
		flex: 1;
		/* 如果您想让slot内容与导航栏左右有空隙 */
		padding: 0 30rpx; 
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		width: 100%;
		display: flex;
		padding: 0 30rpx;
		height: 100rpx;
		line-height: 100rpx;
		justify-content: space-between;
		align-items: center;
	}
	
	.title {
		font-size: 36rpx;
		flex: 2;
		font-weight: bold;
		color: #000;
	}
	
	.rightTabs {
		flex: 1;
	}
	
	.progress-view {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.progress-lable {
			flex: 3;
			display: flex;
			align-items: center;
		}
		.text {
			text-align: center;
			flex: 1;
			color: #707070;
		}
		.mainC {
			color: $u-main-color;
		}
	}
	
	.card {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 30rpx;
		color: #b5b5b5;
		.right {
			display: flex;
			align-items: flex-end;
		}
	}
	
	.tel {
		padding: 0 30rpx;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.left {
			display: flex;
			flex-direction: row;
			.info {
				color: #000;
				font-weight: 700;
				margin-left: 30rpx;
			}
		}
		.btn {
			display: flex;
			align-items: flex-end;
		}
	}
	
	.cardTotal {
		width: 100%;
		padding: 30rpx;
		.title {
			display: flex;
			width: 100%;
			flex-direction: row;
			justify-content: space-between;
		}
		.message {
			width: 100%;
			.content {
				width: 100%;
				display: flex;
				flex-direction: row;
				padding: 5rpx 20rpx;
				justify-content: space-between;
				align-items: center;
				.time {
					color: #7d7d7d;
				}
			}
		}
	}
	
	.main {
		width: 100%;
		display: flex;
		flex-direction: row;
		.left {
			color: #FD6200;
			font-weight: 700;
		}
		.right {
			margin-left: 60rpx;
			flex: 1;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		}
	}
</style>
