<template>
  <div :class="$style.record">
    <div class="record-item" v-for="item in recordList" :key="item.id" @click="clickRecordItem(item.id)">
      <span class="time">{{item.createTime | formatDay}}</span>
      <span class="title">{{item.title}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { RecordObj } from './types/Record'
import { formatDate } from '@/utils/format'

@Component({
  filters: {
    formatDay (val: string) {
      return formatDate(val, 'MM-DD')
    }
  }
})
export default class Record extends Vue {
  recordList: RecordObj[] = []

  mounted (): void {
    this.getRecord()
  }

  async getRecord (): Promise<void> {
    const { data: res } = await this.$axios.get('/article/all')
    if (res.code !== 200) return
    this.recordList = res.data.list
  }

  clickRecordItem (id: string): void {
    this.$router.push({ name: 'ArticleDeatil', params: { id } })
  }
}
</script>

<style lang="scss" module>
.record {
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    border-radius:10px;
    background-color:#F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius:10px;
    background-color:#489ff7;
  }
  :global {
    padding: 0 20px;
    height: calc(100vh - 224px);
    overflow-y: auto;
    .record-item {
      border-bottom: 1px dashed #ccc;
      padding: 10px;
      cursor: pointer;
      &:last-child {
        border-bottom: none;
      }
      .time {
        display: inline-block;
        width: 100px;
        color: #909399;
      }
      .title {
        &:hover {
          color: #0099ff;
        }
      }
    }
  }
}
</style>
