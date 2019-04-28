<template>
  <div class="user">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="收货地址">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address}}</span>
            </el-form-item>
            <el-form-item label="店铺名称">
              <span>{{ props.row.rating }}</span>
            </el-form-item>
            <el-form-item label="店铺ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="餐馆名称">
              <span>{{ props.row.status }}</span>
            </el-form-item>
            <el-form-item label="餐馆ID">
              <span>{{ props.row.address_id }}</span>
            </el-form-item>
            
          </el-form>
        </template>
    </el-table-column>
      
      <el-table-column
        prop="unique_id"
        label="订单ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="total_amount"
        label="总价格"
        width="180">
      </el-table-column>
      <el-table-column
        prop="status_bar.title"
        label="订单状态">
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
        axios.get('https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined').then((res)=>{
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
