export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: require('./views/index'),
      meta:{
        name:'首页'
      }
    },
    {
      path: '/index',
      component: require('./views/index'),
      meta:{
        name:'首页'
      }
    },
    {
      path: '/me',
      component: require('./views/me'),
      meta:{
        name:'我的'
      }
    },
    {
      path: '/detail',
      component: require('./views/detali'),
      meta:{
        name:'文章'
      }
    },
    {
      path: '*',
      component: require('./views/404'),
      meta:{
        name:'404'
      }
    },
  ],
};
