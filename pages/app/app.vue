<template>
	<view class="main">
		<view class="maxW">
			<u-gap height="16" bg-color="#F5F6FA"></u-gap>
		</view>
		
		<view class="crad">
			<view class="title blackColor font700 u-font-lg">统计报表</view>
			<view class="iconList">
				<view class="icon-item">
					<image class="menuIcon" src="../../static/menu/baobiao.png" mode=""></image>
					<view class="menu u-font-sm">营业报表</view>
				</view>
				<view class="icon-item">
					<image class="menuIcon" src="../../static/menu/jiaofei.png" mode=""></image>
					<view class="menu u-font-sm">缴费记录</view>
				</view>
				<view class="icon-item">
					<image class="menuIcon" src="../../static/menu/zaichangche.png" mode=""></image>
					<view class="menu u-font-sm">在场车记录</view>
				</view>
				<view class="icon-item">
					<image class="menuIcon" src="../../static/menu/jiesuan.png" mode=""></image>
					<view class="menu u-font-sm">结算中心</view>
				</view>
				<view class="icon-item">
					<image class="menuIcon" src="../../static/menu/churukou@2x.png" mode=""></image>
					<view class="menu u-font-sm">出入车记录</view>
				</view>
			</view>
		</view>
		
		<view class="maxW">
			<u-gap height="16" bg-color="#F5F6FA"></u-gap>
		</view>
		
		<view class="crad">
			<view class="title blackColor font700 u-font-lg">智能管理</view>
			<view class="iconList2">
				<view class="icon-item">
					<image class="menuIcon" src="../../static/menu/yuezu.png" mode=""></image>
					<view class="menu u-font-sm">月租车管理</view>
				</view>
				<view class="icon-item">
					<image class="menuIcon" src="../../static/menu/shangjia.png" mode=""></image>
					<view class="menu u-font-sm">商家管理</view>
				</view>
				<view class="icon-item">
					<image class="menuIcon" src="../../static/menu/dianzi.png" mode=""></image>
					<view class="menu u-font-sm">电子折扣卷</view>
				</view>
				<view class="icon-item">
					<image class="menuIcon" src="../../static/menu/tuikuan.png" mode=""></image>
					<view class="menu u-font-sm">退款管理</view>
				</view>
				<view class="icon-item">
					<image class="menuIcon" src="../../static/menu/churuchang.png" mode=""></image>
					<view class="menu u-font-sm">出入场提醒</view>
				</view>
				<view class="icon-item">
					<image class="menuIcon" src="../../static/menu/fapiao.png" mode=""></image>
					<view class="menu u-font-sm">发票管理</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.main {
	width: 100%;
	.crad {
		padding: 20rpx;
		.iconList, .iconList2 {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.icon-item {
				color: #333;
				text-align: center;
				.menuIcon {
					margin: 42rpx 0 16rpx;
					width: 45rpx;
					height: 45rpx;
				}
			}
		}
		.iconList2 {
			flex-wrap: wrap;
			justify-content: flex-start;
			.icon-item {
				width: 25%;
			}
		}
	}
}
</style>
