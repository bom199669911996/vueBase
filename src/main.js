import Vue from 'vue'
import App from './App.vue'



// 引入样式
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/css/index.css";

// true提示开发环境
Vue.config.productionTip = true






// 导入router模块
import router from './router.js'
// 导入axios模块
import axios from 'axios'
// 实现全局axios
Vue.prototype.axios = axios
// 4-渲染App.vue文件，挂载到#app
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
