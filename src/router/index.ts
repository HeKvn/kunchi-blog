import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

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
    component: () => import('@/views/ArticleDetail.vue'),
    meta: { title: ' 鲲池 - 文章 ' }
  },
  {
    path: '/record',
    name: 'Record',
    component: () => import('@/views/Record.vue'),
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
  }
]

const router = new VueRouter({
  routes
})

export default router
