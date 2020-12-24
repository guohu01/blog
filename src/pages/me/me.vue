<template>
  <div class="me_content">
    <Head></Head>
    <div class="me_main">
      <el-row>
        <el-col :xl="{span:14,push:5}" :lg="{span:16,push:4}" :md="{span:18,push:3}" :sm="{span:20,push:2}">
          <el-row :gutter="20">
            <el-col :md="{span:18}">
              <div class="block">
                <el-image :src="src"></el-image>
              </div>
            </el-col>
            <el-col :md="{span:6}">
              <div class="me_right">
                <div style=""><h3 style="margin: 0;">关于我</h3></div>
                <div>
                  个性稳重，谦虚，乐观，务实，有耐心，能吃苦耐，学习能力强，积极进取。学习成绩优秀，注重理论修养学习，并不断为自己积累竞争筹码。有较强团体协作精神，能迅速的适应环境，并融合其中，具有良好的思想品质
                </div>
                <div>
                  <el-tag type="success">编程</el-tag>
                  <el-tag type="success">读书</el-tag>
                  <el-tag type="success">写作</el-tag>
                  <el-tag type="success">运动</el-tag>
                </div>
                <div>
                  <el-tag>Java</el-tag>
                  <el-tag>JavaScript</el-tag>
                  <el-tag>Node</el-tag>
                  <el-tag>Spring</el-tag>
                  <el-tag>MySQL</el-tag>
                  <el-tag>Redis</el-tag>
                </div>
                <div>
                  <i class="iconfont icon-github"></i>
                  <i class="iconfont icon-wechat"></i>
                  <i class="iconfont icon-qq"></i>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Head from '@/pages/main/head.vue'
  export default {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    },
    components: {
      Head
    }
  }
</script>

<style>
  .me_content {
    margin-top: 81px;
  }
  .block{
    background-color: #fff;
    padding: 10px;
    border: 1px #ddd solid;
    border-radius: 2px;
  }
  .me_right{
    background-color: #fff;
    border: 1px #ddd solid;
    border-radius: 2px;
  }
  .me_right>div{
    margin: 0;
    border-bottom: 1px #ddd solid;
    padding: 10px 10px;
  }
  .el-tag{
    margin-top: 5px;
  }
  .me_right i{
    font-size: 20px;
    margin-right: 5px;
  }
</style>
