<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="title">
        <div class="span">当前城市</div>
        <div class="title-city">
          <button class="title-button">{{ this.$store.state.city }}</button>
        </div>
      </div>
      <div class="title">
        <div class="span">热门城市</div>
        <div
          @click="handleCity(item.name)"
          class="title-city"
          v-for="item of hotCities"
          :key="item.id"
        >
          <button class="title-button">{{ item.name }}</button>
        </div>
      </div>
      <div class="title" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="span" >{{ key }}</div>
        <div class="item-list">
          <div
            class="item"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCity(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    cities: Object,
    hotCities: Array,
    letter: String,
  },
  methods: {
    handleCity(city) {
      console.log(city);
      this.$store.commit("changeCity", city);
      this.$router.push("/");
    },
  },

  watch: {
    letter() {
      if (this.letter) {
        console.log(this.letter);
        const element = this.$refs[this.letter][0];
        console.log(element);
        this.scroll.scrollToElement(element);
      }
    },
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
};
</script>

<style scoped>
.list {
  overflow: hidden;
  position: absolute;
  top: 6.7rem;
  right: 0;
  left: 0;
  bottom: 0;
  color: rgb(78, 76, 76);
  background-color: rgb(250, 242, 231);
}
.span {
  box-sizing: border-box;
  padding: 0.4rem;
  font-size: 1.2rem;
  font-weight: 500;
  height: 2rem;
  background-color: rgb(250, 242, 231);
  text-indent: 0.5rem;
}
.title-city {
  overflow: hidden;
  display: inline-block;
}
.title-button {
  float: left;
  margin: 0.5rem 1.2rem;
  width: 7rem;
  height: 2rem;
  line-height: 1.7rem;
  text-align: center;
  font-size: 1.2rem;
  border: 0.1rem solid #ccc;
  border-radius: 0.5rem;
  background-color: #fff;
}
.item-list {
  background-color: #fff;
}
.item {
  font-size: 1.2rem;
  line-height: 2.6rem;
  text-indent: 0.6rem;
  border-bottom: 0.1rem solid rgb(228, 223, 223);
}
</style>