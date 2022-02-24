<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
</style>