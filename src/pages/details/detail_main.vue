<template>
  <el-row :gutter="20">
    <el-col :md="{span:18}">
      <div class="detail_main_content">
        <!-- 头部-->
        <div class="detail_main_content_head">
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
            <p>Thymeleaf 是新一代 Java 模板引擎，它类似于 Velocity、FreeMarker 等传统 Java 模板引擎，但是与传统 Java 模板引擎不同的是，Thymeleaf 支持 HTML
              原型。</p>
            <p>它既可以让前端工程师在浏览器中直接打开查看样式，也可以让后端工程师结合真实数据查看显示效果，同时，SpringBoot 提供了 Thymeleaf 自动化配置解决方案，因此在 SpringBoot 中使用
              Thymeleaf 非常方便。</p>
            <p>事实上， Thymeleaf 除了展示基本的 HTML ，进行页面渲染之外，也可以作为一个 HTML 片段进行渲染，例如我们在做邮件发送时，可以使用 Thymeleaf 作为邮件发送模板。</p>
            <p>另外，由于 Thymeleaf 模板后缀为 <code>.html</code>，可以直接被浏览器打开，因此，预览时非常方便。</p>
          </div>
          <div style="padding-top: 20px;padding-bottom: 20px;">
            <div>
              <el-tag>SpringBoot</el-tag>
            </div>
            <div style="text-align: center;">
              <el-popover ref="popover" placement="top" trigger="click" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                <!-- <img src="https://picsum.photos/id/1001/60/60" alt=".."> -->
                <div class="demo-image__placeholder">
                  <div class="block" style="display: inline-block;width: 7.5rem;text-align: center;color: #FF8400;">
                    <el-image :src="require('@/assets/image/weixin.jpg')"></el-image>
                    <span class="demonstration">微信</span>
                  </div>
                  <div class="block" style="display: inline-block;width: 7.5rem;text-align: center;color: #FF8400;">
                    <el-image :src="require('@/assets/image/weixin.jpg')">
                      <div slot="placeholder" class="image-slot">
                        加载中<span class="dot">...</span>
                      </div>
                    </el-image>
                    <span class="demonstration">支付宝</span>
                  </div>
                </div>
              </el-popover>
              <el-button v-popover:popover type="danger" plain round>赞赏</el-button>
            </div>
          </div>
        </div>
        <!-- 博客信息 -->
        <div>
          博客信息
        </div>
        <!-- 留言区域-->
        <div>
          <div id="messageboard">
            <el-form ref="form" label-width="50px">
              <el-form-item label="标题">
                <el-input v-model="title" placeholder="请输入标题"></el-input>
              </el-form-item>
              <el-form-item label="内容">
                <el-input v-model="content" placeholder="请输入内容"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="add()">添加</el-button>
                <el-button @click="handleReset">重置</el-button>
              </el-form-item>
              <el-table border :data="mydata">
                <el-table-column label="编号" inline-template :context="_self">
                  <span>{{$index+1}}</span>
                </el-table-column>
                <el-table-column prop="title" label="标题">
                </el-table-column>
                <el-table-column prop="content" label="内容">
                </el-table-column>
                <el-table-column label="操作" inline-template :context="_self">
                  <span>
                    <el-button size="small" @click="showDialog()">删除</el-button>
                  </span>
                </el-table-column>
              </el-table>
              <div style="text-align:right" v-show="mydata.length>0">
                <el-button size="small" @click="showDelallDialog()">全部删除</el-button>
              </div>
            </el-form>

            <el-dialog title="提示" v-model="dialogVisible" size="tiny">
              <span v-if="nowIndex==-2">删除全部条留言</span>
              <span v-else>删除此条留言</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="del(nowIndex)">确 定</el-button>
              </span>
            </el-dialog>
          </div>
        </div>
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
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        title: '',
        content: '',
        mydata: [],
        dialogVisible: false,
        nowIndex: -100,
      }
    },
    methods: {
      add() {
        if (this.title == '' || this.content == '') {
          this.$message.error('请填写完整');
        } else {
          this.mydata.push({
            title: this.title,
            content: this.content,
          });
          this.title = '';
          this.content = '';
        }
      },
      showDialog() {
        this.dialogVisible = true;
      },
      showDelallDialog() {
        this.dialogVisible = true;
        this.nowIndex = -2;
      },
      del(n) {
        if (n == -2) {
          this.mydata = [];
        } else {
          this.mydata.splice(n, 1);
        }
        this.nowIndex = -100;
        this.dialogVisible = false;
      },
      handleReset() {
        this.title = '';
        this.content = '';
      }
    },
  }
</script>

<style>
  .detail_main_content {
    background-color: #fff;
    /* padding: 10px 15px; */
  }

  .detail_main_content>div {
    padding: 10px 15px;
    border-bottom: 1px #ddd solid;
  }

  .detail_main_content_head>div:first-child {
    float: left;
  }

  .detail_main_content_head>div:last-child {
    display: inline-block;
    line-height: 44px;
  }

  .detail_main_content_head>div:last-child>span {
    padding-left: 8px;
    color: #999;
    font-size: 14px;
  }

  /* 赞赏*/
  .el-popover--plain {
    border: 1px #ff8400 solid;
  }

  .popper__arrow::after {
    /* border: 1px #ff8400 solid; */
    background-color: #FF8400;
  }
</style>
