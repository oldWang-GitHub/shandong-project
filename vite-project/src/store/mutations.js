// 引入封装好的storage
import storage from "../utils/storage";
// 导出
export default {
	saveUserInfo(state, userInfo) {
		// 保存用户信息到vuex
		state.userInfo = userInfo;
		// 保存用户信息到localstorage
		storage.setItem("userInfo", userInfo);
	},
	removeUserInfo(state){
		// 清除用户信息
		state.userInfo = ""
		// 删除localstorage的用户信息
		storage.clearItem("userInfo")
	},
	// 保存菜单列表
	setMenuList(state, menuList) {
		// 保存菜单列表到vuex
		state.menuList = menuList;
		// 保存菜单列表到localstorage
		localStorage.setItem("menuList", JSON.stringify(menuList));
	}
};