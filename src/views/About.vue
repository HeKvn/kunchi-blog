<template>
  <div :class="$style.about">
    <p>对于深海，我是恐惧的。</p>
    <p>幽暗的世界，未知的庞然大物，在阳光无法穿透的深度。</p>
    <p>可是不知从什么时候起，鲲这个生物逐渐出现在了我的脑海里，像梦魇一样，挥之不去。</p>
    <p>是因为那艘“鹦鹉螺号”，还是那场《逍遥游》？亦或只是我的名字谐音了鲲？</p>
    <p>其实都是，也都不是。</p>
    <hr>
    <p>每天都在因为各种事情忙碌着，偶尔也会想坐下来发发呆，天马行空这个世界的神秘。</p>
    <p>北冥有鱼，可化飞鸟，妄无根据，也虚浮缥缈，可每每思绪对此纷至沓来，我已然随鱼游去，随鸟飞去。</p>
    <p>这是属于我自己的时间与空间。</p>
    <hr>
    <p>那只鱼真的存在吗？</p>
    <p>当你思考的时候，他就在。</p>
    <hr>
    <p>深壑有鸟扶摇来，铩化北冥池中鱼。</p>
    <p>庄周有鱼化鸟，我这有鸟化鱼，是如何？</p>
    <p>养鲲的池子应该很大吧？</p>
    <p>北冥是海吧？</p>
    <p>脑海也是海。</p>
    <p>但，</p>
    <p>是鸟不是壑，是鱼不是鲲。</p>
    <p>此池应有天下鱼，此池可钓万条鲤。</p>
    <strong>欢迎来到鲲池。</strong>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class About extends Vue {}
</script>

<style lang="scss" module>
.about {
  padding: 0 20px;
  height: calc(100vh - 224px);
  @media screen and (max-width: 576px) {
    height: calc(100vh - 240px);
  }
  overflow-y: auto;
}
</style>
