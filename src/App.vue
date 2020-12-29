<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Index_top from './pages/index/Index_top.vue';
  export default {
    data() {
      return {
        msg: ""
      }
    },
    name: 'App',
    components:{
      Index_top
    },
    methods:{
      parent(data){
        this.msg = data;
        console.log("App-------"+this.msg)
      }
    }
  }
</script>
<style>

body{
  margin: 0;
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
}
/* #app{
  margin: 0;
  margin-bottom: 100px;
} */
</style>
