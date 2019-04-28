<template>
  <div class="user">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        label="#"
        width="180">
      </el-table-column>
      <el-table-column
        prop="registe_time"
        label="注册日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="city"
        label="注册地址">
      </el-table-column>
    </el-table>
    <div class="block">
        <span class="demonstration"></span>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            tableData:[],
            num:0
        }
    },
    methods: {
        // setCurrent(row) {
        //   this.$refs.singleTable.setCurrentRow(row);
        // },
        // handleSizeChange(val) {
        //     console.log(`每页 ${val} 条`);
        //     this.currentRow = val;
        // },
        // handleCurrentChange(val) {
        //     console.log(`当前页: ${val}`);
        // },
        handleCurrentChange(val){
            console.log(`每页 ${val} 条`);
            this.num = (val-1)*10
            console.log(this.num)
            axios.get('https://elm.cangdu.org/v1/users/list?offset='+this.num+'&limit=20').then((res)=>{
                console.log(res.data);
                this.tableData = res.data
                // console.log(this.data)
            })
        }
    },
    mounted(){
        axios.get('https://elm.cangdu.org/v1/users/list?offset=0&limit=20').then((res)=>{
            console.log(res.data);
            this.tableData = res.data
            // console.log(this.data)
        })
    }
};
</script>

<style>
.user{
    position: relative;
    top:-520px;
    left:200px;
    height:540px;
    overflow: auto;
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
