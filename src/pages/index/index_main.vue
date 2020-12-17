<template>
  <el-row :gutter="20" id="main">
    <el-col :md="{span:18}">
      <div style="background-color: #fff;">
        <p class="p_title">最新</p>
        <!-- 文章展示部分-->
        <div>
          <div class="media">
            <div class="content_body">
              <p><span>user</span> &middot; <span>1月前</span> &middot; <span>Spring</span></p>
              <h3><b>阿里云 Serverless 再升级，从体验上拉开差距</b></h3>
              <ul class="list-unstyled list-inline">
                <li style="float: left;">
                  <el-button size="mini">
                    <span class="iconfont icon-zan"></span>
                    <span>10</span>
                  </el-button>
                </li>
                <li>
                  <el-button size="mini">
                    <span class="iconfont icon-pinglun"></span>
                    <span>7</span>
                  </el-button>
                </li>
              </ul>
            </div>
            <div class="content_right"><!-- vertical-align: middle;display: table-cell; -->
              <img src="https://picsum.photos/id/1001/60/60" alt="..." style="vertical-align: middle;">
            </div>
          </div>
          <div class="media">
            <div class="content_body">
              <p><span>user</span> &middot; <span>1月前</span> &middot; <span>Spring</span></p>
              <h3><b>阿里云 Serverless 再升级，从体验上拉开差距</b></h3>
              <ul class="list-unstyled list-inline">
                <li style="float: left;">
                  <el-button size="mini">
                    <span class="iconfont icon-zan"></span>
                    <span>10</span>
                  </el-button>
                </li>
                <li>
                  <el-button size="mini">
                    <span class="iconfont icon-pinglun"></span>
                    <span>7</span>
                  </el-button>
                </li>
              </ul>
            </div>
            <div class="content_right"><!-- vertical-align: middle;display: table-cell; -->
              <img src="https://picsum.photos/id/1001/60/60" alt="..." style="vertical-align: middle;">
            </div>
          </div>
          <div v-for="item in init" class="media">
            <div class="content_body">
              <p><span>{{item.username}}</span> &middot; <span>{{item.releaseTime}}</span> &middot; <span>{{item.label}}</span></p>
              <h3><b>{{item.articleTitle}}</b></h3>
              <ul class="list-unstyled list-inline">
                <li style="float: left;">
                  <el-button size="mini">
                    <span class="iconfont icon-zan"></span>
                    <span>{{item.zanCount}}</span>
                  </el-button>
                </li>
                <li>
                  <el-button size="mini">
                    <span class="iconfont icon-pinglun"></span>
                    <span>{{item.commentCount}}</span>
                  </el-button>
                </li>
              </ul>
            </div>
            <div class="content_right"><!-- vertical-align: middle;display: table-cell; -->
              <img :src="item.imageSrc" alt="..." style="vertical-align: middle;">
            </div>
          </div>

        </div>
      </div>
    </el-col>
    <el-col :md="{span:6}">
      <div style="background-color: #fff;">
        <p class="p_title" style="padding: 10px 15px;">标签</p>
        <div style="padding: 15px;">
          <!-- <el-tag>标签1</el-tag>
          <el-tag>标签2</el-tag>
          <el-tag>标签3</el-tag>
          <el-tag>标签4</el-tag>
          <el-tag>标签1</el-tag>
          <el-tag>标签2</el-tag>
          <el-tag>标签3</el-tag> -->
          <el-tag v-for="item in label">{{item}}</el-tag>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        label: ['后端','SpringBoot','Go','Python','Spring','Redis','前端','JavaScript','Vue.js'],
        init: [
          {username:'username',releaseTime:'7天前',label:'Vue.js',articleTitle:'分享8个非常实用的Vue自定义指令',zanCount:'22',commentCount:'14',imageSrc:'https://picsum.photos/id/1001/60/60'},
          {username:'username',releaseTime:'7天前',label:'Vue.js',articleTitle:'分享8个非常实用的Vue自定义指令',zanCount:'22',commentCount:'14',imageSrc:'https://picsum.photos/id/1001/60/60'},
          {username:'username',releaseTime:'7天前',label:'Vue.js',articleTitle:'分享8个非常实用的Vue自定义指令',zanCount:'22',commentCount:'14',imageSrc:'https://picsum.photos/id/1001/60/60'},
          {username:'username',releaseTime:'7天前',label:'Vue.js',articleTitle:'分享8个非常实用的Vue自定义指令',zanCount:'22',commentCount:'14',imageSrc:'https://picsum.photos/id/1001/60/60'},
          {username:'username',releaseTime:'7天前',label:'Vue.js',articleTitle:'分享8个非常实用的Vue自定义指令',zanCount:'22',commentCount:'14',imageSrc:'https://picsum.photos/id/1001/60/60'},
          {username:'username',releaseTime:'7天前',label:'Vue.js',articleTitle:'分享8个非常实用的Vue自定义指令',zanCount:'22',commentCount:'14',imageSrc:'https://picsum.photos/id/1001/60/60'},
        ]
      }
    },
  }
</script>

<style>
  /* 标签*/
  .el-tag{
    margin: 0 2px;
    margin-top: 5px;
  }

  .media{
    display: table;
  }
  .media>.content_body{
    display: table-cell;
    width: 10000px;
  }
  .media>.content_right{
    display: table-cell;
    vertical-align: middle;
  }

  #main>div {
    padding-right: 0 !important;
  }
  .media{
    padding: 15px 20px;
    border-bottom: 1px #eee solid;
  }
  .media>div>p {
    margin: 0;
    font-size: 13px;
  }

  .media>div>ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .media>div>ul>li {
    color: #999;
  }
  .media>div>ul>li>button{
    padding: 3px 5px;
  }

  .p_title {
    margin: 0;
    padding: 10px 20px;
    border-bottom: 1px #eee solid;
    color: #00B5AD;
    font-size: 14px;
  }

  .media>div>h3 {
    margin: 10px 0;
  }

  .media>div>p {
    color: #aaa;
  }
</style>
