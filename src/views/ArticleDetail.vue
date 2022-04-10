<template>
  <div :class="$style['article-detail']">
    <div class="detail" v-html="mdStr"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MarkdownIt from 'markdown-it'

@Component
export default class ArticleDetail extends Vue {
  mdStr = ''

  mounted (): void {
    this.getArticle()
  }

  getArticle (): void {
    this.$axios.get(`/api/article/${this.$route.params.id}`)
      .then(res => {
        const md = new MarkdownIt()
        this.mdStr = md.render(res.data.data.info.content)
      })
  }
}
</script>

<style lang="scss" module>
.article-detail {
  :global {
    min-height: 100vh;
    padding: 0 20px;
    .detail {
      img {
        max-width: 1100px;
        max-height: 1100px;
      }
      @media screen and (max-width: 992px) {
        img {
          max-width: 790px;
          max-height: 790px;
        }
      }
      @media screen and (max-width: 768px) {
        img {
          max-width: 650px;
          max-height: 650px;
        }
      }
      @media screen and (max-width: 576px) {
        img {
          max-width: 310px;
          max-height: 310px;
        }
      }
    }
  }
}
</style>
