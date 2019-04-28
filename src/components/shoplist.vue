<template>
  <div class="user">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="店铺名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="店铺介绍">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="联系电话">
              <span>{{ props.row.phone}}</span>
            </el-form-item>
            <el-form-item label="销售量">
              <span>{{ props.row.recent_order_num }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="店铺ID">
              <span>{{ props.row.status }}</span>
            </el-form-item>
            <el-form-item label="评分">
              <span>{{ props.row.rating }}</span>
            </el-form-item>
            <el-form-item label="分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
          </el-form>
        </template>
    </el-table-column>
      <el-table-column
          prop="name"
          label="店铺名称"
          width="100">
      </el-table-column>
      <el-table-column
          prop="address"
          label="店铺地址"
          width="100">
      </el-table-column>
      <el-table-column
          prop="description"
          label="店铺介绍">
      </el-table-column>
      <el-table-column label="操作" >
          <template slot-scope="scope" style="margin-right:200px">
            <el-button>编辑</el-button>
            <el-button>添加食品</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
          
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
        axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20').then((res)=>{
            console.log(res.data);
            this.tableData = res.data
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
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-table-column .cao{
  float: right;
  margin-right: 200px;
}
</style>
