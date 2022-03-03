<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner.vue";
import DetailHeader from "./components/Header.vue";
export default {
  name: "Detail",
  components: { 
      DetailBanner,
      DetailHeader,
    },
};
</script>

<style scoped>
.content {
  height:100rem;
}
</style>