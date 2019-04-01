<template>
  <header class="Home_Header">
    <!--头部上半部分-->
    <div class="Header-Top">
      <div class="bgImg"></div>
      <div class="Header_Search">
        <i class="iconfont"></i>
        <span>搜索商品，共22112款好物</span>
      </div>
      <div class="btn">
        登陆
      </div>
    </div>
    <!--头部下半部分-->
    <div class="Header-bottom">
      <div class="listNave">
        <div class="nave-list">
          <ul class="list">
            <li class="item active">推荐</li>
            <li class="item">居家生活</li>
            <li class="item">服饰鞋帽</li>
            <li class="item">美食酒水</li>
            <li class="item">个护清洁</li>
            <li class="item">母婴亲子</li>
            <li class="item">运动旅行</li>
            <li class="item">数码家电</li>
            <li class="item">全球特色</li>
          </ul>
        </div>
      </div>
      <!--隐藏式导航-->
      <div class="more-List">
        <div class="arrows">
          <div class="iconImg"></div>
        </div>
      </div>
    </div>
  </header>

</template>
<script>
  import Bscroll from 'better-scroll'
  export default {
    mounted () {
      this.$nextTick(() => {
        //滑动
        new Bscroll('.nave-list', {
          click: true,
          scrollX: true
        })
      })

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .Home_Header
    position fixed
    left 0
    top 0
    z-index 2
    background-color white
    width 100%
    height 148px
    .Header-Top
      display flex
      height 58px
      width 100%
      align-items center
      background-color #fff
      padding 15px 28px
      .bgImg
        width 140px
        height 40px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-size: cover
        display inline-block
        background-position center
        margin-right 19px
      .Header_Search
        display flex
        align-items center
        justify-content center
        width 442px
        height 56px
        background-color #ededed
        border-radius 10px
        .iconfont
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png")
          width 27px
          height 27px
          margin-right 9px
        span
          font-size 28px
          color #666
      .btn
        width 72px
        height 38px
        line-height 38px
        text-align center
        font-size 25px
        border 1px solid #bd5256
        border-radius 6px
        color #bd5256
        margin-left 16px
    .Header-bottom
      height 61px
      position relative
      margin-top -9px
      .listNave
        .nave-list
          padding-right 96px
          .list
            height 61px
            width 250%
            .item
              height 61px
              line-height 61px
              float left
              margin 0 30px
              text-align center
              color #333333
              font-size 30px
            .active
              position relative
              border-bottom 2px solid #b4282d
              color #b4282d
      .more-List
        position relative
        .arrows
          position absolute
          z-index 2
          right 0
          bottom 0
          width 100px
          height 60px
          background #fff
          text-align center
          .iconImg
            position absolute
            right  41px
            bottom  10px
            margin-top 14px
            vertical-align middle
            display inline-block
            width 29px
            height 31px
            background-image url("http:////yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png")
            background-repeat no-repeat
            background-size 29px 31px
            transition transform 0.5s


</style>
