<template>
  <div class="container">
    <div class="wrapper">
      <swiper  class="swiper-container" :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img
            class="gallary-img"
            :src="item"
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerGallary",
  props:{
    imgs:{
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {
      swiperOptions:{
        pagination: '.swiper-pagination',
        paginationType:'fraction'
      }
    }
  }
};
</script>

<style scoped>
.container>>>.swiper-container{
  overflow: inherit;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top:0;
  background-color: #000;
}
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}
.swiper-pagination {
  color:#fff;
  bottom:-5rem;
}
.gallary-img {
  width:100%;
  height:20rem;

}
</style>
