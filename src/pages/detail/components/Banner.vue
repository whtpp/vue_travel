<template>
  <div>
    <div class="detail-banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-number">
          <span class="iconfont">&#xe6b2;</span>
          {{ this.bannerImgs.length }}
        </div>
      </div>
    </div>
    <div @close="handleGallaryClose" v-show="showGallary">
      <banner-gallary :imgs="bannerImgs" v-show="showGallary"></banner-gallary>
    </div>
  </div>
</template>

<script>
import BannerGallary from "../../../common/gallary/Gallary.vue";
export default {
  name: "DetailBanner",
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array,
  },
  data() {
    return {
      showGallary: false,
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
      console.log("2");
    },
  },
  components: {
    BannerGallary,
  },
};
</script>

<style scoped>
.detail-banner {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 0rem;
  padding-bottom: 55%;
  color: #fff;
}
.banner-img {
  width: 100%;
}
.info {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 1rem;
}
.banner-title {
  flex: 1;
  font-size: 1.2rem;
  padding: 0.5rem;
}
.banner-number {
  padding: 0 0.5rem;
  line-height: 0.5rem;
  height: 0.5rem;
}
</style>