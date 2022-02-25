<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :letter="letter" :cities="cities" :hotCities="hotCities"></city-list>
    <so :cities="cities"
    @change="handleChange"></so>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from "../city/components/Header.vue";
import CitySearch from "../city/components/Search.vue";
import CityList from "../city/components/List.vue";
import So from "../city/components/Al.vue";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    So
  },
  data(){
    return {
      cities: {},
      hotCities:[],
      letter:'',
    }
  },
  methods:{
    handleChange(letter){
      this.letter = letter;
      console.log(letter);
    },
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