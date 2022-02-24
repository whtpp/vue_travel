<template>
  <div>
    <ul>
      <li class="item" v-for="(item,key) of cities" :key="key">{{ key }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: " CityAlphabet",
  props: {
    cities: Object,
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 5%;
  right: 0;
  top: 7rem;
  bottom: 0;
}
.item {
  line-height: 1.6rem;
  text-align: left;
  font-size: 1.2rem;
  color: rgb(241, 166, 123);
}
</style>