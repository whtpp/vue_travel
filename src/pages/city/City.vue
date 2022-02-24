<template>
  <div><city-header></city-header><city-search></city-search></div>
</template>

<script>
import CityHeader from "../city/components/Header.vue";
import CitySearch from "../city/components/Search.vue";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
  },
};
</script>

<style scoped>
</style>