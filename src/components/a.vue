<template>
    <div class="box1">
        
       <div class="box1-1">
           <div class="zi">
              elm后台管理系统
           </div>
           <div class="kuang">
                <div><input type="text" placeholder="用户名" v-model="name"></div>
                <div><input type="text" placeholder="密码" v-model="psd"></div>
                <div><button @click="sub">登录</button></div>
                <div class="air">
                    <p>温馨提示</p>
                    <p>为登陆过的新用户,请自动注册</p>
                    <p>注册过的用户可凭账号密码登录</p>
                </div>
           </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            name:'',
            psd:''
        }
    },
    methods:{
        sub(){
            let data = {password:this.psd,user_name:this.name}
            console.log(data)
            axios.post('https://elm.cangdu.org/admin/login',data).then((res)=>{
                console.log(res)
            })
            this.$router.push('./userlist')
        }
    },
    
}
</script>

<style>
  @import "./a.css"


</style>
