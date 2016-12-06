<template>
    <div>
      <ul>
        <li><router-link to="/index">主页</router-link></li>
        <li><router-link to="/me">我的</router-link></li>
      </ul>
    </div>
</template>
<style lang="scss" scoped>
    ul{
      padding-left: 0;
      li{
        background: #5bc0de;
        width: 50%;
        list-style: none;
        float: left;
        &:first-child:before{
        content: "|";
          float: right;
        }
      }
    }
</style>
<script>
    export default{
        computed: {
        },
    }
</script>
