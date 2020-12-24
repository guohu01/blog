<template>
  <el-row :gutter="20" id="main">
    <el-col :md="{span:24}">
      <div class="p_title" style="background-color: #fff;">
        <p>归档</p>
        <!-- 文章展示部分-->
      </div>
      <div v-for="tableData in tableDatas" class="year">
        <h2>{{tableData.year}}</h2>
        <div style="background-color: #fff;" v-for="item in tableData.tableData">
          <a href="#" style="display: flex;justify-content: space-between;align-items: center;border: 1px #d solid;padding: 5px 10px;text-decoration: none;color: #000000;">
            <div>{{item.data}}</div><el-tag>{{item.time}}</el-tag>
          </a>

        </div>

        <!-- <div>
          <el-table :show-header=false :data="tableData" style="width: 100%">
            <el-table-column prop="date">
            </el-table-column>
            <el-table-column prop="time">
            </el-table-column>
          </el-table>
        </div> -->
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        tableDatas:[{
          year: '2019',
          tableData: [{
              data: '关于刻意练习的清单',
              time: '10月02',
            },
            {
              data: '失败要趁早',
              time: '10月03',
            },
            {
              data: '你理解什么是财务自由吗',
              time: '11月22',
            },
            {
              data: '用户故事',
              time: '12月06',
            },
            {
              data: '用户故事',
              time: '12月06',
            },
            {
              data: '用户故事',
              time: '12月06',
            },
            {
              data: '用户故事',
              time: '12月06',
            }
          ]
        },{
          year: '2020',
          tableData: [{
              data: '关于刻意练习的清单',
              time: '10月02',
            },
            {
              data: '失败要趁早',
              time: '10月03',
            },
            {
              data: '你理解什么是财务自由吗',
              time: '11月22',
            },
            {
              data: '用户故事',
              time: '12月06',
            }
          ]
        },{
          year: '2021',
          tableData: [{
              data: '关于刻意练习的清单',
              time: '10月02',
            },
            {
              data: '失败要趁早',
              time: '10月03',
            },
            {
              data: '你理解什么是财务自由吗',
              time: '11月22',
            },
            {
              data: '用户故事',
              time: '12月06',
            }
          ]
        }]

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

    tr>td:last-child {
      text-align: right;
    }
  }
</style>
