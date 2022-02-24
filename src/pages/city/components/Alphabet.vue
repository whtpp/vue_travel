<template>
  <div>
    <ul>
      <li
        :ref="item"
        class="item"
        v-for="item of letters"
        :key="item"
        @click="handleClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: " CityAlphabet",
  props: {
    cities: Object,
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
  },
  data() {
    return {
      touchstatus: false,
      startY: 0,
      timer: null,
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleClick(e) {
      this.$emit("change", e.target.innerText);
      console.log(e.target.innerText);
    },
    handleTouchStart() {
      this.touchstatus = true;
    },
    handleTouchMove(e) {
      if (this.touchstatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchstatus = false;
    },
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