<template>
    <div  id="main" style='height:calc(100vh - 100px)'>
      <ul>
        <li>1sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sda3few</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sda3few</li>
        <li>sdafew</li>
        <li>sda3few</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sda3few</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sda3few</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>sda3few</li>
        <li>sdafew</li>
        <li>sdafew</li>
        <li>11sdaf3ew</li>
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
              alert('拉到低了')
           }
           if(!self.y){
              alert('拉到头了')
           }
        }
      }
    }
</script>
