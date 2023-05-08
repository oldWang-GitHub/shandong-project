
<template>
  <div class="wrapper">
    <!-- 页面头部部分 -->
    <div class="header">
      <!-- logo -->
      <div class="header-logo">微电网能源管理系统</div>
      <!-- 水平一级菜单 -->
      <div style="float: left" class="header-center">
        <el-menu
          class="header-center-menu"
          mode="horizontal"
          text-color="#000000"
          active-text-color="#3989fa"
          :default-active="toIndex"
          @select="handleSelect"
        >
          <el-menu-item
            class="header-center-menu-item"
            v-for="(item, index) in itemList"
            :index="item.path"
            :key="index"
          >
            <span>{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
      </div>
      <!-- 用户头像和用户名 -->
      <div class="header-right">
        <div class="header-right-user">
          <!-- 用户头像 -->
          <div class="header-right-user-avatar">
            <img src="@/assets/img/default_head.jpg" />
          </div>
          <!-- 用户名下拉菜单 -->
          <el-dropdown class="header-right-user-name" @command="handleCommand">
            <span class="header-right-user-name-link">
              {{ username }}
            </span>
            <template #dropdown>
              <el-dropdown-menu class="header-right-user-name-dropmenu">
                <!-- <el-dropdown-item disabled>修改密码</el-dropdown-item> -->
                <el-dropdown-item class="header-right-user-name-dropmenu-item" command="logout"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>

    <!-- 页面左侧二级菜单栏，和主体内容区域部分 -->
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from 'vue'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { firstMenuList } from '../../config/menuList'

import store from '../../store'

onMounted(() => {
  // 挂载获取菜单列表
  store.commit('setMenuList', firstMenuList)
})
// 计算一级菜单
const itemList = computed(() => {
  return store.state.menuList
})

// 获取响应式用户名
const username = ref(store.state.userInfo.userName)

// 根据路径绑定到对应的一级菜单，防止页面刷新重新跳回第一个
const toIndex = computed(() => {
  console.log('当前路径' + route.path)
  return '/' + route.path.split('/')[1]
})

// 获取路由对象
const router = useRouter()
// 获取当前路由
const route = useRoute()
// 切换菜单栏
function handleSelect(path) {
  router.push({
    path: path
  })
}
// 定义二级菜单
// const secMenuList = computed(() => {
//   // 获取当前路由的路径
//   const path = route.path
//   // 获取第一个/的下标
//   const index = path.indexOf('/', 1)
//   // 截取父级路径
//   const parentPath = path.substring(0, index)
//   const menu = firstMenuList.find((item) => item.path == parentPath)
//   return menu ? menu.children : []
// })

// 用户名下拉菜单选择事件
function handleCommand(command) {
  if (command == 'logout') {
    // 退出登录 修改vuex中的用户信息
    store.commit('removeUserInfo')
    router.push({
      path: '/login'
    })
  }
}
</script>
<style lang="scss" scoped>
@keyframes move {
  to {
    transform: translate(50%, 50%);
  }
}
.wrapper {
  width: 100vw;
  height: 100vh;
  background: #111a1e;
}
.header {
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  background-color: #111a1e;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-logo {
    font-size: 22px;
    color: #3debec;
    margin-left: 50px;
  }

  /* --------------- 水平一级菜单栏的样式--------------------- */
  &-center {
    margin-left: 50px;
    background: transparent;
    &-menu {
      background-color: #111a1e;
      border-bottom: none;
      &-item {
        color: #3debec;
        font-size: 16px;
        margin: 0 15px;
        &.is-active {
          border-bottom: 2px solid #3989fa;
        }
      }
    }
  }
  /* --------------- 用户头像区域的样式 ---------------- */
  &-right {
    padding-right: 50px;
    &-user {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70px;

      &-avatar {
        margin-left: 20px;
        & img {
          display: block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      &-name {
        margin-left: 10px;
        &-link {
          font-size: 16px;
          cursor: pointer;
          color: #3debec;
          border: none;
        }
        &-dropmenu {
          width: 100px;
          &-item {
            font-size: 14px;
            padding: 0 10px;
            &.is-disabled {
              color: #606266;
            }
          }
        }
      }
    }
  }
}
.main {
  width: 100%;
  height: calc(100vh - 70px);
}
</style>