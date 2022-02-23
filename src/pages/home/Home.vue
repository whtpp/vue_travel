<template>
  <div class="home">
    <home-header></home-header> 
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from '../home/components/Header.vue'
import HomeSwiper from '../home/components/Swiper.vue'
export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper  
    }
}
</script>

<style scoped>
  .home{
    background-color: rgb(226, 236, 207);
  }
</style>