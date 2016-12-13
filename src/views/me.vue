<template>
  <div>
    <div v-touch = 'aaa' >ghjklwejiweiojo</div>
    <ul>
      <li v-for="i in list.articleList">
        <router-link :to="{ path: 'detail'}">
          {{ i.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style  lang="scss" scoped>
  li{
    padding: 10px;
    border-bottom: 1px solid red;
  }
</style>
<script>
    export default{
        data(){
          return {
            aaa:212,
          }
        },
        computed: {
            list() {
                return this.$store.state.article
            },
        },
        mounted() {
            //this.$store.dispatch('getlist');
        },
    }
</script>
