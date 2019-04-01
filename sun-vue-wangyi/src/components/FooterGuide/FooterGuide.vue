<template>
  <footer class="footerGuide">
    <span class="guide_item" :class="{on: $route.path==='/home'}" @click="goTo('/home')">
      <span class="item_icon">
         <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>

    <span class="guide_item" :class="{on:$route.path==='/catelist'}" @click="goTo('/catelist')">
      <span class="item_icon">
        <i class="iconfont icon-chouti"></i>
      </span>
      <span>分类</span>
    </span>

    <span class="guide_item"  :class="{on:$route.path==='/findthings'}" @click="goTo('/findthings')">
      <span class="item_icon">
        <i class="iconfont icon-tupian2"></i>
      </span>
      <span>识物</span>
    </span>

    <span class="guide_item"  :class="{on:$route.path==='/shopcart'}" @click="goTo('/shopcart')">
      <span class="item_icon">
         <i class="iconfont icon-gouwuchekong"></i>
      </span>
      <span>购物车</span>
    </span>

    <span class="guide_item"  :class="{on:$route.path==='/person'}" @click="goTo('/person')">
      <span class="item_icon">
       <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </span>

  </footer>
</template>

<script>
  export default {
    methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footerGuide
    position fixed
    left 0
    right 0
    bottom 0
    border-top 2px solid #eee
    width 100%
    height 98px
    z-index 100
    display flex
    background-color #ffff
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      &.on
        color #b2353a
      span
        font-size 24px
        margin-top 14px
        margin-bottom 2px
        .iconfont
          margin-top 5px
          font-size 40px


</style>
