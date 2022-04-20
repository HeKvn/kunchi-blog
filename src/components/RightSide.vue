<template>
  <div :class="$style['right-side']">
    <div class="hover" v-if="isOpen" @click="clickHover"></div>
    <transition name="side-transition">
      <div :class="['side-container', { 'adaptability': isAdaptability }]" v-if="isOpen" :style="{ width: sideWidth }">
        <div class="head" @click="$emit('close', false)">
          <i class="iconfont icon-guanbi close-font"></i>
        </div>
        <div class="body">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class RightSide extends Vue {
  @Prop({ type: Boolean, required: true, default: false }) readonly isOpen!: boolean
  @Prop({ type: String, required: false }) readonly sideWidth?: string
  @Prop({ type: Boolean, required: false }) readonly isAdaptability?: boolean

  clickHover (): void {
    this.$emit('close', false)
  }
}
</script>

<style lang="scss" module>
.right-side {
  :global {
    .hover {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      background-color: rgb(0, 0, 0, .3);
      z-index: 1998;
    }
    .side-container {
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      width: 200px;
      background-color: #fff;
      z-index: 1999;
      .head {
        height: 35px;
        line-height: 35px;
        .close-font {
          cursor: pointer;
          font-size: 24px;
          float: right;
          margin-right: 10px;
        }
      }
      .body {
        height: calc(100% - 35px);
      }
    }
    .side-transition-enter-active, .side-transition-leave-active {
      transition: all ease .17s;
      transform: translate3d(0, 0, 0);
    }
    .side-transition-enter, .side-transition-leave-to {
      transform: translate3d(100%, 0, 0);
    }
    .adaptability {
      @media screen and (min-width: 0) {
        width: 200px;
      }
      @media screen and (min-width: 576px) {
        width: 300px;
      }
      @media screen and (min-width: 767px) {
        width: 400px;
      }
    }
  }
}
</style>
