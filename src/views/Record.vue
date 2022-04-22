<template>
  <div :class="$style.record">
    归档页
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Record extends Vue {}
</script>

<style lang="scss" module>
.record {
  :global {
    height: 100vh;
  }
}
</style>
