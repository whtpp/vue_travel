<template>
  <div>
    <div class="weekend">周末一日游</div>
    <ul>
      <li class="item" v-for="item of weekendList" :key="item.id">
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
  data() {
    return {
      weekendList: [
        {
          id: "1",
          imgUrl:
            "https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
          title: "汉中-丽江",
          desc: "含往返飞机票+4晚住宿",
        },
        {
          id: "2",
          imgUrl:
            "https://imgs.qunarzz.com/p/p97/1512/73/97da2a9e39df59f7.jpg_256x160_acb41adf.jpg",
          title: "西安-成都",
          desc: "含往返高铁票+5晚住宿",
        },
        {
          id: "3",
          imgUrl:
            "https://imgs.qunarzz.com/p/p56/201302/28/6baf0a3dc2f7735893835fbb.jpg_256x160_4a6c8651.jpg",
          title: "九寨沟-杭州",
          desc: "含往返飞机票+2晚住宿",
        },
        {
          id: "4",
          imgUrl:
            "https://imgs.qunarzz.com/p/p79/1409/28/e1f419f40bdd09fcffffffffc8d65eac.jpg_256x160_518b48fb.jpg",
          title: "安康-西岭雪山",
          desc: "含单次高铁票+6晚住宿",
        },
        {
          id: "5",
          imgUrl:
            "https://img1.qunarzz.com/sight/p0/1902/d4/d4abab5d2b8b3238a3.img.jpg_256x160_196d32fc.jpg",
          title: "大唐芙蓉园",
          desc: "皇家御园再现辉煌",
        },
        {
          id: "6",
          imgUrl:
            "https://img1.qunarzz.com/sight/p0/1411/61/d92ba6a30aa12eb0a9a4a9c82214cb8e.water.jpg_256x160_f46ee4c5.jpg",
          title: "秦始皇陵博物馆",
          desc: "皇帝的地下御林军",
        },
        {
          id: "7",
          imgUrl:
            "https://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_256x160_c047d903.jpg",
          title: "华清宫",
          desc: "唐玄宗与杨贵妃的共浴之地",
        },
      ],
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
  padding-bottom: 80%;
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