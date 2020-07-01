import Vue from 'vue'
import Vuex from 'vuex'
//代码封装或提取
import mutations from './mutations' 
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CartList: [],
  },
  mutations:  mutations,//修改state中对象都从这里修改
  actions:actions,//逻辑复杂和异步操作建议在这里
  modules: {
  },
  getters:getters
})
