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
            <li class="item">推荐</li>
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
      <div class="">

      </div>
    </div>
  </header>

</template>

<script>
import Bscroll from 'better-scroll'
  export default {
   mounted(){
    let scroll = new Bscroll('.nave-list',{
      click:true,
      scrollX:true
    })
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .Home_Header
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
        background-color  #ededed
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
      background-color palegoldenrod
      margin-top -9px
      .listNave
        .nave-list
          padding-right 96px
          .list
            height 61px
            width 260%
            li
              height 61px
              line-height 61px
              float left
              margin 0 30px
              text-align center
              color #333333
              font-size 30px

</style>
