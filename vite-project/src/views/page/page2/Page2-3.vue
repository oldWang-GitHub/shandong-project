<template>
    <div class="main">
      <!-- <iframe src="http://221.226.69.234:9002/proview/?r=1667724249631&id=636766feddaf62386d2c4170" frameborder="0" width="50%" height="50%" scrolling="auto"></iframe> -->
      <div id="meta2d"></div>
    </div>
  </template>
  <script setup>
  import { onMounted } from 'vue'
  import { Meta2d} from '@meta2d/core'
  // import { parseSvg } from "@meta2d/svg"
  import data from '../../../data/柴发机组监控.json'
  onMounted(()=>{
      const meta2d = new Meta2d('meta2d')
      const options = {
          disableScale: true,// 禁止缩放
          disableTranslate: true, // 禁止平移
          disableInput:true, // 禁止双击后输入
      }
      meta2d.setOptions(options)
      meta2d.open(data)
      // 设置预览模式，不可编辑
      meta2d.lock(1)
      meta2d.fitView(false)
      // meta2d.canvas.addCaches = deepClone(data.pens)
      // console.log(json);
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