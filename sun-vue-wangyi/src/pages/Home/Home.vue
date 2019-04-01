<template>
  <div class="Home">
    <!--头部-->
    <Header/>
    <div class="Content">
      <div>

        <Swiper/>   <!--轮播-->

        <Labels/> <!--标签-->

        <newUserProfit/><!--新人专享礼-->

        <DirectSale/><!--品牌制造商-->
      </div>
    </div>

  </div>

</template>

<script>
  import Swiper from './commponents/Swiper/Swiper'
  import Header from './commponents/Header/Header'
  import Labels from './commponents/Labels/Labels'
  import newUserProfit from './commponents/newUserProfit/newUserProfit'
  import DirectSale from './commponents/DirectSale/DirectSale'

  import Bscroll from 'better-scroll'

  export default {
    mounted () {
      this.$nextTick(() => {
        //滑动
        new Bscroll('.Content', {
          click: true,
          scrollY: true
        })
      })

    },
    components: {
      Swiper,
      Header,
      Labels,
      newUserProfit,
      DirectSale
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
.Content
  position absolute
  left 0
  right 0
  top 148px
  bottom 98px
</style>
