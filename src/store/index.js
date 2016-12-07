import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import state from './store'
import module from './modules/'


//模块设置别名
const article = module.article;
const user = module.user;

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    article,
    user,
  }
})

