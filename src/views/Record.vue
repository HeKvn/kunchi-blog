<template>
  <div :class="$style.record">
    <div class="record-container" v-for="(item, index) in splitList" :key="index">
      <h2>{{item.year}}</h2>
      <div class="record-item" v-for="record in item.record" :key="record.id" @click="clickRecordItem(record.id)">
        <span class="time">{{record.createTime | formatDay}}</span>
        <span class="title">{{record.title}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { RecordObj, SplitRecord } from './types/Record'
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

  get splitList (): SplitRecord[] {
    const list: SplitRecord[] = []
    let tempList: RecordObj[] = []
    let tempYear = ''
    for (let i = 0; i < this.recordList.length; i++) {
      const year = this.recordList[i].createTime.substring(0, 4)
      if (year !== tempYear) {
        list.push({ year, record: [] })
        if (!tempYear) list[0].record = tempList
        else {
          const index = list.findIndex(o => o.year === tempYear)
          if (~index) list[index].record = tempList
        }
        tempYear = year
        tempList = [this.recordList[i]]
        continue
      }
      if (i === this.recordList.length - 1) {
        list[list.length - 1].record = [...tempList, this.recordList[i]]
      }
      tempList = [...tempList, this.recordList[i]]
    }
    return list
  }

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
    .record-container {
      h2 {
        padding: 0 10px;
      }
      .record-item {
        border-bottom: 1px dashed #ccc;
        padding: 10px;
        cursor: pointer;
        &:last-child {
          border-bottom: none;
        }
        .time {
          display: inline-block;
          width: 60px;
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
}
</style>
