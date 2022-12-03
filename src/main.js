import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './store';
import VeeValidate from 'vee-validate';


import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {  
};

Vue.use(Toast, options);
Vue.use(VeeValidate)
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');