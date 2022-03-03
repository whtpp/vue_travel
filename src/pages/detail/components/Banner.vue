<template>
  <div>
    <div class="detail-banner">
      <img
        class="banner-img"
        src="https://sales.mafengwo.net/mfs/s17/M00/28/F6/CoUBXl9shquAJyfhAAWcE-LvHQQ74.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100"
      />
      <div class="info">
        <div class="banner-title">丽江玉龙雪山门票</div>
        <div class="banner-number">
          <span class="iconfont">&#xe6b2;</span>
          39
        </div>
      </div>
    </div>
    <!-- <banner-gallary :imgs="imgs"></banner-gallary> -->
  </div>
</template>

<script>
import BannerGallary from "../../../common/gallary/Gallary.vue";
export default {
  name: "DetailBanner",
  data(){
      return{
          imgs:[]
      }
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