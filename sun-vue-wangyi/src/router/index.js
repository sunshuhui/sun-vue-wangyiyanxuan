import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'

Vue.use(Router)

export default new Router({
  mode :"history",//除去#号
  routes: routers,
})
