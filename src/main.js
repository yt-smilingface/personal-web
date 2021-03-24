import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/element-variables.scss'
Vue.use(ElementUI);

//封装的请求方法
import {get,post} from './request/http';  
Vue.prototype.$get = get
Vue.prototype.$post = post

//轻量级的cookie this.$cookie.set('key', 'value') this.$cookie.get('key')
import jsCookie from 'js-cookie'  
Vue.prototype.$cookie = jsCookie



Vue.config.productionTip = false

new Vue({
  router, 
  store,
  render: h => h(App),
}).$mount('#app')
