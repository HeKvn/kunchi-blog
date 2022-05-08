import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ArticleDeatil from '@/views/ArticleDetail.vue'
import Record from '@/views/Record.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'BlogIndex',
    component: () => import('@/views/BlogIndex.vue'),
    meta: { title: '鲲池 - 博客' }
  },
  {
    path: '/detail/:id',
    name: 'ArticleDeatil',
    component: ArticleDeatil,
    meta: { title: ' 鲲池 - 文章 ' }
  },
  {
    path: '/record',
    name: 'Record',
    component: Record,
    meta: { title: '鲲池 - 归档' }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/Category.vue'),
    meta: { title: '鲲池 - 分类' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: { title: '鲲池 - 关于' }
  },
  {
    path: '/flyleaf',
    name: 'Flyleaf',
    component: () => import('@/views/Flyleaf.vue'),
    meta: { title: '鲲池 - 扉页' }
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/ArticleForTag.vue'),
    meta: { title: '鲲池 - 文章分类' }
  }
]

const router = new VueRouter({
  routes
})

export default router
