import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
// 导出vuex仓库
export default new Vuex.Store({
  state,
  mutations
})
