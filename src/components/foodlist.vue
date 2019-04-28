<template>
  <div class="user">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="食品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="食品ID">
              <span>{{ props.row.category_id }}</span>
            </el-form-item>
            <el-form-item label="食品介绍">
              <span>{{ props.row.address}}</span>
            </el-form-item>
            <el-form-item label="食品评分">
              <span>{{ props.row.rating }}</span>
            </el-form-item>
            <el-form-item label="月销量">
              <span>{{ props.row.month_sales }}</span>
            </el-form-item>
            <el-form-item label="餐馆名称">
              <span>{{ props.row.status }}</span>
            </el-form-item>
            <el-form-item label="餐馆ID">
              <span>{{ props.row.restaurant_id }}</span>
            </el-form-item>
            <el-form-item label="餐馆地址">
              <span>{{ props.row.pinyin_name }}</span>
            </el-form-item>
            <el-form-item label="食品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
          </el-form>
        </template>
    </el-table-column>
     
      <el-table-column
        prop="name"
        label="食品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="食品介绍"
        width="180">
      </el-table-column>
      <el-table-column
        prop="rating"
        label="评分">
      </el-table-column>
      <el-table-column label="操作">
          <template slot-scope="scope" style="margin-right:200px">
            <el-button>编辑</el-button>
          
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
        axios.get('https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined').then((res)=>{
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


</style>
