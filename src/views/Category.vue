<template>
  <div :class="$style.category">
    <span
     class="category-btn"
     v-for="item in categories"
     :key="item.id"
     @click="clickTag(item.id)">{{item.label}}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Tag } from './types/Base'

@Component
export default class Category extends Vue {
  categories: Tag[] = []

  mounted (): void {
    this.getTags()
  }

  async getTags (): Promise<void> {
    const { data: res } = await this.$axios.get('/tag')
    if (res.code !== 200) return
    this.categories = res.data.list
  }

  clickTag (id: string): void {
    this.$router.push({ name: 'List', query: { tagid: id } })
  }
}
</script>

<style lang="scss" module>
.category {
  height: calc(100vh - 224px);
  @media screen and (max-width: 576px) {
    height: calc(100vh - 240px);
  }
  text-align: center;
  :global {
    .category-btn {
      margin: 10px;
      cursor: pointer;
      user-select: none;
      &:hover, &:active {
        color: #409EFF;
      }
    }
  }
}
</style>
