<template>
    <div  id="main" style='height:calc(100vh - 100px)'>
      <ul>
        <li v-for="i in list">
            {{ i }}
        </li>
      </ul>
    </div>
</template>
<style lang="scss" scoped>
  $fontSize: 220px;
  #main{
    z-index: 9;
    overflow: hidden;
    width:100%;
    ul{
      li{
        border: 1px solid grey;
      }
    }
  }
</style>
<script>
import IScroll from '../lib/iscroll.min.js';
    export default{
      data(){
        return {
          list:[12,12,123,123,124,213,21321,3213,213,213,123,213,21,321,3,123,12,3,213,21,123,121,212,1231,321321,321312]
        }
      },
      mounted() {
        let _this = this;
        const myScroll = new IScroll('#main',{
          scrollbars: true,
          fadeScrollbars:true
        });
        myScroll.on('scrollEnd', function(){
            let self = this;
            _this.dropDownRefresh(self);
        })
      },
      methods:{
        dropDownRefresh(self){
           if(self.y == self.maxScrollY){
              console.log('拉到低了')
           }
           if(!self.y){
              console.log('拉到头了')
           }
        }
      }
    }
</script>
