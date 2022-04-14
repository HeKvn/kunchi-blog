<template>
  <div :class="$style.pagination">
    <span class="page-el total-page">共 <span>{{pageInfo.pages}}</span> 页</span>
    <i
      class="iconfont icon-shangyiye page-el"
      :class="[+pageInfo.page === 1 ? 'disabled' : 'operation']"
      @click="changePage(false, -1)">
    </i>
    <span
      :class="[+pageInfo.page === page ? 'disabled active-page' : 'operation', 'page-el']"
      v-for="page in pageArr"
      :key="page"
      @click="changePage(true, page)">{{page}}
    </span>
    <i
      class="iconfont icon-xiayiye page-el"
      :class="[+pageInfo.page === pageInfo.pages ? 'disabled' : 'operation']"
      @click="changePage(false, 1)">
    </i>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { PageInfo } from './types/Pagination'

@Component
export default class Pagination extends Vue {
  @Prop({ type: Object, required: true }) readonly pageInfo!: PageInfo

  get pageArr (): number[] {
    const arr: number[] = []
    if (!this.pageInfo) return arr
    for (let i = 0; i < this.pageInfo?.pages; i++) {
      arr.push(i + 1)
    }
    return arr
  }

  changePage (isoperation: boolean, number: number): void {
    if (isoperation) {
      +this.pageInfo.page !== number && this.$emit('changePage', number)
      return
    }
    if (+this.pageInfo.page === 1 && number === -1) return
    if (+this.pageInfo.page === this.pageInfo.pages && number === 1) return
    let currentPage = null
    currentPage = +this.pageInfo.page + number
    this.$emit('changePage', currentPage)
  }
}
</script>

<style lang="scss" module>
.pagination {
  height: 50px;
  line-height: 50px;
  text-align: center;
  :global {
    .page-el {
      display: inline-block;
      box-sizing: border-box;
      font-size: 14px;
      min-width: 26px;
      height: 26px;
      line-height: 26px;
      margin-left: 5px;
      border: 1px solid #ccc;
      border-radius: 2px;
      user-select: none;
    }
    .total-page {
      padding: 0 5px;
      span {
        color: #409EFF;
      }
    }
    .active-page {
      color: #fff;
      background-color: #409EFF;
      border: #409EFF;
    }
    .operation {
      cursor: pointer;
      &:hover {
        color: #fff;
        background-color: #6bb4fc;
        border: #6bb4fc;
      }
      &:active {
        color: #fff;
        background-color: #409EFF;
        border: #409EFF;
      }
    }
    .disabled {
      cursor: not-allowed;
    }
  }
}
</style>
