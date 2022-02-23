<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont zuohua">&#xe655;</span>
    </div>
    <div class="header-input">
      <span class="iconfont search">&#xe8ba;</span>
    </div>  
    <div class="header-right">城市
      <span class="iconfont xiahua">&#xe6c8;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style scoped>
.header {
  position: relative;
  height: 4rem;
  background-color: rgb(202, 236, 106);
}
.header-left {
  width: 4rem;
  float: left;
}
.zuohua {
  position: absolute;
  font-size: 2rem;
  color: rgb(129, 129, 129);
  top: 50%;
  transform: translate(55%, -50%);
}
.header-input {
  position: absolute;
  height: 2.5rem;
  background-color: #fff;
  width: 20rem;
  border-radius: 0.5rem;
  left: 50%;
  top: 50%;
  transform: translate(-53%, -50%);
}
.search {
    position: absolute;
    font-size:1.3rem;
    color:rgb(126, 123, 123);
    top:50%;
    transform: translate(70%, -40%);
}
.header-right {
    position:absolute;
    right: 0;
    width: 4.3rem;
    text-align: left;
    line-height: 4rem;
    color:rgb(114, 113, 113);
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
}
.xiahua {
  position: absolute;
  color: rgb(110, 108, 108);
  right:0.2rem;
}
</style>

