<template>
  <!-- 左侧二级菜单栏的组件封装 -->
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      background-color="#fff"
      :default-active="toIndex"
      text-color="#000000"
      router
    >
      <el-menu-item
        class="sidebar-el-menu-item"
        v-for="(item, index) in propsDate.itemList"
        :key="index"
        :index="item.path"
      >
        <!-- 需要图标的在 item 对象中加上属性 icon -->
        <!-- <i :class="item.icon"></i> -->
        <svg width="194" height="50">
          <rect class="sidebar-el-menu-item-shape" width="194" height="50" />
        </svg>
        <span class="sidebar-el-menu-item-text">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
   
  <script setup>
import {useRoute} from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const propsDate = defineProps({
  itemList: {
    type: Array
  }
})
// 设置默认选中的菜单项，默认项为第一个
const toIndex = computed(() => {
  // 获取当前路径
  const path = route.path
  
  return path
})
</script>
   
  <style lang="scss" scoped>
  @import '../../assets/variables.scss';
/* 左侧菜单栏定位和位置大小设定 */
.sidebar {
  width: 100%;
  height: 100%;

  &-el-menu {
    background-color: $sidebar-backgroundColor;
    // 去除边框
    border: none;
    width: 100%;
    overflow: hidden;
    /* 左侧二级菜单项的样式 */
    &-item {
      font-size: 14px;
      // padding-left: 35px;
      color: $sidebar-fontcolor-unselected;
      // transition: all 0.1s;
      --el-menu-base-level-padding: 0px;
      --el-menu-level-padding: 0px;
      &:hover{
        background-color: $content-backgroundColor;
        transform: scale(1.05);
        // color: rgba(255, 255, 255, 0.3);
      }
      padding: 1px 2px;
      position: relative;
      &-shape {
        position: absolute;
        left: 0;
        top: 0;
        // 取消填充
        fill: none;
        // 定义一条线
        stroke: $sidebar-fontcolor-unselected;
        // 定义线的宽度
        stroke-width: 6;
        // 设置虚线 长度 间隔
        stroke-dasharray: 120, 440;
        // 虚线偏移量
        stroke-dashoffset: 270;
        // 过渡动画
        transition: 1s ease;
      }
      &-text {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: $sidebar-fontcolor-unselected;
        letter-spacing: 2px;
      }
      /* 左侧二级菜单选中时的样式 */
      &.is-active{
        background-color: $content-backgroundColor;
      }
      &.is-active &-text {
        color: $sidebar-fontcolor-selected;
        // background-color: #021132;
      }
      &.is-active &-shape {
        stroke: $sidebar-fontcolor-selected;
        stroke-width: 3;
        stroke-dasharray: 50 0;
        stroke-dashoffset: 0;
      }
    }
  }
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar > ul {
  height: 100%;
}
.el-menu-item,
.el-submenu__title {
  height: 50px !important;
  line-height: 50px !important;
}
</style>
  