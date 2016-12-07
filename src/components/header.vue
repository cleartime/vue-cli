<template>
    <div>
      <div>
        <span class="back" @click="back()" v-if='!$route.meta.isshowBackbtn'>返回</span>
        <span>这是{{ $route.meta.name }}页面</span>
      </div>
    </div>
</template>
<style  lang="scss" scoped>
    .back{
      color: #fff;
      float: left;
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
