import Vue from 'vue'
import VueRouter from 'vue-router'
import router from "./router" 
import App from './App.vue'
import axios from "axios"
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './store.js'
import "./index.css"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.axios=axios
console.log(Vue)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
