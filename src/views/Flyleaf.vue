<template>
  <div :class="$style.flyleaf">扉页</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Flyleaf extends Vue {}
</script>

<style lang="scss" module>
.flyleaf {
  height: calc(100vh - 224px);
  @media screen and (max-width: 576px) {
    height: calc(100vh - 240px);
  }
}
</style>
