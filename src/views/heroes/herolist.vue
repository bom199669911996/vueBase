<template>
  <!-- 英雄列表 -->
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <!-- 占位 -->
    <router-link to="/heroes/heroadd" tag="li" class="btn btn-success">
    <a> 添加</a>
    </router-link>
    
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(items,index) in list" :key="items.id">
            <td>{{index+1}}</td>
            <td>{{items.name}}</td>
            <td>{{items.gender}}</td>
            <td>
              <!-- v-bind方法 将数值传递过去 -->
              <router-link :to="'/heroes/heroedit/'+ items.id">
                <a>edit</a>
              </router-link>
              &nbsp;&nbsp;
              <a href="javascript:" @click="delitem(items.id)">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 导入axios
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  // 组件加载完后执行
  mounted() {
    this.getdata();
  },
  methods: {
    //发送axios请求，获取数据
    getdata() {
      axios
        .get(`http://localhost:3000/heroes`)
        .then(res => {
          const { data, status } = res;
          if (status == 200) {
            this.list = data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    delitem(id) {
      if (!confirm("确定要删除么？")) {
        return false;
      }
      // 地址记得写反引号
      axios.delete(`http://localhost:3000/heroes/${id}`)
      .then((res) => {
        if (res.status == 200) {
          this.getdata();
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  }
};
</script>

<style>
</style>
