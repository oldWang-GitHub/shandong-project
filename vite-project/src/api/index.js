/**
 * API管理
 */

// 引入request
import request from "../utils/request";
//  导出login方法
export default {
	login(params) {
		// 该方法调用了request
		return request({
			method: "post", // 请求方法 post
			url: "/users/login", // 请求路径
			data: params, // 携带的数据
			mock: true, // 局部mock设置, 优先级更高, 是否走mock接口
		});
	},
	getMainData() {
		return request({
			method: "get",
			url: "/data/main",
			data: {},
			mock: true,
		});
	}
};