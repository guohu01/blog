<template>
  <div class="index_content">
    <Index_top></Index_top>
    <div class="main">
      <el-row>
        <el-col :xl="{span:14,push:5}" :lg="{span:16,push:4}" :md="{span:18,push:3}" :sm="{span:20,push:2}">
          <index_main></index_main>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
  import Index_top from './Index_top.vue';
  import Index_main from './Index_main.vue';
  export default {
    data() {
      return {
        key: 123
      }
    },
    components: {
      Index_top,
      Index_main
    }
  }
</script>

<style scoped>
  .index_content{
    margin-top: 121px;
  }
</style>
