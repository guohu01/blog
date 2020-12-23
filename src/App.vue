<template>
  <div id="app">
    <Index_top></Index_top>
    <router-view/>
  </div>
</template>

<script>
  import Index_top from './pages/index/Index_top.vue';
  export default {
    name: 'App',
    components:{
      Index_top
    }
  }
</script>
<style>
html{
    background-color: #f5f5f5;
}
body{
  margin: 0;
  margin-bottom: 100px;
}
</style>
