<template>
  <div :class="$style.skeleton">
    <flex-one>
      <template v-slot:left>
        <div class="list-skeleton">
          <div class="box" v-for="item in lists" :key="item"></div>
        </div>
      </template>
      <template v-slot:right>
        <div class="author-info"></div>
      </template>
    </flex-one>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FlexOne from '@/views/layout/FlexOne.vue'

@Component({
  components: {
    FlexOne
  }
})
export default class Skeleton extends Vue {
  lists: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
</script>

<style lang="scss" module>
.skeleton {
  :global {
    .list-skeleton {
      .box {
        height: 223px;
        margin: 20px;
        border-radius: 3px;
        background: linear-gradient(100deg,
         rgba(255, 255, 255, 0) 30%,
         rgba(255, 255, 255, 0.5) 40%,
         rgba(255, 255, 255, 0) 50%
        ) #ccc;
        // background-size: 200% 100%;
        background-position-x: 120%;
        animation: loading 2s ease-in-out infinite;
      }
    }
  }
}
@keyframes loading {
  // from {
  //   background-position: 0px 0px;
  // }
  to {
    background-position-x: -20%;
  }
}
</style>
