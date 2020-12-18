<template>
  <el-row :gutter="20">
    <el-col :md="{span:18}">
      <div class="detail_content">
        <!-- 头部-->
        <div class="detail_content_head">
          <div>
            <el-avatar icon="el-icon-user-solid"></el-avatar>
          </div>
          <div style="">
            <span style="">username</span>
            <span>2020-12-18</span>
            <span>阅读56</span>
          </div>
        </div>
        <!-- 文章内容-->
        <div>
          <el-image :src="url" fit="fill"></el-image>
          <div>
            <h1>细品 Spring Boot+Thymeleaf，还有这么多好玩的细节！</h1>
            <p>Thymeleaf 简洁漂亮、容易理解，并且完美支持 HTML5，可以直接打开静态页面，同时不新增标签，只需增强属性，这样也降低了学习成本。</p>
            <p>因此松哥今天花点时间和大家仔细分享一下 Thymeleaf。</p>
            <h2 data-id="heading-0">1. Thymeleaf 简介</h2>
            <p>Thymeleaf 是新一代 Java 模板引擎，它类似于 Velocity、FreeMarker 等传统 Java 模板引擎，但是与传统 Java 模板引擎不同的是，Thymeleaf 支持 HTML 原型。</p>
            <p>它既可以让前端工程师在浏览器中直接打开查看样式，也可以让后端工程师结合真实数据查看显示效果，同时，SpringBoot 提供了 Thymeleaf 自动化配置解决方案，因此在 SpringBoot 中使用 Thymeleaf 非常方便。</p>
            <p>事实上， Thymeleaf 除了展示基本的 HTML ，进行页面渲染之外，也可以作为一个 HTML 片段进行渲染，例如我们在做邮件发送时，可以使用 Thymeleaf 作为邮件发送模板。</p>
            <p>另外，由于 Thymeleaf 模板后缀为 <code>.html</code>，可以直接被浏览器打开，因此，预览时非常方便。</p>
          </div>
          <div style="padding-top: 20px;padding-bottom: 20px;">
            <div>
              <el-tag>SpringBoot</el-tag>
            </div>
            <div style="text-align: center;">
              <el-button type="danger" plain round>赞赏</el-button>
            </div>
          </div>
        </div>
        <!-- 博客信息 -->
        <div>
          博客信息
        </div>
        <!-- 底部-->
        <div>底部</div>
      </div>
    </el-col>
    <el-col :md="{span:6}">
      <div style="background-color: #fff;">
        asda
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
      data() {
        return {
          fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
      }
    }
</script>

<style>
  .detail_content{
    background-color: #fff;
    /* padding: 10px 15px; */
  }
  .detail_content>div{
    padding: 10px 15px;
    border-bottom: 1px #ddd solid;
  }

  .detail_content_head>div:first-child{
    float: left;
  }
  .detail_content_head>div:last-child{
    display: inline-block;
    line-height: 44px;
  }
  .detail_content_head>div:last-child>span{
    padding-left: 8px;
    color: #999;
    font-size: 14px;
  }
</style>
