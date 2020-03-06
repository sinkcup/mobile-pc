import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/pc/HelloWorld'
import SecondPage from '@/components/pc/secondPage'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/secondPage',
      name: 'secondPage',
      component: SecondPage
    }
  ]
})

/**
 * 判断是否为移动设备，是，则跳转到移动端的路径
 */
router.beforeEach((to, from, next) => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = '/#/'
    return
  }
  next()
})

export default router
