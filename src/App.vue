<template>
  <div id="app">
    <!-- 公共头部 -->
    <AppHeader></AppHeader>
    <div class="container-fluid">
      <div class="row">
        <!-- 公共侧边栏 -->
        <AppSilder></AppSilder>
        <!-- 路由占位 -->
        <router-view></router-view>
       
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppSilder from "./components/AppSilder.vue";


export default {
  name: "app",
  components: {
    AppHeader,
    AppSilder,
 
  }
};
</script>

<style>
#app {
  
}
</style>
