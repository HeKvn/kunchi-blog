<template>
  <div :class="$style['article-detail']">
    <div class="margin-content">
      <div class="detail" v-html="mdStr"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { markdown } from '@/utils/markdownIt'

@Component
export default class ArticleDetail extends Vue {
  mdStr = ''

  mounted (): void {
    this.getArticle()
    window.scrollTo(0, 0)
  }

  async getArticle (): Promise<void> {
    const { data: res } = await this.$axios.get(`/article/${this.$route.params.id}`)
    if (res.code === 200) {
      document.title = `鲲池 - ${res.data.info.title}`
      this.mdStr = markdown.render(res.data.info.content)
    } else this.mdStr = '文章获取失败'
  }
}
</script>

<style lang="scss" module>
.article-detail {
  :global {
    min-height: 100vh;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    .margin-content {
      padding: 5px;
      background-color: #fff;
    }
    .detail {
      width: 1100px;
      background-image: linear-gradient(90deg, rgba(60, 10, 30, 0.04) 3%, transparent 0), linear-gradient(1turn, rgba(60, 10, 30, 0.04) 3%, transparent 0);
      background-size: 20px 20px;
      background-position: 10%;
      background-color: #fff;
      padding: 10px;
      border-radius: 2px;
      blockquote {
        padding: 0 1em;
        color: #6a737d;
        border-left: 0.25em solid #dfe2e5;
        margin: 16px 0;
      }
      img {
        max-width: 1100px;
        max-height: 1100px;
      }
      @media screen and (max-width: 992px) {
        width: 790px;
        img {
          max-width: 790px;
          max-height: 790px;
        }
      }
      @media screen and (max-width: 768px) {
        width: 650px;
        img {
          max-width: 650px;
          max-height: 650px;
        }
      }
      @media screen and (max-width: 576px) {
        width: 340px;
        img {
          max-width: 340px;
          max-height: 340px;
        }
      }
    }
  }
}
</style>
