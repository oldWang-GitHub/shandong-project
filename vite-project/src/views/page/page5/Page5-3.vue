<template>
    <div class="main">
      <div id="meta2d"></div>
      <el-tooltip class="item" effect="dark"  placement="left">
      <template #content>主要依据《日发用电计划》执行。通常主要是根据PCC点控制要求，<br/>调节内部电源出力和负荷分配。iEMS下发控制指令，各个边缘控制<br/>器执行控制要求，并将执行结果上报iEMS</template>
        <el-icon class="main-info" >
        <InfoFilled />
      </el-icon>
    </el-tooltip>


    </div>
  </template>
    <script setup>
  import { onMounted } from 'vue'
  import { InfoFilled } from '@element-plus/icons-vue'
  // 引入封装的meta2d方法
  import {initMeta2d} from '../../../utils/useMeta2d'
  import data from '../../../data/微电网运行控制.json'
  onMounted(() => {
    initMeta2d(data)
  })
  </script>
    <style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100%;
    background-color: #0f0;
    position: relative;
    &-info {
      position: absolute;
      width: 40px;
      height: 40px;
      right: 20px;
      top: 20px;
      font-size: 30px;
      color: #fff;
    }
  }
  #meta2d {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  
  </style>