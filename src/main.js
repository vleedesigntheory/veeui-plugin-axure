import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/styles/index.scss';

import VeeUI from 'veeui-vue';
import 'veeui-vue/dist/veeui-vue.css'

console.log('VeeUI', VeeUI);

Vue.use(VeeUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')