import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations-types'
import getters from './getters'



Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  getters,
  modules:{
    home,
    cateList,
    fidThings
  }
})
