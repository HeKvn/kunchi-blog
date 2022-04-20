<template>
  <div :class="$style.header">
    <div class="blog-header">
      <div class="blog-name">
        <a href="http://hekvn.top">
          <img src="../assets/kunchi.png">
        </a>
      </div>
      <div class="blog-menu">
        <ul>
          <li
            :class="{'activeMenu': currentMenu === index}"
            v-for="(menu, index) in menuList"
            :key="index"
            @click="currentMenu = index">{{menu}}
          </li>
        </ul>
        <i class="iconfont icon-caidan" @click="showRightSide = true"></i>
      </div>
    </div>
    <right-side :isOpen="showRightSide" @close="showRightSide = false" :isAdaptability="true"></right-side>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RightSide from '@/components/RightSide.vue'

@Component({
  components: {
    RightSide
  }
})
export default class BlogHeader extends Vue {
  menuList: string[] = ['博客首页', '归档', '分类', '关于', '扉页']
  currentMenu = 0
  showRightSide = false
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
        .activeMenu {
          color: #0099ff;
          &::after {
            width: 100%;
          }
        }
        .icon-caidan {
          font-size: 24px;
          color: #409EFF;
          display: none;
          @media only screen and (max-width: 768px) {
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
