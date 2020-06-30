import Vue from 'vue'
import VueRouter from 'vue-router'
import StyleIndex from "../views/StyleIndex";
import Index from "../views/Index";
import UserCenter from "../views/UserCenter";
import StyleDetail from "../views/StyleDetail";
import StoreDetail from "../views/StoreDetail";
import GoodDetail from "../views/GoodDetail";

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
    },
    {//店铺详情页的路由
      path:'/StoreDetail',
      name:'StoreDetail',
      component:StoreDetail
    },
    {//商品详情页
      path:'/GoodDetail',
      name:'GoodDetail',
      component:GoodDetail
    }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
