import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'BlogIndex',
    component: () => import('@/views/BlogIndex.vue'),
    meta: { name: '鲲池 - 博客' }
  },
  {
    path: '/detail/:id',
    name: 'ArticleDeatil',
    component: () => import('@/views/ArticleDetail.vue'),
    meta: { name: ' 鲲池 - 文章 ' }
  },
  {
    path: '/record',
    name: 'Record',
    component: () => import('@/views/Record.vue'),
    meta: { name: '鲲池 - 归档' }
  }
]

const router = new VueRouter({
  routes
})

export default router
