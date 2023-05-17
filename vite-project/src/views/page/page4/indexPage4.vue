<template>
    <div class="main">
        <div class="main-sideMenu">
        <!-- 左侧二级菜单栏 -->
        <SideMenu :itemList="secMenuList" />
      </div>
      <!-- 主体内容区域 -->
      <div class="main-content">
        <router-view />
      </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import {  useRoute } from 'vue-router'
import { firstMenuList } from '../../../config/menuList'
import SideMenu from '../../../components/SideMenu.vue'
// 定义路由
// const router = useRouter()
// 定义当前路由
const route = useRoute()
const secMenuList = computed(()=>{
  // 获取当前路由的路径
  const path = route.path
  // 从当前路径中截取父级路径
  const parentPath = "/"+path.split("/")[1]
  // 筛选当前路径的子菜单
  const menu = firstMenuList.find((item) => item.path == parentPath)
  return menu ? menu.children : []
})
</script>
<style lang="scss" scoped>
@import '../../../assets/variables.scss';
.main{
    width: 100%;
    height: 100%;
    display: flex;
  &-sideMenu {
    width: 240px;
    height: 100%;
  }
  &-content {
    width: calc(100vw - 240px);
    height: 100%;
    background: $content-backgroundColor;
    padding: 10px 10px 15px 20px;
    overflow: auto;
  }
}
</style>