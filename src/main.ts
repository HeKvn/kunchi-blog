import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/common.scss'
import '@/assets/iconfont.css'
import 'highlight.js/scss/default.scss'
import 'highlight.js/styles/vs2015.css'
import axios from 'axios'

const isDev = process.env.NODE_ENV === 'development'

axios.defaults.baseURL = isDev ? '/api' : '/service/blog'

// axios.interceptors.response.use()

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
