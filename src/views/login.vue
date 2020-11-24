<template>
  <div class="login">
    <h3>登录</h3>
    <el-form :inline="true" :model="userInfo" class="demo-form-inline">
        <el-form-item label="用户名">
            <el-input v-model="userInfo.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="userInfo.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
   data() {
      return {
        userInfo: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        axios.post('http://101.37.87.30:3000/login',{ ...this.userInfo })
      }
    }
}
</script>

<style scoped>

</style>
