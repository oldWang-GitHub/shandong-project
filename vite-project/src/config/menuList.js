// 水平一级菜单栏的菜单
const firstMenuList = [
  {
    path: '/page1',
    title: '综合监控中心',
    component: 'indexPage1',
    children: [
      {
        path: '/page1/page1-1',
        title: '微电网系统一次总体图',
        component: 'Page1-1'
      },
      {
        path: '/page1/page1-2',
        title: '微网系统各分区子图',
        component: 'Page1-2'
      },
      {
        path: '/page1/page1-3',
        title: '变压器运行监控子图',
        component: 'Page1-3'
      },
      {
        path: '/page1/page1-4',
        title: '只要开关设备运行监控子图',
        component: 'Page1-4'
      },
      {
        path: '/page1/page1-5',
        title: '主要用电设备运行监控子图',
        component: 'Page1-5'
      }
    ]
  },
  {
    path: '/page2',
    title: '分布电源管理',
    component: 'indexPage2',
    children: [
      {
        path: '/page2/page2-1',
        title: '光伏发电模块运行监控',
        component: 'Page2-1'
      },
      {
        path: '/page2/page2-2',
        title: '风电模块运行监控',
        component: 'Page2-2'
      },
      {
        path: '/page2/page2-3',
        title: '柴发机组运行状态监控',
        component: 'Page2-3'
      },
      {
        path: '/page2/page2-4',
        title: '燃气机组运行状态监控',
        component: 'Page2-4'
      },
      {
        path: '/page2/page2-5',
        title: '设备故障/告警信息监控',
        component: 'Page2-5'
      }
    ]
  },
  {
    path: '/page3',
    title: '储能系统管理',
    component: 'indexPage3',
    children: [
      {
        path: '/page3/page3-1',
        title: '储能一次系统状态监控',
        component: 'Page3-1'
      },
      {
        path: '/page3/page3-2',
        title: '储能设备运行状态信息',
        component: 'Page3-2'
      },
      {
        path: '/page3/page3-3',
        title: '电池包储能状态信息',
        component: 'Page3-3'
      },
      {
        path: '/page3/page3-4',
        title: '历史数据及状态评估',
        component: 'Page3-4'
      }
    ]
  },
  {
    path: '/page4',
    title: '智能决策中心',
    component: 'indexPage4',
    children: [
      {
        path: '/page4/page4-1',
        title: '当前发用平衡分析',
        component: 'Page4-1'
      },
      {
        path: '/page4/page4-2',
        title: '短期发用平衡分析',
        component: 'Page4-2'
      },
      {
        path: '/page4/page4-3',
        title: '日光伏发电预测',
        component: 'Page4-3'
      },
      {
        path: '/page4/page4-4',
        title: '日负荷预测',
        component: 'Page4-4'
      },
      {
        path: '/page4/page4-5',
        title: '各级负荷监测',
        component: 'Page4-5'
      }
    ]
  },
  {
    path: '/page5',
    title: '调度管理中心',
    component: 'indexPage5',
    children: [
      {
        path: '/page5/page5-1',
        title: 'PCC点实时交换功率监测',
        component: 'Page5-1'
      },
      {
        path: '/page5/page5-2',
        title: '当日申报计划与实施曲线',
        component: 'Page5-2'
      },
      {
        path: '/page5/page5-3',
        title: '微电网运行状态控制',
        component: 'Page5-3'
      },
      {
        path: '/page5/page5-4',
        title: '负荷管理',
        component: 'Page5-4'
      },
      {
        path: '/page5/page5-5',
        title: '光伏模块控制调度中心',
        component: 'Page5-5'
      },
      {
        path: '/page5/page5-6',
        title: '风电模块控制调度中心',
        component: 'Page5-6'
      },
      {
        path: '/page5/page5-7',
        title: '柴发机组控制调度中心',
        component: 'Page5-7'
      },
      {
        path: '/page5/page5-8',
        title: '燃气机组控制调度中心',
        component: 'Page5-8'
      },
      {
        path: '/page5/page5-9',
        title: '储能模块控制调度中心',
        component: 'Page5-9'
      }
    ]
  },
  {
    path: '/page6',
    title: '系统管理中心',
    component: 'indexPage6',
    children: [
      {
        path: '/page6/page6-1',
        title: '管理1',
        component: 'Page6-1'
      },
      {
        path: '/page6/page6-2',
        title: '管理2',
        component: 'Page6-2'
      },
      {
        path: '/page6/page6-3',
        title: '管理3',
        component: 'Page6-3'
      }
    ]
  }
]

export { firstMenuList }
