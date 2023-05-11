<template>
  <div class="main">
    <!-- <iframe src="http://221.226.69.234:9002/proview/?r=1667724249631&id=636766feddaf62386d2c4170" frameborder="0" width="50%" height="50%" scrolling="auto"></iframe> -->
    <div id="meta2d"></div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue'
import data from '../../../data/微电网系统总体图.json'
// 引入封装的meta2d方法
import {initMeta2d, getMeta2dData} from '../../../utils/useMeta2d'
let timer = null
onMounted(() => {
  // 初始化meta2d
  initMeta2d(data)
  getMeta2dData('/data/main')
  // 定时器，每隔1秒更新一次接口数据
  timer = setInterval(() => {
    getMeta2dData('/data/main')
  }, 1000)
  // 
})

// 卸载组件时清除定时器
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #0f0;
}
#meta2d {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>