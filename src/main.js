// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/style/reset.css'
import '../src/assets/style/border.css'
import FastClick from 'fastclick'
import '../src/assets/style/font_3198468_l4ku47akeo/iconfont.css'
Vue.config.productionTip = false
// fastClick.attach(document.body);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
