<template>
  <div :class="$style.about">关于</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class About extends Vue {}
</script>

<style lang="scss" module>
.about {
  height: calc(100vh - 224px);
  @media screen and (max-width: 576px) {
    height: calc(100vh - 240px);
  }
}
</style>
