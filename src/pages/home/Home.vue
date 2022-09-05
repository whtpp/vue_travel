<template>
  <div>
  <home-header></home-header>
  <home-swiper :list="swiperList"></home-swiper>
  <home-icon :list="iconList"></home-icon>
  <home-recommend :list="recommendList"></home-recommend>
  <home-weekend :list="recommendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
// import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  // computed: {
  //   ...mapState(['city'])
  // },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    },
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getHomeInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        console.log(data)
      }
    }
  },
  mounted () {
    this.getHomeInfo()
    // this.getCityInfo()
  }
}
</script>

<style>

</style>
