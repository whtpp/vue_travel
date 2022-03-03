<template>
  <div>
    <router-link to="/" v-show="showabs" tag="div" class="header-abs">
      <span class="iconfont zuohua">&#xe655;</span>
    </router-link>
    <div class="header-fixed" v-show="!showabs" :style="opacityStyle">
      <router-link to="/">
        <div class="header-left">
          <span class="iconfont zuohua2">&#xe655;</span>
        </div></router-link
      >

      <p>景点详情</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showabs: true,
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;

      if (top > 60) {
        this.showabs = false;
        let opacity = top / 300;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity,
        };
      } else {
        this.showabs = true;
      }
    },
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.header-abs {
  position: absolute;
  top: 2rem;
  left: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  text-align: center;
  line-height: 2rem;
  background-color: rgba(182, 184, 184, 0.637);
}
.zuohua {
  color: #fff;
  font-size: 1.2rem;
  /* text-align: center; */
}
.header-fixed {
  position: fixed;
  width: 100%;
  top: 0;
  height: 4rem;
  background-color: rgb(139, 206, 226);
}
.header-left {
  width: 4rem;
  float: left;
}
.zuohua2 {
  position: absolute;
  font-size: 2rem;
  color: #fff;
  top: 50%;
  transform: translate(55%, -50%);
}
p {
  text-align: center;
  line-height: 4rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.15rem;
}
</style>