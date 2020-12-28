<template>
  <div>
    <!-- 搜索表单-->
    <el-form ref="topForm" :inline="true" size="small" :model="topForm" label-width="80px">
      <el-form-item label="更新时间">
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
      <el-table-column prop="date" label="更新时间" sortable width="180">
      </el-table-column>

      <el-table-column label="标题" prop="title">
      </el-table-column>

      <el-table-column prop="category" label="分类" width="100" :filters="[{ text: 'Vue', value: 'Vue' }, { text: 'Node', value: 'Node' }]"
        :filter-method="filterCategory" filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.category === 'Vue' ? 'primary' : 'success'" disable-transitions>{{scope.row.category}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="state" width="100" :filters="[{ text: '发布', value: '发布' }, { text: '草稿', value: '草稿' }]"
        :filter-method="filterState" filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.state === '发布' ? 'primary' : 'success'" disable-transitions>{{scope.row.state}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="推荐" width="100" prop="recommend" @click="clickOn(tableData.row)">
        <template slot-scope="tableData">
          <el-switch style="display: block" v-model="tableData.row.recommend" active-color="#13ce66">
          </el-switch>
        </template>
      </el-table-column>

      <el-table-column label="浏览量" width="100" prop="browseCount">
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入搜索标题" style="display: inline-block;width: 200px;margin-right: 10px;">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-button size="mini" @click="handleDeleteChange()">删除</el-button>
        </template>

        <template slot-scope="scope">
          <el-button size="mini" @click="handlePreview(scope.$index, scope.row)">预览</el-button>
          <el-button size="mini" type="warning" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <!-- <el-popover placement="top" width="160" v-model="visible">
            <p>确定删除本条数据吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible = false">取消</el-button>
              <el-button type="primary" size="mini" @click="visible = true">确定</el-button>
            </div>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" slot="reference">删除</el-button>
          </el-popover> -->
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
        visible: true,  //是否删除本条数据btn
        topForm: {
          data: '',
          category: '',

        },
        tableData: [{
          id: '',
          date: '2020-04-09 10:11:37',
          title: '标题1',
          category: 'Vue',
          state: '发布',
          recommend: false,
          browseCount: '22', //浏览量
        }, {
          id: '',
          date: '2020-05-08 03:24:01',
          title: '阿里云 Serverless 再升级，从体验上拉开差距',
          category: 'Node',
          state: '草稿',
          recommend: false,
          browseCount: '66', //浏览量
        }],
        search: '',
        currentPage4: 4, //页码
        multipleSelection: [], //多选  选中数据
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
      //表格编辑、删除
      handlePreview(index, row) {
        console.log(index, row);
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      //分类筛选
      filterCategory(value, row) {
        return row.category === value;
      },
      //状态筛选
      filterState(value, row) {
        return row.state === value;
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
      clickOn(data){
        console.log("============")
        console.log(data)
      }
    }
  }
</script>
<style scoped></style>
