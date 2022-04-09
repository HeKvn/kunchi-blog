<template>
  <div :class="$style['blog-index']">
    <flex-one>
      <template v-slot:left>
        <card class="card-suspension" v-for="(article, index) in articleList" :key="index">
          {{article}}
        </card>
      </template>
      <template v-slot:right>
        <div class="author-info">
          <img class="avator" src="http://image.hekvn.top/avatar.jpg" alt="头像">
          <div>深壑有鸟扶摇来</div>
          <div>铩化北冥池中鱼</div>
        </div>
      </template>
    </flex-one>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FlexOne from './layout/FlexOne.vue'
import Card from '@/components/Card.vue'

@Component({
  components: {
    FlexOne,
    Card
  }
})
export default class BlogIndex extends Vue {
  articleList: number[] = [1, 2, 3, 4]
}
</script>

<style lang="scss" module>
.blog-index {
  :global {
    .author-info {
      text-align: center;
      user-select: none;
      // background-color: #a2d9ff;
      .avator {
        width: 200px;
        height: 200px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
