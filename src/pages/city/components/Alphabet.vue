<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  // 定义一个字母表的数组
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // 页面初次加载没有获取到数据，mounted获取到数据后，该组件重新渲染触发updated（）
    this.startY = this.$refs['A'][0].offsetTop
    // 字母A距离顶部的距离是固定的，如果放入方法中每次都要计算，放入data中，页面更新自动获取
  },
  methods: {
    // 点击字母表将该字母发送到city组件
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    // 触摸事件开始设置为true
    handleTouchStart () {
      this.touchStatus = true
    },
    // 随手指滑动变化效果，需要节流提升性能
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 节流
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          // 手指触摸点距离顶部的距离
          const index = Math.floor((touchY - this.startY) / 20)
          // 两者相减除以每个字母的高度得到当前字母
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          // 将当前字母传值
          }
        }, 10)
      }
    },
    // 触摸事件结束设置为false
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  $bgColor = linear-gradient(to right, rgb(205, 153, 185) , rgb(131, 163, 236))
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
