<template>
  <div class="newUserProfit">
    <div class="title">
      <span>-新人专享礼-</span>
    </div>
    <div class="content">
      <div class="img1 img">
        <p>新人专享礼包</p>
        <img src="//yanxuan.nosdn.127.net/a020bed0783956f650abc016e386bead.png" alt="">
      </div>
      <div class="img2 img">
        <div class="discount">
          <p class="nowPrice">￥524</p>
          <p class="pastPrice">￥699</p>
        </div>
        <p class="titleBig">福利社</p>
        <p class="titleSmall">今日特价</p>
        <img src="https://yanxuan.nosdn.127.net/3cdd30edad8157fb520954293c5eccd2.png?imageView&thumbnail=200x200&quality=75" alt="">
      </div>
      <div class="img3 img">
        <div class="discount">
          <p class="nowPrice">￥1</p>
          <p class="pastPrice">￥9.9</p>
        </div>
        <p class="titleBig">新人拼团</p>
        <p class="titleSmall">一元起包邮</p>
        <img src="https://yanxuan.nosdn.127.net/d1f507667274d2bda8371faf24872961.png?imageView&thumbnail=200x200&quality=75" alt="">
      </div>
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
  /*新人专享礼*/
  .newUserProfit
    display block
    width 750px
    height 528px
    margin 20px auto
    overflow hidden
    background-color white
    .title
      display block
      margin 0 auto
      width 750px
      height 90px
      line-height 90px
      text-align center
      font-size 32px
    .content
      display block
      box-sizing border-box
      padding-left 30px
      margin 0 auto
      width 750px
      height 438px
      .img1
        width 343px
        height 434px
        background #F9E9CF
        border-radius 3
        float left
        text-align center
        font-size 32px
        margin-right .0533rem
        p
          margin-top .4rem
          margin-bottom 4px
        img
          width 258px
          height 257px
      .img2
        width 343px
        height 215px
        background #FBE2D3
        float left
        border-radius 5px
        margin-bottom 10px
        position relative
        .discount
          position absolute
          background #F59524
          opacity .8
          border-radius 50%
          right 17px
          top 20px
          width 80px
          height 80px
          text-align center
          z-index 1
          color #fff
          .nowPrice
            margin-top 8px
            font-size 24px
          .pastPrice
            font-size 20px
            text-decoration-line line-through
        img
          position absolute
          bottom 0
          right 0
          width 200px
          height 200px
        .titleBig
          margin-left 22px
          margin-top 15px
          font-size 32px
        .titleSmall
          margin-left 22px
          margin-top 8px
          font-size 24px
      .img3
        width 343px
        height 215px
        border-radius 3px
        background #FFECC2
        float left
        position relative
        .discount
          position absolute
          background #F59524
          opacity .8
          border-radius 50%
          right 35px
          top 20px
          width 80px
          height 80px
          text-align center
          z-index 9
          color #fff
          .nowPrice
            margin-top 8px
            font-size 24px
          .pastPrice
            font-size 20px
            text-decoration-line line-through
        img
          position absolute
          bottom 0
          right 0
          width 200px
          height 200px
        .titleBig
          margin-left 22px
          margin-top 15px
          font-size 32px
        .titleSmall
          margin-left 21px
          margin-top 8px
          font-size 24px
          width 120px
          height 32px
          color #ffffff
          background #CBB693
          border-radius 8px



</style>
