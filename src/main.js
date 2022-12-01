import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './store';

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {  
};

Vue.use(Toast, options);
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');