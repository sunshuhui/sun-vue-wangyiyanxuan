/*
home 首页相关的状态数据
 */
//     首页数据      搜索关键字     获取搜索结果
import {reqMockHome, reqInitSearch, reqSearchResult} from '../../../api'
import {GET_HOME_DATA, GET_SEARCH_DATA, GET_SEARCH_RESULT} from '../mutations-types'

const state = {
  homeData: [],
  searchData: {},
  searchResult: [],
}
const actions = {
  /*
      首页数据
   */
  async getHomeDate ({commit}) {
    const result = await reqMockHome()
    const homeData = result.data

    if (result.code === 0) {
      commit(GET_HOME_DATA, {homeData})  //根据返回的数据调用mutatins更该数据
    }
  },
}
const mutations = {
//首页数据
  [GET_HOME_DATA] (state, {homeData}) {
    state.homeData = homeData
  },

}
const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}
