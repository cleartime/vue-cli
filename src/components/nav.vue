<template>
    <div>
      <ul>
        <li><router-link to="/index">首页</router-link></li>
        <li><router-link to="/me">我的</router-link></li>
      </ul>
    </div>
</template>
<style lang="scss" scoped>
    ul{
      padding-left: 0;
      li{
        width: 50%;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        list-style: none;
        float: left;
        &:first-child:before{
        content: "|";
          float: right;
        }
        a{
          color: #FF5C00;
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
