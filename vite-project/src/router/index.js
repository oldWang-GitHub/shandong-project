import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import storage from "../utils/storage";
// import { firstMenuList } from '../config/menuList'
// import store from '../store'

//定义菜单列表
// let menuList = []
// 路由数组
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/page1',  // 重定向到首页
    meta: {
      title: '首页'
    },
    component: Home,
    children: [
      {
        path: '/page1',
        name: 'page1',
        meta: {
          title: '综合监控中心'
        },
        component: () => import('../views/page/page1/index.vue'),
        redirect: '/page1/page1-1/',  // 重定向到第一个子页面
        children: [
          {
            path: '/page1/page1-1',
            name: 'page1-1',
            meta: {
              title: '页面1-1'
            },
            component: () => import('../views/page/page1/Page1-1.vue')
          },
          // {
          //   path: '/page1/page1-2',
          //   name: 'page1-2',
          //   meta: {
          //     title: '页面1-2'
          //   },
          //   component: () => import('../views/page/page1/Page1-2.vue')
          // },
          // {
          //   path: '/page1/page1-3',
          //   name: 'page1-3',
          //   meta: {
          //     title: '页面1-3'
          //   },
          //   component: () => import('../views/page/page1/Page1-3.vue')
          // },
          // {
          //   path: '/page1/page1-4',
          //   name: 'page1-4',
          //   meta: {
          //     title: '页面1-4'
          //   },
          //   component: () => import('../views/page/page1/Page1-4.vue')
          // },
          // {
          //   path: '/page1/page1-5',
          //   name: 'page1-5',
          //   meta: {
          //     title: '页面1-5'
          //   },
          //   component: () => import('../views/page/page1/Page1-5.vue')
          // },

        ]
  },
  {
    path: '/page2',
    name: 'page2',
    meta: {
      title: '分布电源管理'
    },
    component: () => import('../views/page/page2/index.vue'),
    redirect: '/page2/page2-1',  // 重定向到第一个子页面
    children: [
      {
        path: '/page2/page2-1',
        name: 'page2-1',
        meta: {
          title: '光伏发电模块一次系统图'
        },
        component: () => import('../views/page/page2/Page2-1.vue')
      },
      {
        path: '/page2/page2-2',
        name: 'page2-2',
        meta: {
          title: '风电模块监控'
        },
        component: () => import('../views/page/page2/Page2-2.vue')
      },
      {
        path: '/page2/page2-3',
        name: 'page2-3',
        meta: {
          title: '柴发机组监控'
        },
        component: () => import('../views/page/page2/Page2-3.vue')
      },
      {
        path: '/page2/page2-4',
        name: 'page2-4',
        meta: {
          title: '燃气机组监控'
        },
        component: () => import('../views/page/page2/Page2-4.vue')
      },
      // {
      //   path: '/page2/page2-5',
      //   name: 'page2-5',
      //   meta: {
      //     title: '页面2-5'
      //   },
      //   component: () => import('../views/page/page2/Page2-5.vue')
      // },

    ]
},
// {
//   path: '/page3',
//   name: 'page3',
//   meta: {
//     title: '储能系统管理'
//   },
//   component: () => import('../views/page/page3/index.vue'),
//   redirect: '/page3/page3-1',  // 重定向到第一个子页面
//   children: [
//     {
//       path: '/page3/page3-1',
//       name: 'page3-1',
//       meta: {
//         title: '页面3-1'
//       },
//       component: () => import('../views/page/page3/Page3-1.vue')
//     },
//     {
//       path: '/page3/page3-2',
//       name: 'page3-2',
//       meta: {
//         title: '页面3-2'
//       },
//       component: () => import('../views/page/page3/Page3-2.vue')
//     },
//     {
//       path: '/page3/page3-3',
//       name: 'page3-3',
//       meta: {
//         title: '页面3-3'
//       },
//       component: () => import('../views/page/page3/Page3-3.vue')
//     },
//     {
//       path: '/page3/page3-4',
//       name: 'page3-4',
//       meta: {
//         title: '页面3-4'
//       },
//       component: () => import('../views/page/page3/Page3-4.vue')
//     },
//     {
//       path: '/page3/page3-5',
//       name: 'page3-5',
//       meta: {
//         title: '页面3-5'
//       },
//       component: () => import('../views/page/page3/Page3-5.vue')
//     },

//   ]
// },
// {
//   path: '/page4',
//   name: 'page4',
//   meta: {
//     title: '智能决策中心'
//   },
//   component: () => import('../views/page/page4/index.vue'),
//   redirect: '/page4/page4-1',  // 重定向到第一个子页面
//   children: [
//     {
//       path: '/page4/page4-1',
//       name: 'page4-1',
//       meta: {
//         title: '页面4-1'
//       },
//       component: () => import('../views/page/page4/Page4-1.vue')
//     },
//     {
//       path: '/page4/page4-2',
//       name: 'page4-2',
//       meta: {
//         title: '页面4-2'
//       },
//       component: () => import('../views/page/page4/Page4-2.vue')
//     },
//     {
//       path: '/page4/page4-3',
//       name: 'page4-3',
//       meta: {
//         title: '页面4-3'
//       },
//       component: () => import('../views/page/page4/Page4-3.vue')
//     },
//     {
//       path: '/page4/page4-4',
//       name: 'page4-4',
//       meta: {
//         title: '页面4-4'
//       },
//       component: () => import('../views/page/page4/Page4-4.vue')
//     },
//     {
//       path: '/page4/page4-5',
//       name: 'page4-5',
//       meta: {
//         title: '页面4-5'
//       },
//       component: () => import('../views/page/page4/Page4-5.vue')
//     },

//   ]
// },
// {
//   path: '/page5',
//   name: 'page5',
//   meta: {
//     title: '调度管理中心'
//   },
//   component: () => import('../views/page/page5/index.vue'),
//   redirect: '/page5/page5-1',  // 重定向到第一个子页面
//   children: [
//     {
//       path: '/page5/page5-1',
//       name: 'page5-1',
//       meta: {
//         title: '页面5-1'
//       },
//       component: () => import('../views/page/page5/Page5-1.vue')
//     },
//     {
//       path: '/page5/page5-2',
//       name: 'page5-2',
//       meta: {
//         title: '页面5-2'
//       },
//       component: () => import('../views/page/page5/Page5-2.vue')
//     },
//     {
//       path: '/page5/page5-3',
//       name: 'page5-3',
//       meta: {
//         title: '页面5-3'
//       },
//       component: () => import('../views/page/page5/Page5-3.vue')
//     },
//     {
//       path: '/page5/page5-4',
//       name: 'page5-4',
//       meta: {
//         title: '页面5-4'
//       },
//       component: () => import('../views/page/page5/Page5-4.vue')
//     },
//     {
//       path: '/page5/page5-5',
//       name: 'page5-5',
//       meta: {
//         title: '页面5-5'
//       },
//       component: () => import('../views/page/page5/Page5-5.vue')
//     },

//   ]
// },
// {
//   path: '/page6',
//   name: 'page6',
//   meta: {
//     title: '系统管理中心'
//   },
//   component: () => import('../views/page/page6/index.vue'),
//   redirect: '/page6/page6-1',  // 重定向到第一个子页面
//   children: [
//     {
//       path: '/page6/page6-1',
//       name: 'page6-1',
//       meta: {
//         title: '页面6-1'
//       },
//       component: () => import('../views/page/page6/Page6-1.vue')
//     },
//     {
//       path: '/page6/page6-2',
//       name: 'page6-2',
//       meta: {
//         title: '页面6-2'
//       },
//       component: () => import('../views/page/page6/Page6-2.vue')
//     },
//     {
//       path: '/page6/page6-3',
//       name: 'page6-3',
//       meta: {
//         title: '页面6-3'
//       },
//       component: () => import('../views/page/page6/Page6-3.vue')
//     },
//     {
//       path: '/page6/page6-4',
//       name: 'page6-4',
//       meta: {
//         title: '页面6-4'
//       },
//       component: () => import('../views/page/page6/Page6-4.vue')
//     },
//     {
//       path: '/page6/page6-5',
//       name: 'page6-5',
//       meta: {
//         title: '页面6-5'
//       },
//       component: () => import('../views/page/page6/Page6-5.vue')
//     },

//   ]
// },
]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue'),
    meta: {
      title: '登录页'
    }
  },
]
// 创建路由
const router = createRouter({
  // 路由模式 hash模式
  history: createWebHashHistory(),
  routes
})
//路由守卫
router.beforeEach((to, from, next) => {
  // 获取token
  const userInfo = storage.getItem('userInfo')
  // 如果userInfo不存在, 说明没有登录
  if (!userInfo) {
    // 如果是登录页,直接跳转
    if (to.path === '/login') {
      next()
    } else {
      // 如果不是登录页,跳转到登录页
      next({name:'login'})
    }
  }else{ // menuList中的数据是否存在，不应该在此判断，之后要将其移除
    // 如果存在,进行跳转
    // 进行动态路由添加
    /* if (menuList.length) {
      // 添加动态路由
      addDynamicRoutes(menuList).forEach(item => {
        router.addRoute('home',item)
      })
      console.log("to.path",to.query.redirect);
      console.log("from.path",from.path);
      // 跳转到目标路由
      next()
    }else{
      // 获取菜单列表
      menuList = getMenuList()
      // 添加动态路由
      let route = addDynamicRoutes(menuList)
      // 添加到路由中
      route.forEach(item => {
        router.addRoute('home',item)
      })
      // 跳转到目标路由
      next()
    } */
    next()
  }
})
/* // 封装获取菜单列表
function getMenuList() {
  // 获取菜单列表
  store.commit('setMenuList', firstMenuList)
  // 获取菜单列表
  const menuList = JSON.parse(localStorage.getItem('menuList'))
  return menuList
} */

/* // 封装菜单列表转换为路由
function addDynamicRoutes(list) {
  // let newList
  // 遍历list
  let newList = list.map(item => {
    // 定义路由
    let route = {
      path: item.path,
      name: item.component.toLowerCase(),
      component: () => import(`../views/page/${item.path.split('/')[1]}/${item.component}.vue`),
      meta: {
        title: item.title
      }
    }
    // 如果有子菜单,递归调用
    if (item.children && item.children.length > 0) {
      // 递归调用
      route.children = addDynamicRoutes(item.children)
    }
    return route
  })
  return newList
} */



// 导出路由
export default router
