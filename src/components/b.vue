<template>
<dir>
    <el-container style="height: 600px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
                <el-submenu>
                    <template slot="title"><i class="el-icon-message"></i>首页</template>
                </el-submenu>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>数据管理</template>
                    <el-menu-item-group>
                        <!-- <template slot="title">分组一</template> -->
                        <el-menu-item index="1-1" @click="userlist">用户列表</el-menu-item>
                        <el-menu-item index="1-2" @click="shoplist">商家列表</el-menu-item>
                        <el-menu-item index="1-3" @click="foodlist">食品列表</el-menu-item>
                        <el-menu-item index="1-4" @click="orderlist">订单列表</el-menu-item>
                        <el-menu-item index="1-5" @click="adminlist">管理员列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>添加数据</template>
                    <el-menu-item-group>
                        <!-- <template slot="title">分组一</template> -->
                        <el-menu-item index="2-1">添加商铺</el-menu-item>
                        <el-menu-item index="2-2">添加商品</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>图表</template>
                    <el-menu-item-group>
                        <el-menu-item index="3-1">用户分布</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-setting"></i>编辑</template>
                    <el-menu-item-group>
                        <el-menu-item>文本编辑</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title"><i class="el-icon-setting"></i>设置</template>
                    <el-menu-item-group>
                        <el-menu-item>管理员设置</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title"><i class="el-icon-setting"></i>说明</template>
                    <el-menu-item-group>
                        <el-menu-item>说明</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
        </el-menu>
    </el-aside>
    <el-container style="height: 600px;  border: 1px solid #eee">
        <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown"></el-dropdown-menu>
            </el-dropdown>
            <span>首页</span>
        </el-header>
    </el-container>
</el-container>
 <div>
     <router-view/>
 </div>
</dir>
</template>

<script>
export default {
     data() {
      const item = {
        
      };
      
      return {
        // tableData: Array(20).fill(item)
      }
    },
    methods:{
        userlist(){
            this.$router.push({path:"/userlist"})
        },
        shoplist(){
            this.$router.push({path:"/shoplist"})
        },
        foodlist(){
            this.$router.push({path:"/foodlist"})
        },
        orderlist(){
            this.$router.push({path:"/orderlist"})
        },
        adminlist(){
            this.$router.push({path:"/adminlist"})
        }
    }
}
</script>

<style>
   /* .el-container{
       position: relative;
   }
   */
  .el-aside {
    color: #333;
    
  }
</style>
