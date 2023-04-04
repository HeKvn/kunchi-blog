<template>
  <div :class="$style.footer">
    <p>此池应有天下鱼，此池可钓万条鲤</p>
    <p>欢迎来到鲲池</p>
    <p>转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源。</p>
    <p>Copyright © 2020-2022 hekvn.top All Rights Reserved.</p>
    <div class="beian-info">
      <span>备案信息：<a class="beian-target" href="https://beian.miit.gov.cn/" target="blank">粤ICP备2022049783</a></span>
      <img src="@/assets/beian_icon.png" alt="公安">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BlogFooter extends Vue {}
</script>

<style lang="scss" module>
.footer {
  :global {
    // height: 150px;
    background-color: #1661ab; // 清水蓝
    color: #fff;
    padding: 10px;
    font-size: 12px;
    text-align: center;
    p {
      margin-bottom: 5px;
    }
    .beian-info {
      display: flex;
      justify-content: center;
      align-items: center;
      .beian-target {
        &:hover {
          color: #ef3473;
        }
      }
      img {
        margin-left: 3px;
        vertical-align: middle;
      }
    }
  }
}
</style>
