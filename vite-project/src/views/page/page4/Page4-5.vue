<template>
    <div class="main">
      <!-- <iframe src="http://221.226.69.234:9002/proview/?r=1667724249631&id=636766feddaf62386d2c4170" frameborder="0" width="50%" height="50%" scrolling="auto"></iframe> -->
      <div id="meta2d"></div>
    </div>
</template>
<script setup>
  import { onMounted, onUnmounted } from 'vue'
  
  // 引入封装的meta2d方法
  import {initMeta2d, clearMeta2d} from '../../../utils/useMeta2d'
  import data from '../../../data/各级负荷监测.json'
  onMounted(() => {
    initMeta2d(data)
  })
  onUnmounted(() => {
    clearMeta2d()
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