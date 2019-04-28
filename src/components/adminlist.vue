<template>
  <div class="user">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="user_name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="注册日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="city"
        label="地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="admin"
        label="权限">
      </el-table-column>
      
    </el-table>
    
  
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            tableData:[]
        }
    },
    methods: {
        
    },
    mounted(){
        axios.get('https://elm.cangdu.org/admin/all?offset=0&limit=20').then((res)=>{
            console.log(res.data);
            this.tableData = res.data.data
            console.log(this.tableData)
        })
    }
};
</script>

<style>
.user{
    position: relative;
    top:-520px;
    left:200px;
}
/* .user .el-container{
    position: absolute;
    top:60px;
    left:220px;
} */
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
 
  /* width:500px; */
}


</style>
