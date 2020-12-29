<template>
  <div>
    <el-row style="height: 60px;background-color: #fff;border-bottom: 1px #ddd solid !important;">
      <el-col :span="18">
        <el-input class="title-input" v-model="input" placeholder="请输入文章标题"></el-input>
      </el-col>
      <el-col :span="6">
        <div style="display: flex;align-items: center;justify-content: flex-end;height: 60px;padding-right: 20px;">
          <el-button type="text" style="color: #bbb;margin: 0 15px;">返回</el-button>
          <el-button size="small" style="margin: 0 15px;">草稿</el-button>
          <el-avatar :size="30" @error="errorHandler" style="margin: 0 15px;">
            <!--  src="https://empty" -->
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
          </el-avatar>
          <el-popover placement="bottom-end" width="300" trigger="click">
            <div class="top_popover">
              <h3>发布文章</h3>
              <p>分类</p>
              <el-radio size="small" v-model="radio1" label="1" border>后端</el-radio>
              <el-radio size="small" v-model="radio1" label="2" border>前端</el-radio>
              <el-radio size="small" v-model="radio1" label="3" border>数据库</el-radio>
              <el-radio size="small" v-model="radio1" label="4" border>Spring</el-radio>
              <el-radio size="small" v-model="radio1" label="5" border>Spring</el-radio>
              <el-radio size="small" v-model="radio1" label="6" border>Spring</el-radio>
              <el-radio size="small" v-model="radio1" label="7" border>Spring</el-radio>
              <p>标签</p>
              <el-select size="small" ref="selectBtn" :multiple="true" v-model="value" filterable allow-create
                default-first-option placeholder="请选择文章标签">
                <!--  @change="headleChange" -->
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" @click="headleChange"
                  class="123">
                </el-option>
              </el-select>
              <p>开关</p>
              <div>
                <el-checkbox size="small" v-model="checked1" label="推荐" border></el-checkbox>
                <el-checkbox size="small" v-model="checked2" label="转载声明" border></el-checkbox>
                <el-checkbox size="small" v-model="checked3" label="赞赏" border></el-checkbox>
                <el-checkbox size="small" v-model="checked4" label="评论" border></el-checkbox>
              </div>

              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <el-button size="small" type="primary" plain @click="headleChange">确定并发布</el-button>
              </div>
            </div>
            <el-button slot="reference" type="text" style="margin: 0 15px;font-size: 16px;">发布<i class="el-icon-arrow-down"></i></el-button>
          </el-popover>
        </div>
      </el-col>
    </el-row>
    <el-row style="height: 100vw;">
      <el-col :span="12" style="height: 100%;border-right: 1px #ddd solid;"></el-col>
      <el-col :span="12" style="height: 100%;background-color: #fff;"></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        radio1: '',
        options: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value: [],
        checked1: true,  //多选
        checked2: false,
        checked3: false,
        checked4: false,
      }
    },
    methods: {
      errorHandler() {
        return true
      },
      headleChange() {
        console.log('change方法被触发')
        this.$refs.selectBtn.$refs.input.blur()
      },
    }
  }
</script>

<style lang="scss" scoped>
  .el-checkbox{
    margin: 0 !important;
    margin-bottom: 5px !important;
  }

  /deep/ .el-select>div.el-input {
    width: 150px;

    input {
      border: none;
    }
  }

  .el-radio {
    margin: 0 !important;
    margin-bottom: 5px !important;
  }

  /deep/ .el-radio__input {
    display: none;
  }

  /deep/ .top_popover {
    padding: 8px;

    h3 {
      margin: 0;
    }
  }

  /deep/ .title-input {
    height: 60px;

    input {
      height: 59px;
      border: none;
      font-size: 25px;
      font-weight: bold;
    }

    input::-webkit-input-placeholder {
      font-size: 24px !important;
      font-weight: normal;
    }
  }
</style>
