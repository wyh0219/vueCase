import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home';
import Web from '../view/web/web';
import UI from '../view/ui/ui';
import Data from '../view/data/data';
import Class from '../view/web/class';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home/web/classname'
    },
    {
      path: '/home',
      component: Home,
      children:[{
        path: 'web',
        component: Web,
        children:[{
          path:':classname',
          name:"Class",
          component:Class
        }]
      },{
        path: 'ui',
        component: UI,
      },{
        path: 'data',
        component: Data,
      }]
    }
  ]
})
