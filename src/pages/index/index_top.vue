<template>
  <div>
    <div id="top">
      <el-row id="navbar" style="border-bottom: 1px #eee solid;background-color: #fff;">
        <el-col :xl="{span:14,push:5}" :lg="{span:16,push:4}" :md="{span:18,push:3}" :sm="{span:20,push:2}">
          <el-menu :default-active="this.$route.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect"
            style="border: none;">
            <el-menu-item>
              <h3 style="display: inline-block;margin: 0;">blog</h3>
            </el-menu-item>
            <el-menu-item index="/">
              首页
            </el-menu-item>
            <el-menu-item index="/Archives">
              归档
            </el-menu-item>
            <el-menu-item index="/Me">
              关于我
            </el-menu-item>
            <el-menu-item index="" style="float: right;">
              <el-input v-model="navbarForm.search" placeholder="请输入搜索标签" suffix-icon="el-icon-search" size="small"
                style="background-color: #fff;width: 80%;"></el-input>
            </el-menu-item>

          </el-menu>
        </el-col>
      </el-row>
      <!-- <el-row class="classify" style="">
        <el-col :xl="{span:14,push:5}" :lg="{span:16,push:4}" :md="{span:18,push:3}" :sm="{span:20,push:2}"
          @n_active();>
          <a href="#" :class="activeClass == index ? 'u_active':''" v-for="(item,index) in classifys" :key="index"
            @click="getItem(index)">
            {{item}}
          </a>
        </el-col>
      </el-row> -->

      <el-row class="classify" style="">
        <el-col :xl="{span:14,push:5}" :lg="{span:16,push:4}" :md="{span:18,push:3}" :sm="{span:20,push:2}">
          <a href="#" :class="activeClass == -1 ? 'u_active':''" @click="getItem(-1)">推荐</a>
          <el-popover placement="bottom-start" width="350" trigger="hover" v-for="(type,index) in classifys">
            <a href="#" v-for="(val,ind) in type.tags"><el-tag>{{val}}</el-tag></a>
            <a href="#" :class="activeClass == index ? 'u_active':''" :key="index" @click="getItem(index)" slot="reference">{{type.classify}}</a>
          </el-popover>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '/',
        // classifys: ['全部', '后端', '前端'],
        classifys: [
          {
            classify: '后端',
            tags: ['Spring','Redis','Mybatis','Spring','Redis','Mybatis','Spring','Redis','Mybatis','Spring','Redis','Mybatis']
          },
          {
            classify: '前端',
            tags: ['Vue','HTML','Node']
          },
          {
            classify: '数据库',
            tags: ['MySQL','Redis','Oracle']
          }
        ],
        activeClass: -1,
        winHeight: 0,
        /* 导航栏返回值*/
        navbarForm: {
          search: ''
        }
      };
    },
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    mounted() {
      // this.classifys =  ['全部','后端','前端']
      window.addEventListener("scroll", this.roll)
    },
    methods: {
      /* linkbtn(key){
        console.log("===="+key)
        this.$router.push('/Archives?active=${key}');
      }, */
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      /* 分类active绑定*/
      getItem(index) {
        this.activeClass = index; // 把当前点击元素的index，赋值给activeClass
      },
      /* 监听鼠标滚动上下滑动事件*/
      roll(e) {
        var top = document.getElementById("top")
        var scrollY = window.scrollY;
        // console.log(scrollY)
        if ((scrollY - 60) > this.winHeight) {
          top.classList.add("hiddened");
          this.winHeight = scrollY;
        }
        if (this.winHeight - 60 >= scrollY) {
          top.classList.remove("hiddened");
          this.winHeight = scrollY;
        }
        if (scrollY > 0) { //如果没滚动到顶部，删除显示类，否则添加显示类
          top.classList.remove("showed");
        } else {
          top.classList.add("showed");
        }
      }
    },
    destroyed() {
      console.log('index_top页面滚动被销毁')
      window.removeEventListener("scroll", this.roll)
    }
  }
</script>

<style scoped>
  .is-active {
    /* border-bottom: ; */
    border-bottom: 2px solid transparent !important;
    color: #00B5AD !important;
  }

  #top>div>div>ul>li:first-child {
    color: #00B5AD;
  }

  #top>div>div>ul>li {
    font-size: 16px;
  }

  #top>div>div>ul>li:hover {
    color: #00B5AD !important;
  }

  /* 分类*/
  .classify {
    height: 40px;
    background-color: #fff;
  }

  .classify>div {
    padding-left: 15px;
    line-height: 40px;
    font-size: 14px;
  }

  .classify>div a {
    text-decoration: none;
    padding: 0 5px;
    color: #777;
    -webkit-tap-highlight-color: transparent; outline: none;
  }

  .classify>div a:hover {
    color: #00B5AD;
  }

  .u_active {
    color: #00B5AD !important;
  }

  /*导航栏滑动样式*/
  #top {
    position: fixed;
    top: 0;
    width: 100%;
    transition: top .3s;
    z-index: 999;
  }

  .hiddened {
    top: -61px !important;
  }

  .showed {
    top: 0;
    z-index: 9999;
  }
</style>
