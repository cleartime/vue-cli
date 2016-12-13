<template>
    <div>
      <div>
        <span class="back" @click="back()" v-if='!$route.meta.isshowBackbtn'></span>
        <span>这是{{ $route.meta.name }}页面</span>
      </div>
    </div>
</template>
<style  lang="scss" scoped>
    span{
      color: #fff;
      font-size: 17px;
    }
    .back{
      color: #fff;
      float: left;
      padding: 0 10px;
      &:before{
        content: '<';
      }
      &:active{
        background: rgba(20, 74, 95, 0.66);
      }
    }
</style>
<script>
    export default{
      methods: {
        back() {
          this.$router.go(-1)
        },
      },
    }
</script>
