<template>
  <el-row :gutter="20" id="main">
    <el-col :md="{span:24}">
      <div class="p_title">
        <p>归档</p>
        <div class="p_title_right">
          <a href="#" @click="underline" :class="[b==1 ? 'underline' : '']">正序</a>
          <a href="#">最多评论</a>
          <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至"
            start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" style="margin-left: 10px;">
          </el-date-picker>
        </div>
        <!-- 文章展示部分-->
      </div>
      <div v-for="tableData in tableDatas" class="year">
        <h2>{{tableData.year}}</h2>
        <el-timeline reverse:true v-for="item in tableData.tableData" style="padding-left: 0;">
          <el-timeline-item color ="#00b5ad" :timestamp="item.time" placement="top">
            <el-card>
              <div style="display: flex;justify-content: space-between;align-items: center;border: 1px #d solid;padding: 5px 10px;">
                <a href="#" style="text-decoration: none;color: #000000;">
                  <h3>{{item.data}}</h3>
                </a>
                <el-tag>{{item.label}}</el-tag>
              </div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        a:1,    //判断状态变量
        b:2,
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value2: '',
        tableDatas: [{
          year: '2019',
          tableData: [{
              data: '关于刻意练习的清单',
              time: '10月02',
              label: 'Vue'
            },
            {
              data: '失败要趁早',
              time: '10月03',
              label: 'Vue'
            },
            {
              data: '你理解什么是财务自由吗',
              time: '11月22',
              label: 'Vue'
            }
          ]
        }, {
          year: '2020',
          tableData: [{
              data: '关于刻意练习的清单',
              time: '10月02',
              label: 'Vue'
            },
            {
              data: '失败要趁早',
              time: '10月03',
              label: 'Vue'
            },
            {
              data: '你理解什么是财务自由吗',
              time: '11月22',
              label: 'Vue'
            },
            {
              data: '用户故事',
              time: '12月06',
              label: 'Vue'
            }
          ]
        }, {
          year: '2021',
          tableData: [{
              data: '关于刻意练习的清单',
              time: '10月02',
              label: 'Vue'
            },
            {
              data: '失败要趁早',
              time: '10月03',
              label: 'Vue'
            },
            {
              data: '你理解什么是财务自由吗',
              time: '11月22',
              label: 'Vue'
            },
            {
              data: '用户故事',
              time: '12月06',
              label: 'Vue'
            }
          ]
        }]

      }
    },
    methods:{
      underline(){
        this.a = this.a+this.b;
        this.b = this.a-this.b;
        this.a = this.a-this.b;
      }
    }
  }
</script>

<style lang="scss">
  .p_title {
    background-color: #fff;
    padding: 10px 20px;
    margin-bottom: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
      color: #00B5AD;
    }

    div>a {
      margin-left: 10px;
      text-decoration: none;
      color: #999;
    }
  }

  .year {
    h2 {
      text-align: center;
    }
  }
  /* 正序、最多评论被点击后显示*/
  .underline{
    padding: 5px 0;
    border-bottom: 2px #00B5AD solid;
    color: #00B5AD !important;
  }
  .p_title_right a:hover{
    color: #00B5AD;
  }
</style>
