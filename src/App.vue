<template>
  <div id="app">
      <c-header class='head'></c-header>
      <div class="main">
          <router-view></router-view>
      </div>
      <c-nav class='nav'></c-nav>
  </div>
</template>

<style lang="scss">
  html,body{
    height: 100%;
    width: 100%;
    ul{
      padding: 0;
      margin: 0;
    }
    *{
      box-sizing: border-box;
    }
  }
  #app{
    height: 100%;
    width: 100%;
    max-width: 640px;
    min-width: 320px;
    .head{
      z-index: 10;
      position: fixed;
      line-height: 50px;
      background: #00b3ee;
      text-align: center;
      left: 0;
      right: 0;
      top: 0;
    }
    .main{
      /* main绝对定位，进行内部滚动 */
      position: absolute;
      top: 50px;
      bottom: 50px;
      /* 使之可以滚动 */
      overflow-y: scroll;
      width: 100%;
    }
    .nav{
      z-index: 10;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: 50px;
      text-align: center;
    }
  }
</style>
<script>
import cHeader from './components/header';
import cNav from './components/nav';
import 'normalize.css';

export default {
  name: 'app',
  components: {
    cHeader,
    cNav
  },
  mounted() {
  },

}
</script>

