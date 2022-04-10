import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'BlogIndex',
    component: () => import('@/views/BlogIndex.vue')
  },
  {
    path: '/detail/:id',
    name: 'ArticleDeatil',
    component: () => import('@/views/ArticleDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
