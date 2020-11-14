import Vue from 'vue'
import VueRouter from 'vue-router'
//引入消息模块
import messAge from '../views/Messages.vue'
//引入登录模块
import login from '../views/Login.vue'
//引入主页面
import Home from '../views/Home.vue'
// 详情页
import Details from '../views/Details.vue'
//测试页面
import t from '../views/test.vue'
Vue.use(VueRouter)
const routes = [
  {
    path:'/details',
    component:Details
  },
  {
    path:'/t',
    component:t
  },
  {
    path:'/',
    component:Home
  },
  {
    path:'/message',
    component:messAge
  },
  {
    path:'/login',
    component:login
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
