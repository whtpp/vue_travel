<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont zuohua">&#xe655;</span>
      </div></router-link
    >

    <p>城市选择</p>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
};
</script>

<style scoped>
.header {
  position: relative;
  height: 4rem;
  background-color: rgb(230, 176, 96);
}
.header-left {
  width: 4rem;
  float: left;
}
.zuohua {
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