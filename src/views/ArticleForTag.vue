<template>
  <div :class="$style['article-for-tag']">
    <card
     class="card-suspension"
     v-for="article in articleList"
     :key="article.id"
     @click.native="handleToArticle(article.id)">
      {{article.title}}
    </card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '@/components/Card.vue'

@Component({
  components: {
    Card
  }
})
export default class ArticleForTag extends Vue {
  articleList = []

  mounted (): void {
    this.getArticles()
  }

  async getArticles (): Promise<void> {
    const params = {
      page: 1,
      pageSize: 20,
      tagId: this.$route.query.tagid
    }
    const { data: res } = await this.$axios('/article', { params })
    if (res.code !== 200) return
    this.articleList = res.data.list
  }

  handleToArticle (id: string): void {
    this.$router.push({ name: 'ArticleDeatil', params: { id } })
  }
}
</script>

<style lang="scss" module>
.article-for-tag {
  min-height: 800px;
}
</style>
