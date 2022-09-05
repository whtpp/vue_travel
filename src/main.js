// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/font_3198468_zmze0uag1o/iconfont.css'
import 'swiper/dist/css/swiper.css'
// 解决多倍屏1像素边框可能会增大的问题
// click事件有300ms延迟用fastclick解决，但可能会出现项目无法启动的问题
import BScroll from '@better-scroll/core'
import ObserveDom from '@better-scroll/observe-dom'
BScroll.use(ObserveDom)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
