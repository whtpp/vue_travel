<template>
  <div class="home">
    <home-header></home-header> 
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from '../home/components/Header.vue'
import HomeSwiper from '../home/components/Swiper.vue'
import HomeIcons from '../home/components/Icons.vue'
import HomeRecommend from '../home/components/Recommend.vue'
import HomeWeekend from '../home/components/weekend.vue'
export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    }
}
</script>

<style scoped>
  .home{
    background-color: rgb(246, 250, 237);
  }
</style>