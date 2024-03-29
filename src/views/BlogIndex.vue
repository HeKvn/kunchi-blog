<template>
  <div :class="$style['blog-index']">
    <flex-one v-if="articleList.length">
      <template v-slot:left>
        <div class="article-list">
          <card class="card-suspension" v-for="item in articleList" :key="item.id" @click.native="routerToDeatil(item.id)">
            <div class="title">{{item.title}}</div>
            <div class="header">
              <div class="header-left">
                <span>作者：{{item.author}}</span>
                <span class="category" v-if="item.tags.length">
                  类别：
                  <span class="tag" v-for="tag in item.tags" :key="tag.id" @click.stop="clickTag(tag.id)">{{tag.label}}</span>
                </span>
              </div>
              <div class="header-right">
                <span>创建于：{{item.createTime | date}}</span>
                <span>上次更新：{{item.updateTime | date}}</span>
              </div>
            </div>
            <div class="body">
              <div class="body-img" v-if="item.cover">
                <img :src="item.cover" :onerror="defaultImg"  alt="">
              </div>
              <div class="body-description">
                <p>{{item.description}}</p>
              </div>
            </div>
          </card>
        </div>
        <pagination :page-info="pageInfo" @changePage="changePage"></pagination>
      </template>
      <template v-slot:right>
        <div class="author-info">
          <img class="avator" src="https://image.hekvn.top/avatar.jpg" alt="头像">
          <div>深壑有鸟扶摇来</div>
          <div>铩化北冥池中鱼</div>
        </div>
      </template>
    </flex-one>
    <skeleton v-else></skeleton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FlexOne from './layout/FlexOne.vue'
import Card from '@/components/Card.vue'
import Pagination from '@/components/Pagination.vue'
import { ArticleList } from './types/BlogIndex'
import { PageInfo } from '@/components/types/Pagination'
import { formatDate } from '@/utils/format'
import Skeleton from '@/components/Skeleton.vue'

@Component({
  components: {
    FlexOne,
    Card,
    Pagination,
    Skeleton
  },
  filters: {
    date (val: string): string {
      return formatDate(val, 'YY年MM月DD日')
    }
  }
})
export default class BlogIndex extends Vue {
  articleList: ArticleList = []
  defaultImg = 'this.src="' + require('../assets/imgDefault.png') + '"'
  pageInfo: PageInfo = {
    page: '1',
    pageSize: '10',
    pages: 1,
    total: 1
  }

  mounted (): void {
    this.getArticleList()
  }

  async getArticleList (): Promise<void> {
    const params = {
      page: this.pageInfo.page,
      pageSize: 10
    }
    const { data: res } = await this.$axios.get('/article', { params })
    if (res.code === 200) {
      this.articleList = res.data.list
      this.pageInfo = res.data.pagination
    }
  }

  routerToDeatil (id: string): void {
    this.$router.push({ name: 'ArticleDeatil', params: { id } })
  }

  clickTag (id: string): void {
    this.$router.push({ name: 'List', query: { tagid: id } })
  }

  changePage (page: number): void {
    this.pageInfo.page = page.toString()
    this.getArticleList().then(() => window.scrollTo(0, 0))
  }
}
</script>

<style lang="scss" module>
.blog-index {
  :global {
    .article-list {
      .title {
        font-weight: bold;
        padding: 0 4px;
        &:hover {
          color: #409EFF;
          cursor: pointer;
        }
      }
      .header {
        padding: 4px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        user-select: none;
        flex-wrap: wrap;
        .header-left {
          .tag {
            &:hover {
              cursor: pointer;
              color: #409EFF;
            }
          }
        }
        span {
          font-size: 12px;
          margin-right: 10px;
          &:last-child {
            margin-right: 0;
          }
        }
        @media screen and (max-width: 576px) {
          .header-right {
            span:nth-child(1) {
              display: none;
            }
          }
          .header-left {
            .category {
              display: none;
            }
          }
        }
      }
      .body {
        display: flex;
        align-items: center;
        margin-top: 10px;
        padding: 4px;
        .body-img {
          margin-right: 20px;
          img {
            width: 180px;
            height: 150px;
          }
        }
        .body-description {
          font-size: 14px;
        }
        @media screen and (max-width: 576px) {
          .body-img {
            img {
              width: 100px;
              height: 80px;
            }
          }
          .body-description {
            -webkit-line-clamp: 4;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
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
