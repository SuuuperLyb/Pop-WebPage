import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Axios from 'axios'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

Vue.config.productionTip = false
Vue.prototype.$axios=Axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
