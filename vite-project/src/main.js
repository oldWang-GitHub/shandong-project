import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/base.css'
import './assets/normalize.css'
// import './assets/main.css'
// 创建app实例
const app = createApp(App)
// 挂载stores
app.use(store)
// 挂载路由
app.use(router)
// 挂载app
app.mount('#app')
