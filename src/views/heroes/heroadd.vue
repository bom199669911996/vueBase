<template>
     <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">添加英雄人物</h2>
        <form>
          <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" class="form-control" id="name" placeholder="name" v-model="fordata.name">
          </div>
          <div class="form-group">
            <label for="gender">性别</label>
            <select  class="form-control" v-model="fordata.gender">
                <option value="男"> 男 </option>>
                <option value="女"> 女 </option>>
               
            </select>
            
          </div>
      <!-- prevent  阻止默认事件跳转 -->
          <button class="btn btn-success" @click.prevent="additem">添加</button>
        </form>
      </div>
</template>

<script>
// 导入axios

export default {
    data(){
        return{
            // 1.绑定文本框
            fordata:{
                name:'',
                gender:'男'
            }
        }
    },
    methods:{
        additem(){
            this.axios.post(`http://localhost:3000/heroes`,this.fordata)
            .then((res)=>{
                if(res.status== 201){
                    // 编程式导航
                    this.$router.push('/heroes')
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }

}
</script>

<style>

</style>
