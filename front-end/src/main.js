import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import global_ from './Base.vue'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.global_ = global_

//axios.defaults.baseURL = global_.baseURL

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
