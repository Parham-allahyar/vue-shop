import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import axios from 'axios';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(Vuelidate)
Vue.use(VueSweetalert2);
// axios.defaults.baseURL = 'http://127.0.0.1:8000';
// axios.defaults.withCredentials = true;
axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('seller_token')}`
axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('admin_token')}`
axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
// axios.defaults.headers ="Access-Control-Allow-Origin: *";
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
