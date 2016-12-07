export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: require('./views/index'),
      meta:{
        name:'首页',
        isshowBackbtn:true,
      }
    },
    {
      path: '/index',
      component: require('./views/index'),
      meta:{
        name:'首页',
        isshowBackbtn:true,
      }
    },
    {
      path: '/me',
      component: require('./views/me'),
      meta:{
        name:'我的',
        isshowBackbtn:true,
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
