<template>
  <div class="shopCart">
    <header class="cartHeader">
      <span class="cart">购物车</span>
      <span class="ticket">领券</span>
    </header>

    <div class="cartList">
      <ul class="list">
        <li class="item iconfont icon-dot-tiny">30天无理由</li>
        <li class="item iconfont icon-dot-tiny">48小时快速退款</li>
        <li class="item iconfont icon-dot-tiny">满88元免邮费</li>
      </ul>

      <div class="cartImg">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
        <div class="cartText">去添加点什么吧</div>
        <!--登陆成功后隐藏-->
        <div class="btn">
           登陆
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopCart
    .cartHeader
      width 100%
      height 87px
      margin 15px
      text-align center
      background-color #ffffff
      position relative
      border-bottom 1px solid #eee
      .cart
        height 88px
        text-align center
        line-height 88px
        font-size 36px
        float left
      .ticket
        float right
        margin-right 60px
        height 88px
        line-height 88px
        color #B4282D
        font-size 30px

    .cartList
      .list
        position relative
        top -15px
        z-index 1
        height 70px
        padding 0 30px
        list-style circle
        display flex
        align-items center
        justify-content space-between
        .item
          display: flex
          -webkit-box-align center
          align-items center
          font-size 24px
          color #666


    .cartImg
      position fixed
      top 80px
      left 0
      bottom 0
      z-index 0
      width 100%
      background-color #f4f4f4
      text-align center
      img
         position absolute
         left 0
         bottom 550px
         transform translateX(100%)
      .cartText
        position fixed
        transform translateX(152%)
        bottom 530px
        font-size 27px
        color #999
      .btn
        width 480px
        height 92px
        font-size 30px
        line-height 92px
        color #ffffff
        background-color #b4282d
        border-radius 10px
        margin auto
        position fixed
        bottom 390px
        transform translateX(27%)

</style>

