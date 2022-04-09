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
import { Component, Vue } from 'vue-property-decorator'
import BlogHeader from '@/views/BlogHeader.vue'
import BlogFooter from '@/views/BlogFooter.vue'

@Component({
  components: {
    BlogHeader,
    BlogFooter
  }
})
export default class App extends Vue {}
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
  }
}
</style>
