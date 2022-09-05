<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
    <!-- 遍历可能的检索数据 -->
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
// import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    // 搜索功能：
    // 1.将input中的关键词与数据进行用v-model双向绑定
    // 2.用watch侦听关键词改变
    return {
      keyword: '',
      list: [],
      timer: null
      // 节流变量
    }
  },
  // 如果list为空，展示。。。页面
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        // 定义一个结果数组，遍历每一项城市数据，用indexof寻找关键词，
        // 如果能检索到，将该项加入结果数组,最后加入list数据
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 200)
    }
  },
  methods: {
    // handleCityClick (city) {
    //   this.changeCity(city)
    //   this.$router.push('/')
    // },
    // ...mapMutations(['changeCity'])
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
    // 遇到问题：better-scroll事件生效时点击事件无效，解决：设置click为true
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {observeDOM: true, click: true})
  }
}
</script>

<style lang="stylus" scoped>
  $bgColor = linear-gradient(to right, rgb(205, 153, 185) , rgb(131, 163, 236))
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
