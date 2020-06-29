import Vue from 'vue'
import VueRouter from 'vue-router'
import StyleIndex from "../views/StyleIndex";
import Index from "../views/Index";
import UserCenter from "../views/UserCenter";
import StyleDetail from "../views/StyleDetail"

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
    },
    {//明星风格详情页的路由配置
      path:'/StyleDetail',
      name:'styleDetail',
      component:StyleDetail
    }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
