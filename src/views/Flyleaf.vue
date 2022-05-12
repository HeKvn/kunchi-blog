<template>
  <div :class="$style.flyleaf">
    <skeleton></skeleton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Skeleton from '@/components/Skeleton.vue'

@Component({
  components: {
    Skeleton
  }
})
export default class Flyleaf extends Vue {}
</script>

<style lang="scss" module>
.flyleaf {
  // height: calc(100vh - 224px);
  // @media screen and (max-width: 576px) {
  //   height: calc(100vh - 240px);
  // }
}
</style>
