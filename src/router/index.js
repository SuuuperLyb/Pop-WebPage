import Vue from 'vue'
import VueRouter from 'vue-router'
import StyleIndex from "../views/StyleIndex";
import Index from "../views/Index";
import UserCenter from "../views/UserCenter";

Vue.use(VueRouter)

  const routes = [
    {
      //首页商品展示页面
      path:'/',
      name:'index',
      component:Index
    },
    {
      //明星风格的首页
      path:'/styleIndex',
      name:'styleIndex',
      component:StyleIndex
    },
    {//用户中心的路由配置
      path:'/user',
      name:'userCenter',
      component:UserCenter
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
