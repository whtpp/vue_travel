<template>
  <!-- 滚动原理：内容区域高度大于wrapper高度 -->
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
// import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  data () {
    return {
      hotCities: [{
        id: 1,
        spell: 'beijing',
        name: '北京'
      }, {
        id: 3,
        spell: 'shanghai',
        name: '上海'
      }, {
        id: 47,
        spell: 'xian',
        name: '西安'
      }, {
        id: 239,
        spell: 'sanya',
        name: '三亚'
      }, {
        id: 188,
        spell: 'lijiang',
        name: '丽江'
      }, {
        id: 125,
        spell: 'guilin',
        name: '桂林'
      }]
    }
  },
  // computed: {
  //   ...mapState({
  //     currentCity: 'city'
  //   })
  // },
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
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {observeDOM: true, click: true})
    // 引入后在mounted中创建一个实例传入dom元素
  },
  // 用侦听器检测letter字母的变化
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // 获取到对应字母的dom
        this.scroll.scrollToElement(element)
        // better-scroll的属性：自动滚动到element的dom区域
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background:  linear-gradient(to right,#F2F2F2,#DBDBDB,#EAEAEA)
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
