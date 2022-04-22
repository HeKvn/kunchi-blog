<template>
  <div :class="$style['article-detail']">
    <div class="detail" v-html="mdStr"></div>
    <span class="back">
      fanh
    </span>
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
    window.scrollTo(0, 0)
  }

  async getArticle (): Promise<void> {
    const { data: res } = await this.$axios.get(`/article/${this.$route.params.id}`)
    const md = new MarkdownIt()
    if (res.code === 200) {
      document.title = `鲲池 - ${res.data.info.title}`
      this.mdStr = md.render(res.data.info.content)
    } else this.mdStr = '文章获取失败'
  }
}
</script>

<style lang="scss" module>
.article-detail {
  :global {
    min-height: 100vh;
    padding: 0 20px;
    position: relative;
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
    .back {
      position: fixed;
      bottom: 150px;
      right: 50px;
      z-index: 99;
      cursor: pointer;
    }
  }
}
</style>
