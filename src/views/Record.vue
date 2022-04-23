<template>
  <div :class="$style.record">
    <div class="record-item" v-for="item in recordList" :key="item.id" @click="clickRecordItem(item.id)">
      {{item.title}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { RecordObj } from './types/Record'

@Component
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
  :global {
    padding: 0 20px;
    height: calc(100vh - 224px);
    overflow-y: auto;
    .record-item {
      border-bottom: 1px dashed #ccc;
      padding: 10px;
      cursor: pointer;
    }
  }
}
</style>
