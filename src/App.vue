<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="container-fluid">
      <div class="row">
        <AppSilder></AppSilder>
        <AppList></AppList>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppSilder from "./components/AppSilder.vue";
import AppList from "./views/AppList.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AppSilder,
    AppList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
