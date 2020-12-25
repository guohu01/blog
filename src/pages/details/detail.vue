<template>
  <div class="detail_content">
    <Head></Head>
    <div class="main">
      <el-row>
        <el-col :xl="{span:14,push:5}" :lg="{span:16,push:4}" :md="{span:18,push:3}" :sm="{span:20,push:2}">
          <Detail_main></Detail_main>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Head from '../main/head.vue'
  import Detail_main from './detail_main.vue'
  export default {
    data() {
      return {
      }
    },
    components:{
      Head,
      Detail_main
    },
  }
</script>

<style scoped>
  .detail_content{
	  margin-top: 81px;
    margin-bottom: 100px;
  }
</style>
