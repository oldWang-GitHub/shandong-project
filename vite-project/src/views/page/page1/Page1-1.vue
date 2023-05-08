<template>
  <div class="main">
    <!-- <iframe src="http://221.226.69.234:9002/proview/?r=1667724249631&id=636766feddaf62386d2c4170" frameborder="0" width="50%" height="50%" scrolling="auto"></iframe> -->
    <div id="meta2d"></div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue'
import { Meta2d } from '@meta2d/core'
import api from '../../../api'
// import { parseSvg } from "@meta2d/svg"
import data from '../../../data/综合监控主页面.json'
let timer1 = null
onMounted(() => {
  const meta2d = new Meta2d('meta2d')
  const options = {
    disableScale: true, // 禁止缩放
    disableTranslate: true, // 禁止平移
    disableInput: true // 禁止双击后输入
  }
  meta2d.setOptions(options)
  openMeta2d(data)
  // 设置预览模式，不可编辑
  meta2d.lock(1)
  // 设置自适应显示 true，完整展示整个图纸；false，短边展示图纸，长边会被截取显示不完整
  meta2d.fitView(false)
  // meta2d.canvas.addCaches = deepClone(data.pens)
  // console.log(json);
  // 定时器，每隔1秒更新一次接口数据
  timer1 = setInterval(() => {
    api.getMainData().then((res) => {
      // console.log(res)
      // 将接口数据更新到data.json中
      updateMainData(res)
    })
  }, 1000)
})
//封装更新数据的方法
const updateMainData = (res) => {
  res.forEach((item) => {
    // 从data.json中取出和item.id相同的元素
    const dataItem = data.pens.find((dataItem) => dataItem.id === item.id)
    // 将data.json中的元素的值更新为res中的值
    dataItem.text = item.text
  })
  openMeta2d(data)
  console.log('数据更新了')
}

// 卸载组件时清除定时器
onUnmounted(() => {
  clearInterval(timer1)
})
// 封装打开图纸方法
const openMeta2d = (data) => {
  window.meta2d.open(data)
  // 设置预览模式，不可编辑
  window.meta2d.lock(1)
  // 设置自适应显示 true，完整展示整个图纸；false，短边展示图纸，长边会被截取显示不完整
  window.meta2d.fitView(false)
}
</script>

<style lang="scss" scoped>
.fitView.main {
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