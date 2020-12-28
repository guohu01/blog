<template>
  <div>
    <!-- 搜索表单-->
    <el-form ref="topForm" :inline="true" size="small" :model="topForm" label-width="80px">
      <el-form-item label="评论时间">
        <el-date-picker v-model="topForm.data" type="daterange" range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('topForm')">提交</el-button>
        <el-button @click="resetForm('topForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%" @selection-change="handleDeleteChange">
      <el-table-column type="selection" width="50">
      </el-table-column>
      <el-table-column prop="date" label="评论时间" sortable width="180">
      </el-table-column>
      <el-table-column label="用户昵称" prop="uname" width="100px">
      </el-table-column>

      <el-table-column label="文章标题" prop="title">
      </el-table-column>
      <el-table-column label="评论内容" prop="content">
      </el-table-column>

      <el-table-column label="子评论数" width="100" prop="commentCount">
      </el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入搜索标题" style="display: inline-block;width: 200px;margin-right: 10px;">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-button size="mini" @click="handleDeleteChange()">删除</el-button>
        </template>

        <template slot-scope="scope">
          <el-button size="mini" @click="handlePreview(scope.$index, scope.row)">详细</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页-->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 50]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="200"
      style="padding: 20px 10px;background-color: #fff;">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        topForm: {
          data: '',
          category: '',

        },
        tableData: [{
          id: '',   //评论id
          uname: '张三',
          date: '2020-04-09 10:11:37',
          title: '标题1',
          content: '评论内容one',
          commentCount: '0', //浏览量
        }, {
          id: '',
          uname: '李四',
          date: '2020-05-08 03:24:01',
          title: '阿里云 Serverless 再升级，从体验上拉开差距',
          content: '评论内容two',
          commentCount: '1', //浏览量
        }],
        search: '',
        currentPage4: 1, //跳转的页面
        multipleSelection: [],   //多选  选中数据
      }
    },
    methods: {
      //提交
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //重置
      resetForm(formName) {
        // this.$nextTick(() => {
        //   this.$refs[formName].resetFields();
        // })
        if (this.$refs[formName] !== undefined) {
          this.$refs[formName].resetFields();
        }
      },
      //表格详细、删除
      handlePreview(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      /* 处理页码大小及页面变动时的事件*/
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      //勾选的选项
      handleDeleteChange(val) {
        this.multipleSelection = val;
        console.log(this.multipleSelection)
      },
    }
  }
</script>
<style scoped></style>
