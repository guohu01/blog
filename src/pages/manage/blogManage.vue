<template>
  <el-container>
    <el-aside style="width: 200px;height: 100%;">
      <div style="background-color: #333;color: #fff;display: inline-block;position: fixed;">
        <div style="width: 200px;height: 50px;display: flex;justify-content: center;align-items: center;">
          <h3 style="margin: 0;">blog</h3>
        </div>
      </div>
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="">
        <el-menu-item index="1">
          <i class="el-icon-setting"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>博客管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">文章管理</el-menu-item>
            <el-menu-item index="1-2">评论管理</el-menu-item>
            <el-menu-item index="1-3">分类/标签</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">文件管理</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">权限管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title" @click="addTab(editableTabsValue)">系统管理</span>
        </el-menu-item>
      </el-menu>

    </el-aside>
    <el-main style="padding: 0;">
      <!-- 面包屑-->
      <div style="background-color: #fff;height: 50px;display: flex;align-items: center;justify-content: space-between;padding: 0 10px;border-bottom: 1px #eee solid;">
        <div style="display: flex;align-items: center;">
          <i class="iconfont icon-zhedie1" style="font-size: 24px;margin-right: 20px;"></i>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
      </div>
      <!-- 标签页-->
      <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
        <el-tab-pane name="1" type="border-card" label="消息中心" closable>消息中心</el-tab-pane>
        <el-tab-pane v-for="(item, index) in editableTabs" :key="item.name" :label="item.title" :name="item.name">
          {{item.content}}
          <div style="width: 400px;height: 1200px;background-color: #ff8400;"></div>
        </el-tab-pane>
      </el-tabs>

    </el-main>
  </el-container>

</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '2',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '3',
          content: 'Tab 2 content'
        }],
        tabIndex: 3
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      addTab(key,keyPath) {
      		console.log(key,keyPath)
      		bus.$emit('navPath',keyPath)
      	},
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      },

    }
  }
</script>

<style lang="scss">
  body {
    background-color: #fff;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    height: 100%;
    position: fixed;
    top: 50px;
  }
</style>
