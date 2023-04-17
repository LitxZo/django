import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '门户网站首页'
    }
  },
  {
    path: '/bvillage',
    name: 'Bvillage',
    component: () => import('../views/BVillage'),
    meta: {
      title: '村级门户网站首页'
    }
  },
  {
    path: '/jvillage',
    name: 'Jvillage',
    component: () => import('../views/JVillage'),
    meta: {
      title: '村级门户网站首页'
    }
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
