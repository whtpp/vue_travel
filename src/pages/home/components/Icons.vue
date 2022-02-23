<template>
  <div class="icons">
    <div class="icon" v-for="item of iconsImg" :key="item.id">
      <img width="100%" :src="item.imgUrl" />
      <p>{{ item.span }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconsImg: [
        {
          id: "1",
          span: "酒店",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
        },
        {
          id: "2",
          span: "机票",
          imgUrl:
            "https://s.qunarzz.com/homenode/images/touchheader/flight.png",
        },
        {
          id: "3",
          span: "火车票",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/train.png",
        },
        {
          id: "4",
          span: "度假",
          imgUrl:
            "https://s.qunarzz.com/homenode/images/touchheader/package.png",
        },
        {
          id: "5",
          span: "景点",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/piao.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 25%;
}
.icon {
  position: relative;
  width: 15%;
  float: left;
  margin: 0.7rem;
  padding-bottom: 1.25%;
  text-align: center;
}
p {
  position: absolute;
  bottom: -1rem;
  width:90%;
  color: rgb(109, 107, 107);
}
</style>