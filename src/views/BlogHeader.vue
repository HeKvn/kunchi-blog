<template>
  <div :class="$style.header">
    <div class="blog-header">
      <div class="blog-name">
        <a href="https://hekvn.top">
          <img src="../assets/kunchi.png">
        </a>
      </div>
      <div class="blog-menu">
        <ul>
          <li
           :class="{'active-menu': currentRoute === menu.route}"
           v-for="(menu, index) in menuList"
           :key="index"
           @click="changeMenu(menu.route)">{{menu.name}}
          </li>
        </ul>
        <i class="iconfont icon-caidan" @click="showRightSide = true"></i>
      </div>
    </div>
    <right-side :isOpen="showRightSide" @close="showRightSide = false" :isAdaptability="true">
      <div class="rs-avator">
        <img src="https://image.hekvn.top/avatar.jpg" alt="头像">
      </div>
      <div class="rs-menu">
        <ul>
          <li
          :class="{ 'rs-active-menu': currentRoute === menu.route }"
           v-for="(menu, index) in menuList"
           :key="index"
           @click="changeMenu(menu.route)">
            <span>{{menu.name}}</span>
          </li>
        </ul>
      </div>
    </right-side>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import RightSide from '@/components/RightSide.vue'
import { HeaderMenu } from './types/BlogHeader'
import { isString } from '@/utils/typeTool'

@Component({
  components: {
    RightSide
  }
})
export default class BlogHeader extends Vue {
  menuList: HeaderMenu[] = [
    { name: '博客首页', route: 'BlogIndex' },
    { name: '归档', route: 'Record' },
    { name: '分类', route: 'Category' },
    { name: '关于', route: 'About' },
    { name: '扉页', route: 'Flyleaf' }
  ]

  currentRoute = ''
  showRightSide = false

  @Watch('$route.name')
  watchRoute (nv: string): void {
    this.currentRoute = nv
  }

  mounted (): void {
    if (isString(this.$route.name)) this.currentRoute = this.$route.name
    else {
      this.currentRoute = 'BlogIndex'
      this.$router.push({ name: 'BlogIndex' })
    }
  }

  changeMenu (route: string): void {
    if (!route) return
    if (route === '' || route === this.currentRoute) return
    this.$router.push({ name: route })
    this.showRightSide = false
  }
}
</script>

<style lang="scss" module>
.header {
  :global {
    .blog-header {
      width: 100%;
      height: 60px;
      // border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: 0 1px 8px 0 rgb(120 120 120 / 20%);
      // box-shadow: 0 1px 8px 0 #a2d9ff;
      z-index: 99;
      .blog-name {
        line-height: 60px;
        img {
          width: 90px;
          height: 60px;
        }
      }
      .blog-menu {
        line-height: 60px;
        ul li {
          display: inline-block;
          padding: 0 20px;
          user-select: none;
          cursor: pointer;
          transition: all .5s;
          position: relative;
          &:hover {
            color: #0099ff; // 潮蓝
          }
          &::after {
            content: '';
            width: 0;
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 0;
            // background-image: linear-gradient(90deg, #c6e6e8, #93d5dc, #1ba784);
            background-image: linear-gradient(90deg, #1a94bc, #93d5dc, #1ba784);
            transition: width .5s;
          }
          &:hover::after {
            width: 100%;
          }
          @media screen and (max-width: 768px) {
            display: none;
          }
        }
        .active-menu {
          color: #0099ff;
          &::after {
            width: 100%;
          }
        }
        .icon-caidan {
          font-size: 24px;
          color: #409EFF;
          display: none;
          cursor: pointer;
          @media only screen and (max-width: 768px) {
            display: inline-block;
          }
        }
      }
    }
    .rs-avator {
      width: 100%;
      text-align: center;
      img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
      }
    }
    .rs-menu {
      user-select: none;
      margin-top: 10px;
      // border-top: 1px solid #ccc;
      ul li {
        height: 30px;
        line-height: 30px;
        text-align: center;
        // border-bottom: 1px solid #ccc;
        position: relative;
        span {
          cursor: pointer;
        }
        &:before {
          transition: 0.5s all ease;
          position: absolute;
          top: 0;
          left: 50%;
          right: 50%;
          bottom: 0;
          opacity: 0;
          content: '';
          background-color: #0099ff;
          z-index: -1;
        }
        &:hover, &:focus {
          color: #fff;
        }
        &:hover:before, &:focus:before {
          transition: 0.5s all ease;
          left: 0;
          right: 0;
          opacity: 1;
        }
        &:active {
          transform: scale(0.9);
        }
      }
      .rs-active-menu {
        background-color: #0099ff;
        color: #fff;
      }
    }
  }
}
</style>
