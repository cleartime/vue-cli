import Vue from 'vue'
import * as types from '../mutation-types'

export default {
    state: {
      id:123456
    },
    mutations: {
        [types.GET_ID](state, user) {
          state.id = user
        },
    },
    actions: {
        [types.GET_ID]({commit}, user) {
          commit(types.GET_ID, user)
        },
    },
    getters: {
      'getid': (state) => state.id
    }
}
