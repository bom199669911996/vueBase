import Vue from 'vue'
import App from './App.vue'
// 1-加载路由模块
import VueRouter from 'vue-router'


// 引入样式
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/css/index.css";

// true提示开发环境
Vue.config.productionTip = true

// 2-注册VueRouter 用npm下载必须注册
Vue.use(VueRouter);

// 3-创建VueRouter实例，配置路由表
const router = new VueRouter({
  routes: [
    
  ]
})


// 4-渲染App.vue文件，挂载到#app
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
