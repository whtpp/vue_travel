<template>
  <div class="swiper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of slideImg" :key="item.id">
        <img class="swiper-img" :src="item.imgSrc" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
      },
      slideImg: [
        {
          id: "1",
          imgSrc: "https://p1-q.mafengwo.net/s19/M00/07/3F/CoNKSGHypS1bxEDbAAXCAgzuf24.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
        },
        {
          id: "2",
          imgSrc: "https://b3-q.mafengwo.net/s13/M00/71/D6/wKgEaVyd7i6AFjCjAADni5x-vvY89.jpeg",
        },
        {
          id: "3",
          imgSrc: "https://p1-q.mafengwo.net/s18/M00/12/D6/CoUBYGFmzEuAJzoNAAkW01xyxQY259.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
        },
        {
          id: "4",
          imgSrc: "https://note.mafengwo.net/img/aa/48/cd476d8ddbfb7a8d5815d472033e77d4.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
        },
      ],
    };
  },
};
</script>

<style scoped>
.swiper >>> .swiper-pagination-bullet-active {
  background-color: #fff !important;
}
.swiper {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 55.72%;
}
.swiper-img {
  width: 100%;
  height: 16rem;
  margin-top: 0.5rem;
}
</style>