<template>
  <div class="main">
    <div id="meta2d"></div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
// 引入封装的meta2d方法
import { initMeta2d } from '../../../utils/useMeta2d'
import data from '../../../data/风电模块监控.json'
// 注册必须的组件

onMounted(() => {
  initMeta2d(data)
  // initEchart('echart1', options1)
  // initEchart('echart2', options2)
  // initEchart('echart3', options3)
  /* const options = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}; */

  // myChart.setOption(options)
})
/* // 封装绘制图表的方法
const initEchart = (id, options) => {
  const myChart = echarts.init(document.getElementById(id), 'dark')
  // 设置图表的背景颜色
  options['backgroundColor'] = '#051d3f'
  myChart.setOption(options)
}
const options1 = {
  legend: {
    data: ['预测曲线', '计划曲线', '实际曲线']
  },
  tooltip: {
	trigger: 'axis'
  },
  series: [
    {
      color: 'green',
      data: [
        100, 110, 111, 112, 113, 120, 122, 122, 125, 126, 128, 130, 150, 200, 260, 330, 440, 580,
        720, 740, 750, 751, 753, 752, 754, 753, 755, 756, 757, 755, 720, 670, 540, 410, 270, 200,
        170, 150, 130, 125, 120, 119, 115, 112, 110, 109, 107, 106
      ],
      name: '预测曲线',
      smooth: 'true',
      type: 'line'
    },
    {
      color: 'red',
      data: [
        110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 625, 625, 625, 625,
        625, 625, 625, 625, 625, 625, 625, 625, 625, 625, 625, 625, 625, 625, 625, 625, 120, 120,
        120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120
      ],
      name: '计划曲线',
      smooth: 'true',
      type: 'line'
    },
    {
      color: 'blue',
      data: [
        196, 194, 170, 182, 158, 192, 174, 104, 104, 100, 100, 100, 120, 152, 228, 294, 378, 618,
        748, 856, 868, 912, 884, 858, 846, 764, 740, 800, 776, 752, 752, 748, 758
      ],
      name: '实际曲线',
      smooth: 'true',
      type: 'line'
    }
  ],
  xAxis: {
    data: [
      '00:00',
      '00:30',
      '01:00',
      '01:30',
      '02:00',
      '02:30',
      '03:00',
      '03:30',
      '04:00',
      '04:30',
      '05:00',
      '05:30',
      '06:00',
      '06:30',
      '07:00',
      '07:30',
      '08:00',
      '08:30',
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
      '18:00',
      '18:30',
      '19:00',
      '19:30',
      '20:00',
      '20:30',
      '21:00',
      '21:30',
      '22:00',
      '22:30',
      '23:00',
      '23:30'
    ],
    type: 'category'
  },
  yAxis: {
    type: 'value'
  }
}
const options2 = {
  legend: {
    data: ['1#机组发电量', '2#机组发电量']
  },
  tooltip: {
	trigger: 'axis'
  },
  series: [
    {
      color: 'green',
      data: [
        110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 500, 500, 500, 500, 500, 500, 500, 500,
        500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 110,
        110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110
      ],
      name: '1#机组发电量',
      smooth: 'true',
      type: 'line'
    },
    {
      color: 'red',
      data: [
        110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 625, 625, 625, 625,
        625, 625, 625, 625, 625, 625, 625, 625, 625, 625, 625, 625, 625, 625, 625, 625, 120, 120,
        120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120
      ],
      name: '2#机组发电量',
      smooth: 'true',
      type: 'line'
    }
  ],
  xAxis: {
    data: [
      '00:00',
      '00:30',
      '01:00',
      '01:30',
      '02:00',
      '02:30',
      '03:00',
      '03:30',
      '04:00',
      '04:30',
      '05:00',
      '05:30',
      '06:00',
      '06:30',
      '07:00',
      '07:30',
      '08:00',
      '08:30',
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
      '18:00',
      '18:30',
      '19:00',
      '19:30',
      '20:00',
      '20:30',
      '21:00',
      '21:30',
      '22:00',
      '22:30',
      '23:00',
      '23:30'
    ],
    type: 'category'
  },
  yAxis: {
    type: 'value'
  }
}
const options3 ={
					"grid":{
						"left":"3%",
						"right":"4%",
						"bottom":"3%",
						"containLabel":true
					},
					"title": {
						"text": "月累计发电量"
					},
					"tooltip": {
						"axisPointer": {
							"type": "shadow"
						},
						"trigger": "axis"
					},
					"xAxis": {
						"axisTick": {
							"alignWithLabel": true
						},
						"data": [
							"2022-01",
							"2022-02",
							"2022-03",
							"2022-04",
							"2022-05",
							"2022-06",
							"2022-07",
							"2022-08",
							"2022-09",
							"2022-10",
							"2022-11",
							"2022-12"
						],
						"type": "category"
					},
					"yAxis": [
						{
							"type": "value"
						}
					],
					"series": [
						{
							"barWidth": "60%",
							"data": [
								0,
								500000,
								510000,
								280000,
								200000
							],
							"name": "月度能耗",
							"type": "bar"
						}
					],
				} */
</script>
  
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #021132;
  display: flex;
}
#meta2d {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
/* #echart1,
#echart2,
#echart3 {
  width: 400px;
  height: 400px;
  background-color: #fff;
  margin:0 4px;
} */
</style>