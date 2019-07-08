import Vue from 'vue'
// 1-加载路由模块
import VueRouter from 'vue-router'
// 2-注册VueRouter 用npm下载必须注册
Vue.use(VueRouter);
// 引入英雄列表的组件
import herolist from './views/heroes/herolist.vue'
import equips from './views/equips/equips.vue'
import weapous from './views/weapous/weapous.vue'
// 3-创建VueRouter实例，配置路由规则
const router = new VueRouter({
    // 处理高亮显示全局匹配---精确到每一个对应路由
    // linkExactActiveClass:'active',
      // 当url中的路由地址，包含a标签的href的路由地址的时候，添加类样式
      linkActiveClass:'active',
    routes: [
      {name:'home',path:'/',redirect:'/heroes'},
      {name:'heroes',path:'/heroes',component:herolist},
      {name:'equips',path:'/equips',component:equips},
      {name:'weapous',path:'/weapous',component:weapous},
    ]
  })
//   4-导出路由模块
export default router
