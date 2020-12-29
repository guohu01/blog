import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index/index'
import Detail from '@/pages/details/detail'
import Archives from '@/pages/archives/archives'
import Me from '@/pages/me/me'
import blogManage from '@/pages/manage/blogManage'

import index from '@/pages/manage/index'
import demo from '@/pages/manage/demo'
import nav from '@/pages/manage/nav'
import chooseone from '@/pages/manage/chooseone'
import choosetwo from '@/pages/manage/choosetwo'
import choosethree from '@/pages/manage/choosethree'
import time from '@/pages/manage/time'
import release from '@/pages/manage/release'

Vue.use(Router)
//解决同一个路由被多次添加
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Archives',
      name: 'Archives',
      component: Archives
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    },
    {
      path: '/blogManage',
      name: 'blogManage',
      component: blogManage
    },
    // 后端页面路由
    {
      path: '/admin/',
      name: 'nav',
      component: nav,
      redirect: '/admin/index',
      children: [{
          path: '/admin/index',
          name: 'index',
          component: index
        },
        {
          path: '/admin/demo',
          name: 'demo',
          component: demo
        },
        {
          path: '/admin/chooseone',
          name: 'chooseone',
          component: chooseone
        },
        {
          path: '/admin/choosetwo',
          name: 'choosetwo',
          component: choosetwo
        },
        {
          path: '/admin/choosethree',
          name: 'choosethree',
          component: choosethree
        },
        
      ]
    },
    {
      path: '/admin/release',
      name: 'release',
      component: release
    }
  ]
})
