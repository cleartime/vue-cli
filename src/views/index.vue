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
import IScroll from '../assets/iscroll.min.js';
    export default{
      mounted() {
        new IScroll('#main',{
          scrollbars: true,
          fadeScrollbars:true
        });
      },

    }
</script>
