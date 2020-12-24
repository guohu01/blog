<template>
  <div class="archives_content">
    <Head></Head>
    <div class="main">
      <el-row>
        <el-col :xl="{span:14,push:5}" :lg="{span:16,push:4}" :md="{span:18,push:3}" :sm="{span:20,push:2}">
          <!-- <Detail_main></Detail_main> -->
          <Archives_main></Archives_main>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Head from '@/pages/main/head.vue'
  import Detail_main from '../details/detail_main.vue'
  import Archives_main from './archives_main.vue'
  export default {
    data() {
      return {
      }
    },
    components:{
      Head,
      Detail_main,
      Archives_main
    },
  }
</script>

<style scoped>
  .archives_content{
	  margin-top: 81px;
  }
</style>
