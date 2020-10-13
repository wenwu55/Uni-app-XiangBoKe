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
			<button @click="updateClick">切换数据</button>
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
		}
	}
</style>
