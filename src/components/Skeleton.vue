<template>
  <div class="skeleton">
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

<style lang="scss" scoped>
.skeleton {
  .list-skeleton {
    .box {
      background: #c8c8c8;
      animation: loading 2s ease infinite;
      height: 223px;
      margin: 20px;
      border-radius: 3px;
    }
  }
}
@keyframes loading {
  0% {
        background-size: 300% 100%;
        background-image: linear-gradient(100deg, #c8c8c8 40%, #fff 50%, #c8c8c8 60%);
        background-position: 100% 50%;
    }

  100% {
      background-size: 300% 100%;
      background-image: linear-gradient(100deg, #c8c8c8 40%, #fff 50%, #c8c8c8 60%);
      background-position: 0 50%;
  }
}
</style>
