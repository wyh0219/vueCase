import Vue from 'vue'
import Router from 'vue-router'
import List from '@/view/list';
import Detail from '@/view/detail';
import Tab from '@/view/tab1';
import Add from "@/view/add"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/list/tab1'
    },
    {
      path:'/list',
      component:List,
      children:[
        {
          path:'tab1',
          components:{
            default:Tab,
            concat:Add
          }
        }
      ]
    },{
      path:'/detail/id=:id',
      component:Detail,
      props:true
    }
  ]
})
