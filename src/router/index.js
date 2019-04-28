import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import A from '@/components/a'
import B from '@/components/b'
import userlist from '@/components/userlist'
import shoplist from '@/components/shoplist'
import foodlist from '@/components/foodlist'
import orderlist from '@/components/orderlist'
import adminlist from '@/components/adminlist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'a',
      component: A
    },
    {
      path: '/b',
      name: 'b',
      component: B,
      children:[
        {
          path:'/userlist',
          name:'userlist',
          component:userlist
        },
        {
          path:'/shoplist',
          name:'shoplist',
          component:shoplist
        },
        {
          path:'/foodlist',
          name:'foodlist',
          component:foodlist
        },
        {
          path:'/orderlist',
          name:'orderlist',
          component:orderlist
        },
        {
          path:'/adminlist',
          name:'adminlist',
          component:adminlist
        }
      ]
    },
    
  ]
})
