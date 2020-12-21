<template>
  <div id="head">
    <el-row style="border-bottom: 1px #eee solid;background-color: #fff;">
      <el-col :xl="{span:14,push:5}" :lg="{span:16,push:4}" :md="{span:18,push:3}" :sm="{span:20,push:2}">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="border: none;">
          <el-menu-item>
            <h3 style="display: inline-block;margin: 0;">blog</h3>
          </el-menu-item>
          <el-menu-item index="1">
            <router-link to="#"></router-link>首页
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="#"></router-link>归档
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="#"></router-link>我的
          </el-menu-item>
          <el-menu-item index="" style="float: right;">
            <el-input v-model="navbarForm.search" placeholder="请输入搜索标签" suffix-icon="el-icon-search" size="small" style="background-color: #fff;width: 80%;"></el-input>
          </el-menu-item>

        </el-menu>
      </el-col>
    </el-row>
    <!-- <el-row class="classify">
        <el-col :xl="{span:14,push:5}" :lg="{span:16,push:4}" :md="{span:18,push:3}" :sm="{span:20,push:2}" @n_active();>
          <a href="#" :class="activeClass == index ? 'u_active':''" v-for="(item,index) in classifys" :key="index"
            @click="getItem(index)">
            {{item}}
          </a>
        </el-col>
      </el-row> -->
  </div>
</template>

<script scoped>
  export default {
    data() {
      return {
        activeIndex: '1',

        winHeight: 0,
        /* 导航栏返回值*/
        navbarForm: {
          search: ''
        }
      };
    },
    mounted() {
      window.addEventListener("scroll", this.roll);
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      /* 分类active绑定*/
      getItem(index) {
        this.activeClass = index; // 把当前点击元素的index，赋值给activeClass
      },
      /* 监听鼠标滚动上下滑动事件*/
      roll(e) {
        console.log('执行中');
        var top = document.getElementById("head")
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
      window.removeEventListener("scroll",this.roll);
      console.log('head页面滚动事件被销毁');
    }
  }
</script>

<style scoped>
  .is-active {
    /* border-bottom: ; */
    border-bottom: 2px solid transparent !important;
    color: #00B5AD !important;
  }

  #head>div>div>ul>li:first-child {
    color: #00B5AD;
  }

  #head>div>div>ul>li {
    font-size: 16px;
  }

  #head>div>div>ul>li:hover {
    color: #00B5AD !important;
  }

  .u_active {
    color: #00B5AD !important;
  }

  /*导航栏滑动样式*/
  #head {
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
