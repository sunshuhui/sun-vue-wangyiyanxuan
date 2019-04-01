import Vue from 'vue'
import App from './App'
import router from './router'

import 'lib-flexible/flexible'
import Mint from 'mint-ui';
 Vue.use(Mint)

new Vue({
  el:'#app',
  router,
  components:{App},
  template:'<App/>',

})



