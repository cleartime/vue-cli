import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import VueResource from 'vue-resource'
import * as filters from './filters'
import routers from './routers';


Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter(routers);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
