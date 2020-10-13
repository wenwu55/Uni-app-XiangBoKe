<template>
	<view class="content">
		<view class="maxW">
			<u-gap height="21" bg-color="#F5F6FA"></u-gap>
		</view>
		
		<view class="echartView">
			<view class="top">
				<u-dropdown title-size="34">
					<u-dropdown-item v-model="value" :title="dropdownList[value].label" :options="dropdownList" @change="changeDrop"></u-dropdown-item>
				</u-dropdown>
				<view class="tabbar">
					<view class="rightTabs">
						<u-subsection :list="list" :current="0" active-color="#5377FF" bgColor="#fff" buttonColor="#eee" @change="change"></u-subsection>
					</view>
				</view>
			</view>
			<echarts-el :option="option" style="height: 300px;"></echarts-el>
			<view class="bottom">
				<view class="left">
					<view class="title u-text-center u-margin-bottom-10">昨日收入</view>
					<view class="blackColor"><text class="mainColor">￥</text><text class="font700">1563.00</text></view>
				</view>
				<view class="right">
					<view class="infoColor u-margin-bottom-10">当前累积收入：<text class="mainColor">￥</text><text class="blackColor font700">1563.00</text></view>
					<view class="infoColor">当月环比下月下降：<text class="blackColor font700">54%</text></view>
				</view>
			</view>
		</view>
		
		<view class="maxW">
			<u-gap height="21" bg-color="#F5F6FA"></u-gap>
		</view>
		
		<view class="cardTotal u-font-sm">
			<view class="title">
				<view class="u-flex">
					<text class="u-font-md u-margin-right-10">红心小区实时统计</text>
					<u-icon name="info-circle" color="#B5B5B5"></u-icon>
				</view>
				<view class="u-flex infoColor iconCenter">
					<text class="u-font-sm">更多</text>
					<u-icon name="arrow-right" size="24"></u-icon>
				</view>
			</view>
			
			<view class="main u-text-center u-margin-top-10">
				<view class="u-font-sm left">
					<view class="money">¥0</view>
					<view class="infoColor">湘泊客缴费总额</view>
				</view>
				<view class="u-font-sm right">
					<view class="u-font-sm">
						<view class="money blackColor font700">0</view>
						<view class="infoColor">入场车辆</view>
					</view>
					<view class="u-font-sm u-margin-left-30">
						<view class="money blackColor font700">0</view>
						<view class="infoColor">出场车辆</view>
					</view>
				</view>
			</view>
		</view>
	
		<view class="cardTotal u-font-sm margin">
			<view class="title">
				<view class="u-flex">
					<text class="u-font-md u-margin-right-10">月租车到期提醒</text>
				</view>
				<view class="u-flex infoColor iconCenter">
					<text class="u-font-sm">更多</text>
					<u-icon name="arrow-right" size="24"></u-icon>
				</view>
			</view>
			
			<view class="main u-text-center u-margin-top-10 u-row-between">
				<view class="u-font-sm left border">
					<view class="money blackColor">0</view>
					<view class="infoColor">月租车总数</view>
				</view>
				<view class="u-font-sm border">
					<view class="money mainColor font700">0</view>
					<view class="infoColor">明日到期</view>
				</view>
				<view class="u-font-sm u-margin-left-30 border">
					<view class="money blackColor font700">0</view>
					<view class="infoColor">本月即将到期总数</view>
				</view>
			</view>
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
		
		<view class="maxW">
			<u-gap height="21" bg-color="#F5F6FA"></u-gap>
		</view>
		
		<view class="cardTotal u-font-sm">
			<view class="title">
				<view class="u-flex">
					<text class="u-font-md u-margin-right-10">视频监控</text>
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
		
		<view class="maxW">
			<u-gap height="21" bg-color="#F5F6FA"></u-gap>
		</view>
		
		<view class="crad">
			<view class="title blackColor font700 u-font-lg">常用应用</view>
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
					<image class="menuIcon" src="../../static/menu/jiesuan.png" mode=""></image>
					<view class="menu u-font-sm">结算中心</view>
				</view>
				<view class="icon-item">
					<image class="menuIcon" src="../../static/menu/churukou@2x.png" mode=""></image>
					<view class="menu u-font-sm">出入车记录</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import EchartsEl from '@/components/echarts/echarts-el.vue'
export default {
	data() {
		return {
			list: [
				{
					name: '收入'
				},
				{
					name: '车流'
				}
			],
			value: 1,
			dropdownList: [
				{
					label: '默认排序',
					value: 0,
				},
				{
					label: '距离优先',
					value: 1,
				},
				{
					label: '价格优先',
					value: 2,
				}
			],
			option: {},
			option2: {
				notMerge: true, // 自定义变量：true代表不合并数据，比如从折线图变为柱形图则需设置为true；false或不写代表合并
				tooltip: {
					trigger: 'axis',
					positionStatus: true,
					formatterStatus: true, // 自定义变量：是否格式化tooltip，设置为false时下面三项均不起作用
					formatterUnit: '元', // 自定义变量：数值后面的单位
					formatFloat2: true, // 自定义变量：是否格式化为两位小数
					formatThousands: true // 自定义变量：是否添加千分位
				},
				grid: {
					left: '5%',
					right: '8%',
					bottom: '5%',
					containLabel: true
				},
				xAxis: [
					{
						type: 'category',
						data: ['周一', '周二', '周三', '周四', '周五']
					}
				],
				yAxis: [
					{
						type: 'value'
					}
				],
				series: [
					{
						name: '邮件',
						type: 'bar',
						data: [120, 132, 101, 134, 90],
						// 自定义变量，以数组形式传递渐变参数
						linearGradient: [0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]]
					},
					{
						name: '手机',
						type: 'bar',
						data: [220, 182, 191, 234, 290],
						// 自定义变量，以数组形式传递渐变参数
						linearGradient: [0, 0, 0, 1,
                        [
                            {offset: 0, color: '#0bac00'},
                            {offset: 0.7, color: '#0dcb00'},
                            {offset: 1, color: '#0fef00'}
                        ]]
					}
				]
			},
			option3: {
				notMerge: true, // 自定义变量：true代表不合并数据，比如从折线图变为柱形图则需设置为true；false或不写代表合并
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: [
					{
						data: [120, 200, 150, 80, 70, 110, 130],
						type: 'bar',
						showBackground: true,
						backgroundStyle: {
							color: 'rgba(220, 220, 220, 0.8)'
						}
					}
				]
			}
		};
	},
	components: {
		EchartsEl
	},
	onLoad() {
		this.option = this.option2
	},
	methods: {
		changeDrop(i) {
			console.log(i)
		},	
		change(i) {
			this.current = i
			if (this.option === this.option2) {
				this.option = this.option3
			} else {
				this.option = this.option2
			}
		},
		/**
		 * 点击事件
		 * @param {Object} params
		 */
		echartsClick(params) {
			console.log('点击数据', params)
		},
		/**
		 * 切换数据
		 */
		updateClick() {
			if (this.option === this.option2) {
				this.option = this.option3
			} else {
				this.option = this.option2
			}
		}
	}
};
</script>

<style lang="scss">
	.content {
		width: 100%;
		color: #000;
		.echartView {
			width: 100%;
			padding: 32rpx;
			.top {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				.tabbar {
					flex: 1;
					.rightTabs {
						width: 100%;
					}
				}
			}
			.bottom {
				border-top: 1px solid #b5b5b5;
				display: flex;
				padding: 30rpx 0 60rpx 60rpx;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}
		}
		
		.main {
			width: 100%;
			display: flex;
			flex-direction: row;
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
					padding: 5rpx 0rpx;
					justify-content: space-between;
					align-items: center;
					.time {
						color: #7d7d7d;
					}
				}
			}
		}
		.margin {
			background-color: #f5f6fa;
			padding-top: 40rpx;
			padding-bottom: 40rpx;
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
		.border {
			border: 1px dashed #000;
			padding: 10rpx 18rpx;
			background-color: #5377ff;
		}
	}
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
</style>
