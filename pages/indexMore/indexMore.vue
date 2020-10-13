<template>
	<view class="main">
		<view class="search">
			<u-field v-model="car" placeholder-style="color: #3c65ff;" placeholder="请输入要搜索的车牌号"></u-field>
			<view class="searchBtn">
				<image class="img" src="../../static/sousuo@2x.png" mode=""></image>
			</view>
		</view>
		<view class="content">
			<view class="item">
				<view class="number">
					435
				</view>
				<view class="title">
					入场车辆
				</view>
			</view>
			<view class="item">
				<view class="number">
					435
				</view>
				<view class="title">
					入场车辆
				</view>
			</view>
		</view>
		
		<view class="maxW">
			<u-gap height="16" bg-color="#F5F6FA"></u-gap>
		</view>
		
		<view class="list">
			<view class="title">
				<view class="item">车牌号</view>
				<view class="item">入场时间</view>
				<view class="item">出场时间</view>
			</view>
			<view class="content" v-for="(item, index) in datalist" :key="index" :class="index % 2 === 1 ? 'item1' : ''">
				<view class="item">{{item.car}}</view>
				<view class="item">{{item.in}}</view>
				<view class="item">{{item.out}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				car: '',
				datalist: [
					{
						car: '湘AZ88E2',
						in: '01/06 14:29:03',
						out: '01/07 14:29:03'
					},
					{
						car: '湘AZ88E2',
						in: '01/06 14:29:03',
						out: '01/07 14:29:03'
					},
					{
						car: '湘AZ88E2',
						in: '01/06 14:29:03',
						out: '01/07 14:29:03'
					},
					{
						car: '湘AZ88E2',
						in: '01/06 14:29:03',
						out: '01/07 14:29:03'
					},
					{
						car: '湘AZ88E2',
						in: '01/06 14:29:03',
						out: '01/07 14:29:03'
					}
				]
			};
		}
	}
</script>

<style lang="scss">
.main {
	width: 100%;
	.search {
		border: 1px solid #ddd;
		padding: 9rpx 32rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		.searchBtn {
			width: 98rpx;
			height: 66rpx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			background-color: $u-main-color;
			.img {
				width: 25rpx;
				height: 25rpx;
			}
		}
	}
	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		padding: 25rpx;
		text-align: center;
		.item {
			.number {
				font-size: 34rpx;
				color: $u-main-color;
				font-weight: bold;
				margin-bottom: 6rpx;
			}
			.title {
				font-size: 20rpx;
				color: #b5b5b5;
			}
		}
	}
	.list {
		background-color: #f5f6fa;
		.title {
			background-color: #fff;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			padding: 14rpx 0;
			box-shadow: 0 3rpx 6rpx rgba(0, 0, 0, 0.09);
			.item {
				color: #3c65ff;
				padding: 7rpx 36rpx;
				font-size: 26rpx;
				border: 1px solid #3c65ff;
				text-align: center;
			}
		}
		.item1 {
			background-color: #fff;
			box-shadow: 0 3rpx 6rpx rgba(0, 0, 0, 0.09);
		}
		.content {
			flex-direction: row;
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 20rpx 0;
			text-align: center;
			.item {
				font-size: 16rpx;
				flex: 1;
				color: #000;
			}
		}
	}
}
</style>
