import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index/index'
import Detail from '@/pages/details/detail'
import Archives from '@/pages/archives/archives'
import Me from '@/pages/me/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
    }
  ]
})
