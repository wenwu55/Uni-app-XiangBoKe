// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
// 登录 accout， code
let LoginUrl = '/app/login';
// 获取验证码
let getCode = '/app/send/msg'
/* 管理端 */
// 首页-收入统计和车场实时统计
let adminUrl = '/app/home/statistic/income'
// 车场实时统计-车牌号-入场时间-出场时间
let carTotalUrl = '/app/home/car/flowRecord'
// 车场指标明细-收入统计和车场实时统计
let carDetailUrl = '/app/home/statistic/income/{parkId}'
// 车场指标明细-单个停车场的月份收入统计(柱状图)
let oneParkUrl = '/app/home/statistic/park/{parkId}'
// 首页-总车场指标
let allParkUrl = '/app/home/statistic/parkAll'
// 首页-公告-通知-待办-消息
let messageUrl = '/app/notice'

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	// 登录
	let login = (params = {}) => vm.$u.post(LoginUrl, params);
	
	// 此处使用了传入的params参数，一切自定义即可
	let getAdminInfo = (params = {}) => vm.$u.get(adminUrl);
	let fetchCode = (params = {}) => vm.$u.get(getCode, params);
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {login, getAdminInfo, fetchCode};
}

export default {
	install
}