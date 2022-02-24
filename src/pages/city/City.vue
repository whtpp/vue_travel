<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from "../city/components/Header.vue";
import CitySearch from "../city/components/Search.vue";
import CityList from "../city/components/List.vue";
import CityAlphabet from "../city/components/Alphabet.vue";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data(){
    return {
      cities: {},
      hotCities:[]
    }
  },
  methods:{
    getCityInfo(){
      axios.get('/api/city.json').then(this.handleInfo)
    },
    handleInfo(res){
      res=res.data;
      if(res.ret&&res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted(){
    this.getCityInfo()
  } 
};
</script>

<style scoped>
</style>