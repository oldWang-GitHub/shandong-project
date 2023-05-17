<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
// 引入核心库
import * as echarts from 'echarts/core'
import { LineChart, BarChart,GaugeChart } from 'echarts/charts'
import { register as registerEcharts } from '@meta2d/chart-diagram'
// 导入折线图图表
import {
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 导入渲染器
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  LegendComponent,
  CanvasRenderer,
  LabelLayout,
  UniversalTransition,
  LineChart,
  BarChart,
  GaugeChart
])
onMounted(() => {
  // 注册echarts，这样才可以在meta2d中使用echarts
  registerEcharts(echarts)
})
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
