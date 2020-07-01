import Vue from 'vue'
import VueRouter from 'vue-router'

const shouye = () => import('views/shouye/shouye') //路由懒加载
const fenlei = () => import('views/home/fenlei')
const cat = () => import('views/car/cat')
const profile = () => import('views/profile/profile')
const detail = () => import('views/detail/detaile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'shouye'
  },
  {
    path: '/shouye',
    component: shouye
  },
  {
    path: '/fenlei',
    component: fenlei
  },
  {
    path: '/cat',
    component: cat
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail/:iid', //传参  还有一种传参方式
    component: detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
