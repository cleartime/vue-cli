import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import * as filters from './filters'
import routers from './routers';

//注册过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

//引入路由
Vue.use(VueRouter)

const router = new VueRouter(routers);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
