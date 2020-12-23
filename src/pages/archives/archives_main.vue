<template>
  <el-row :gutter="20" id="main">
    <el-col :md="{span:24}">
      <div class="p_title" style="background-color: #fff;">
        <p>归档</p>
        <!-- 文章展示部分-->
      </div>
      <div v-for="tableData in tableDatas" class="year">
        <h2>2019</h2>
        <div>
          <el-table :show-header=false :data="tableData" style="width: 100%">
            <el-table-column prop="date">
            </el-table-column>
            <el-table-column prop="time">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        tableDatas: {
          tableData: [{
            date: '关于刻意练习的清单',
            time: '10月02',
          }, {
            date: '失败要趁早',
            time: '10月03',
          }, {
            date: '你理解什么是财务自由吗',
            time: '11月22',
          }, {
            date: '用户故事',
            time: '12月06',
          }]
        }

      }
    },
  }
</script>

<style lang="scss">
  .p_title {
    background-color: #fff;
    padding: 10px 20px;
    margin-bottom: 5%;

    p {
      margin: 0;
      color: #00B5AD;
    }
  }

  .year {
    h2 {
      text-align: center;
    }
    tr>td:last-child{
      text-align: right;
    }
  }
</style>
