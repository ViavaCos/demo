<template>
  <div class="login">
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
import axios from "axios";
import { login } from '../api/index'
export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      let res = await login({
          ...this.userInfo
      })
      console.log('结果: ', res)
    }
  }
};
</script>

<style scoped>
.login {
  padding-top: 20px;
}
</style>
