<template>
<div>
  <!--标签-->
  <div class="labels">
    <ul class="labelsList">
      <li class="iconfont icon-yi">
        &nbsp;<span>网易自营品牌</span>
      </li>
      <li class="iconfont icon-dunpai">
        &nbsp;<span>30天无忧退货</span>
      </li>
      <li class="iconfont icon-money">
        &nbsp;<span>48小时快速退款</span>
      </li>
    </ul>
  </div>
  <!--频道-->
  <div class="channels">
    <ul class="channelsList">
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/d9b758692b0a30604a4db9f679de5780.png" alt="">
        <span>居家生活</span>
      </li>
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/ce07fc4fa52e854793ef10550d833d2d.png" alt="">
        <span>服饰鞋包</span>
      </li>
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/bf534026b4aefcd553c053b8b8aaeaed.png" alt="">
        <span>美食酒水</span>
      </li>
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/42a83d8a7f6068b5c16c6c58c4ca02f5.png" alt="">
        <span>个护清洁</span>
      </li>
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/7a3f8a27d569aa7018a6a23277f22724.png" alt="">
        <span>限时购</span>
      </li>
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/74503f46ff1cb92f5d606ba7bf8980d1.png" alt="">
        <span>母婴亲子</span>
      </li>
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/d38eb611a2cc80e02cc09e7c25f9c435.png" alt="">
        <span>运动旅行</span>
      </li>
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/84e6e478d43940c0a18404c233c2d348.png" alt="">
        <span>数码家电</span>
      </li>
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/13fc71e77de45405a813b56a2021c395.png" alt="">
        <span>全球特色</span>
      </li>
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/956964ebc6ffe70eef0e9b3b2082cdc6.png" alt="">
        <span>超级会员</span>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
  export default {

    methods: {},
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .labels
    width 100%
    height 72px
    background-color #ffefe2
    .labelsList
      width 100%
      height 100%
      padding 0 29px
      display flex
      align-items center
      .iconfont
        margin-right 28px
        font-size 25px
        color #B4282D
  .channels
    width 100%
    height 373px
    background-color #ffefe2
    .channelsList
      display block
      overflow hidden
      box-sizing border-box
      .item
        display block
        float left
        width 20%
        height 50%
        img
          display block
          margin 18px auto
          width 105px
          height 105px
        span
          display block
          margin 0 auto
          font-size 24px
          margin-top 10px
          text-align center

</style>
