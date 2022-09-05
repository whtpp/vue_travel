<template>
  <div class="wrapper">
    <!-- 轮播图外面加一个div，防止图片未加载出来时下面文字占用当前位置（抖动） -->
    <swiper :options="swiperOption" v-if="showSwiper">
    <!-- <swiper :options="swiperOption"> -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg'
      }]
    }
  },
  // 使轮播图默认显示第一张图片
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
  <!-- 样式穿透 -->
  <!-- 长宽比31.25自适应写法 -->
<style lang="stylus" scoped>

  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff

  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
