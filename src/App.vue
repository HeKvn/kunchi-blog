<template>
  <div id="app" class="app">
    <blog-header class="blog-header"></blog-header>
    <div class="blog-container">
      <router-view></router-view>
    </div>
    <blog-footer></blog-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import BlogHeader from '@/views/BlogHeader.vue'
import BlogFooter from '@/views/BlogFooter.vue'
import { Route } from 'vue-router'
import { isString } from '@/utils/typeTool'

@Component({
  components: {
    BlogHeader,
    BlogFooter
  }
})
export default class App extends Vue {
  @Watch('$route')
  watchRoute (nr: Route): void {
    if (isString(nr.name) && nr.meta) document.title = nr.meta.title
    else document.title = '鲲池'
  }
}
</script>

<style lang="scss">
.app {
  width: 100%;
  .blog-header {
    position: fixed;
    top: 0;
    left: 0;
  }
  .blog-container {
    padding: 80px 0 0;
    // background-color: #a2d9ff;
    background: url('./assets/blog_bg.jpg');
  }
}
</style>
