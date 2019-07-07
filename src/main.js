import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' // 加载路由模块


// 引入样式
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/css/index.css";

// true提示开发环境
Vue.config.productionTip = true

// 注册VueRouter
Vue.use(VueRouter);

// 创建VueRouter实例，配置路由表
const appRouter = new VueRouter({
  routes: []
})


// 渲染App.vue文件，挂载到#app
new Vue({
  render: h => h(App),
  router: appRouter
}).$mount('#app')
