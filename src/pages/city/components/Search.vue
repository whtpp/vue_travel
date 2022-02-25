<template>
  <div>
    <div class="city-search">
      <div class="header-input">
        <input
          v-model="keyword"
          class="header-search"
          type="text"
          placeholder="请输入城市名或拼音"
        />
      </div>
    </div>
    <div class="search-content" ref="wrapper" v-show="keyword">
      <ul>
        <li @click="handleCity(item.name)" class="search-item" v-for="item of list" :key="item">
          {{ item.name }}
        </li>
        <li v-show="this.list.length == 0">没有匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object,
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  methods: {
    handleCity(city) {
      console.log(city);
      this.$store.commit("changeCity", city);
      this.$router.push('/')
    },
  },
  // mounted() {
  //   this.scroll = new Bscroll(this.$refs.wrapper);
  // },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
};
</script>

<style scoped>
.city-search {
  position: relative;
  height: 3rem;
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
  padding: 0 1.5rem;
  font-size: 1.1rem;
  transform: translate(-45%, -49%);
}
.search {
  position: absolute;
  font-size: 1.3rem;
  color: rgb(212, 196, 151);
  top: 50%;
  transform: translate(160%, -40%);
}
.search-content {
  position: absolute;
  top: 6.7rem;
  left: 0;
  right: 0;
  z-index: 1;
  color: rgb(122, 120, 120);
  background-color: rgb(250, 235, 215);
}
.search-item {
  line-height: 2rem;
  padding-left: 1.5rem;
  font-size: 1.1rem;
}
</style>