import Vue from 'vue'
import * as types from '../mutation-types'

import 'whatwg-fetch';
const config = 'https://gxx.leanapp.cn';

/**
 * 字符串序列化
 * @param obj
 * @returns {string}
 */
const transformRequest = (obj) => {
  const str = [];
  for (const p of Object.keys(obj)) {
    str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
  }
  return str.join('&');
};


/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _get = (url, query) => {
  let _url;
  if (query) {
    _url = `${config}${url}?${transformRequest(query)}`;
  } else {
    _url = `${config}${url}`;
  }
  return fetch(_url)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      }
      return Promise.reject(new Error(res.status));
    });
};

/**
 * 获取所有文章列表
 * @param  {Function} options.dispatch store对象解构出来的函数，无需手动提供
 * @param  {String} topicTab         主题分类
 * @param  {Number} page             页数
 * @return {Promise}                  Promise
 */
export const fetchTopicLists = (commit) => {
  const url = '/article';
  return _get(url)
    .then((json) => {
      if (json.code === 200) {
        return commit(types.GET_ARTICLE,  json.data);
      }
      return Promise.reject(new Error('fetchTopicLists failure'));
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export default {
    state: {
      articleList:[]
    },
    mutations: {
        [types.GET_ARTICLE](state, article) {
          state.articleList = article
        },
    },
    actions: {
        [types.GET_ARTICLE]({commit}) {
          fetchTopicLists(commit);
        },
    },
    getters: {
      'getArticle': (state) => state.articleList
    }
}
