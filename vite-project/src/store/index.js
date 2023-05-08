// 导入vuex
import {createStore} from "vuex";

// 引入mutaitons
import mutations from "./mutations";
// 引入我们封装的localstorage
import storage from "../utils/storage";
// 获取用户信息, userInfo 从localstorage中获取, 没有就是空
const state = {
	userInfo: storage.getItem("userInfo") || "",
	menuList: localStorage.getItem("menuList") || [],
};
// 导出
export default createStore({
	state,
	mutations,
});