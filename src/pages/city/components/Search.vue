<template>
  <div class="city-search">
    <div class="header-input">
      <input class="header-search" type="text" placeholder="请输入城市名或拼音"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CitySearch",
};
</script>

<style scoped>
.city-search {
    position: relative;
    height:3rem;
    background-color: antiquewhite;
}
.header-input {
  position: absolute;
  height: 2.5rem;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-55%, -50%);
}
.header-search {
  box-sizing: border-box;
  border: none;
  position: absolute;
  outline: none;
  width: 80%;
  height: 1.8rem;
  border-radius: 1rem;
  left: 50%;
  top: 50%;
  padding:0 1.5rem; 
  font-size:1.1rem;
  transform: translate(-45%, -49%);
}
.search {
  position: absolute;
  font-size: 1.3rem;
  color: rgb(212, 196, 151);
  top: 50%;
  transform: translate(160%, -40%);
}
</style>