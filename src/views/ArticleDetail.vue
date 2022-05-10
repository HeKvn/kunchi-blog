<template>
  <div :class="$style['article-detail']">
    <div class="container">
      <div class="content">
        <div class="billboard">
          <h1>{{article.title}}</h1>
          <div class="author-info-block">
            <div class="avator">
              <img src="http://image.hekvn.top/avatar.jpg" alt="hekvn">
            </div>
            <div class="info">
              <div class="author-name">{{article.author}}</div>
              <div class="update-time">
                <span>最近更新：{{article.updateTime | date}}</span>
              </div>
            </div>
          </div>
          <div class="cover" v-if="article.cover">
            <img :src="article.cover" :onerror="defaultImg" alt="文章封面">
          </div>
        </div>
        <div class="detail" v-html="mdStr"></div>
      </div>
      <div class="side"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { markdown } from '@/utils/markdownIt'
import { Article } from './types/Base'
import { formatDate } from '@/utils/format'

@Component({
  filters: {
    date (val: string) {
      return formatDate(val, 'YY年MM月DD日 hh:mm')
    }
  }
})
export default class ArticleDetail extends Vue {
  mdStr = ''
  defaultImg = 'this.src="' + require('../assets/imgDefault.png') + '"'
  article: Article = {
    id: 0,
    author: '',
    cover: '',
    createTime: '',
    description: '',
    content: '',
    tags: [],
    title: '',
    updateTime: ''
  }

  mounted (): void {
    this.getArticle()
    window.scrollTo(0, 0)
  }

  async getArticle (): Promise<void> {
    const { data: res } = await this.$axios.get(`/article/${this.$route.params.id}`)
    if (res.code === 200) {
      this.article = res.data.info
      document.title = `鲲池 - ${this.article.title}`
      this.mdStr = markdown.render(this.article.content)
    } else this.mdStr = '# 文章获取失败'
  }
}
</script>

<style lang="scss" module>
.article-detail {
  :global {
    min-height: calc(100vh - 224px);
    padding: 0 15px;
    .container {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      @media screen and (min-width: 0) {
        width: auto;
      }
      @media screen and (min-width: 576px) {
        max-width: 640px;
      }
      @media screen and (min-width: 768px) {
        max-width: 767px;
      }
      @media screen and (min-width: 992px) {
        max-width: 970px;
      }
      @media screen and (min-width: 1200px) {
        max-width: 1280px;
      }
    }
    .content {
      padding: 5px;
      background-color: #fff;
      width: 100%;
      @media screen and (min-width: 992px) {
        max-width: 70%;
      }
      @media screen and (min-width: 1200px) {
        max-width: 75%;
      }
    }
    .billboard {
      min-height: 100px;
      padding: 20px 10px 10px 10px;
      .author-info-block {
        display: flex;
        align-items: center;
        height: 80px;
        margin: 10px 0 0;
        .avator {
          height: 50px;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
        }
        .info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 10px;
          .update-time {
            color: #606266;
            font-size: 14px;
          }
        }
      }
      .cover {
        img {
          width: 100%;
          max-height: 425px;
        }
      }
    }
    .detail {
      min-height: calc(100vh - 248px);
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
        width: 100%;
      }
    }
    .side {
      width: 200px;
      height: 200px;
      border: 1px solid #ccc;
      margin-left: 20px;
      display: none;
      @media (min-width: 992px) {
        display: block;
      }
      @media screen and (min-width: 992px) {
        max-width: 30%;
      }
      @media screen and (min-width: 1200px) {
        max-width: 25%;
      }
    }
  }
}
</style>
