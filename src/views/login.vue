<template>
  <div class="login">
    <el-form :inline="true" :model="userInfo" class="demo-form-inline">
      <el-form-item label="">
        <el-input v-model="userInfo.name" type="password" placeholder="username"></el-input>
      </el-form-item>
      <span class="empty"></span>
      <el-form-item label="">
        <el-input v-model="userInfo.password" type="password" placeholder="password"></el-input>
      </el-form-item>
      <br>
      <el-form-item style="margin-top:6rem">
        <el-button plain type="primary" @click="onSubmit">CHECK IN</el-button>
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

<style lang="less" scoped>
.login {
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  color: #aed4d6;
  background-color: #05080d;
  /deep/ .el-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    .el-form-item__label {
      color: #aed4d6!important;
    }

    .el-button--primary.is-plain {
      &:hover,
      &:active,
      &:focus {
        background: unset;
        border-color: unset;
        background: #10ff00;
        border-color: #10ff00;
      }
    }

  }
}
.empty {
  margin: 6rem;
}
</style>
