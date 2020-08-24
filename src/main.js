import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.baseURL="http://101.96.128.94:9999/mfresh/data/";

Vue.use(VueAxios,axios);

Vue.config.productionTip = false

import {date} from "./filter";
Vue.filter("date",date);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
