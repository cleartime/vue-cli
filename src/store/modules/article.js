import Vue from 'vue'
import * as types from '../mutation-types'

export default {
    state: {
      articleList:[]
    },
    mutations: {
        [types.GET_ARTICLE](state, article) {
          state.articleList = article
        },
    },
    getters: {
      'getArticle': (state) => state.articleList
    }
}
