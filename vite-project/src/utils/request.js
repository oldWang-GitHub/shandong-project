/**
 * axios二次封装
 * 
 */
// 导入element-plus的弹框组件
import { ElMessage } from "element-plus";
// 定义错误信息
const TOKEN_INVALID = "Token 认证失败, 请重新登录!";
const NETWORK_ERROR = "网络请求异常, 请稍后重试!";
// 导入路由
import router from "../router/index.js";
// 导入axios
import axios from "axios";
// 导入url配置
import config from "../config/index"
// 导入storage
import storage from "../utils/storage"

// 创建axios实例, 添加全局配置
const service = axios.create({
    	// 从配置中取出baseURL
    	baseURL: config.baseApi,
    	// 设置超时
    	timeout:8000
	})

// 请求拦截
service.interceptors.request.use((req)=>{
	// 获取请求头
	const headers = req.headers
	// 如果请求头中,没有验证信息,给个默认值
	if(!headers.Authorization){
		headers.Authorization = "Hello"
		// 从localstorage中获取token
		const {token} = storage.getItem("userInfo") || "hello"
		// 在请求头中,携带token
		headers.Authorization = "Bearer "+token
	}
	// 返回请求信息,接着往后走
	return req
})

// 响应拦截
service.interceptors.response.use((res) => {
	// 从响应的数据中, 获取code,data, msg
	const { code, data, msg } = res.data;
	// 如果状态码200, 直接返回data
	if (code === 200) {
		return data;
	} else if (code === 5001) {
		// 如果错误码5001, 报错, 返回错误信息
		ElMessage.error(TOKEN_INVALID); // 页面弹框
		// 路由跳转登录页面, 给一些时间, 比如1.5s
		setTimeout(() => {
			router.push("/login");
		}, 15000);
		return Promise.reject(TOKEN_INVALID); // 控制台
	} else {
		// 走到这一步, 就是其他报错
		ElMessage.error(msg || NETWORK_ERROR);
		return Promise.reject(msg || NETWORK_ERROR);
	}
});

// 封装request
function request(options) {
	// 默认get请求
	options.method = options.method || "get";
	// 有时候方法是大写的GET, 所以先转小写
	if (options.method.toLowerCase() === "get") {
		// 传参的时候, 都传递data, 虽然get需要的是params, 我们可以进行转换
		options.params = options.data;
	}
	// 局部设置mock
	if (typeof options.mock !== "undefined") {
		config.mock = options.mock;
	}
	// 如果是生产环境, 一定要调线上的正式的api
	if (config.env === "prod") {
		service.defaults.baseURL = config.baseApi;
	} else {
		// 判断是否开启了mock, 如果开了, 走mock, 如果没开, 走线上正式的api
		service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi;
	}
	return service(options);
}

// 导出
export default request;