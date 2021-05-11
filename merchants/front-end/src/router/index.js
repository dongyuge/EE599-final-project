import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login/login'
import index from '@/page/index/index'
import home from '@/page/home/home'
import order from '@/page/order/order'
import preferen from '@/page/preferen/preferen'
import variety from '@/page/variety/variety'
import addto from '@/page/addto/addto'

import addpre from '@/page/addpre/addpre'
import editfood from '@/page/editfood/editfood'

import editpre from '@/page/editpre/editpre'


Vue.use(Router)

const router =   new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/index',
      name:'index',
      component:index,
      
      redirect:'/home',
      
      children:[
          {
          path:'/home',
          name:'home',
          component:home
          },
          {
          path:'/order',
          name:'order',
          component:order
          },
          {
          path:'/preferen',
          name:'preferen',
          component:preferen
          },
          {
          path:'/variety',
          name:'variety',
          component:variety
          },
          {
          path:'/addto',
          name:'addto',
          component:addto
          },
          {
          path:'/addpre',
          name:'addpre',
          component:addpre
          },
          
          {
          path:'/editpre',
          name:'editpre',
          component:editpre
          },
          
          {
          path:'/editfood',
          name:'editfood',
          component:editfood
          },
          
          
         
          
      ]
    },

  ]
})


router.beforeEach((to, from, next) =>{
  // console.log(to)
  let openid = localStorage.getItem("openid")
  if(openid){
     
      next()
    }else{
        
        if (to.path === '/') {
           next()
       } else {
           next('/')
       }
   }
})


export default router
