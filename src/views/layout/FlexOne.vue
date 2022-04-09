<template>
  <div :class="$style['flex-one']">
    <div class="left-slot">
      <slot name="left"></slot>
    </div>
    <div class="right-slot">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FlexOne extends Vue {}
</script>

<style lang="scss" module>
.flex-one {
  :global {
    min-height: 100vh;
    // min-height: calc(100vh - 224px);
    display: flex;
    // div宽度有值，屏幕宽度可知，margin auto将自动将margin =（屏幕宽度-div宽度）/2
    margin: auto;
    // 层叠样式，媒体查询顺序而行
    @media screen and (min-width: 0) {
      width: auto;
    }
    @media screen and (min-width: 576px) {
      max-width: 640px;
    }
    @media screen and (min-width: 768px) {
      max-width: 767px;
    }
    @media screen and (min-width: 992px) {
      max-width: 970px;
    }
    @media screen and (min-width: 1200px) {
      max-width: 1280px;
    }
    .left-slot {
      width: 100%;
    }
    .right-slot {
      width: 200px;
      // height: 300px;
      // border: 1px solid #ccc;
      border-radius: 4px;
      margin-top: 20px;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
}
</style>
