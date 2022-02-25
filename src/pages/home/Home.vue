<template>
  <div class="home">
    <home-header></home-header> 
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import axios from 'axios'
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
    },
    data(){
      return {
        lastCity:'',
        swiperList:[],
        weekendList:[],
      }
    },
    methods:{
      getHomeInfo(){
        axios.get('/api/index.json').then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res=res.data;
        if(res.ret&&res.data){
          const data = res.data;
          this.swiperList = data.swiperList;
          this.weekendList = data.weekendList;
        }
        console.log(res)
      }
    },
    mounted() {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    activated(){
      if(this.lastCity!==this.city){
        this.lastCity = this.city
        this.getHomeInfo()
      }
    }
}
</script>

<style scoped>
  .home{
    background-color: rgb(246, 250, 237);
  }
</style>