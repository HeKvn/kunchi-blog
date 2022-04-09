<template>
  <div :class="$style.card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Card extends Vue {}
</script>

<style lang="scss" module>
.card {
  :global {
    min-height: 60px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    margin: 20px;
    background-color: #fff;
    transition: all .3s;
    box-shadow: 0 4px 4px hsl(0deg 0% 91% / 25%);
  }
}
</style>
