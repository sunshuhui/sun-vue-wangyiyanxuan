<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/4ebefa195803f5fa9596296867d0a93a.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/d016f5485630bfa9c2c05149500689e8.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/913093cb4e9612c88d0786011768e2ba.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/10ab4e151809a71613f37774b4c5bc6e.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/3ef9aa04a6826b18a9382e3d687d24e3.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import '../../../node_modules/swiper/dist/css/swiper.css'
  import Swiper from 'swiper'

  export default {
    mounted () {
      this.$nextTick(()=>{
        new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })

      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper
    height 400px
</style>
