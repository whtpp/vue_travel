<template>
  <div>
    <div class="weekend">周末一日游</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props:{
    list:Array
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.weekend {
  font-size: 1.3rem;
  margin: 0.4rem;
  color: rgb(117, 116, 116);
  height: 0;
  font-weight: 700;
  text-align: center;
  padding-bottom: 5%;
  letter-spacing: 0.2rem;
  background-color: rgb(184, 211, 230);
}
.item {
  height: 0;
  padding-bottom: 55%;
}
.item-img-wrapper {
  padding: 0.5rem;
  background-color: rgb(215, 233, 233);
}
.item-img {
  width: 100%;
}
.item-title,
.item-desc {
  line-height: 1.2rem;
  padding: 0.5rem;
  font-size: 1.2rem;
  color: rgb(61, 58, 58);
  text-align: center;
}
.item-a {
  float: right;
  margin-right: 1rem;
  margin-top: 0.5rem;
  font-size: 1.1rem;
}
</style>