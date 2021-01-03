<template>
<div class="login-wrap">
  <div class="login">
    <div class="login-form">
      <div class="login-form-item">
        <el-input el-input v-model="userInfo.name" type="password" placeholder="username"></el-input>
      </div>
      <div class="login-form-item">
        <el-input v-model="userInfo.password" type="password" placeholder="password"></el-input>
      </div>

      <div class="login-form-operation">
        <a class="register" href="javascript:;" @click="$router.replace('/register')">Register now</a>
        <el-button plain type="primary" class="operation" @click="onSubmit">CHECK IN</el-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
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
      let res = await login({ ...this.userInfo })
      console.log('结果: ', res)
      if(!res || res.code !== 200) return
      res.message && this.$message({ type: 'success', message: res.message })
      this.$router.replace('/home')
    }
  }
};
</script>

<style lang="less" scoped>
.demo-form-inline {
  width: 46.25rem;
}
.login-wrap {
  min-width: 100vw;
  min-height: 100vh;
  color: #aed4d6;
  background-color: #05080d;
}
.login {
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    .login-form-item {
      display: inline-block;
      &:nth-child(2) {
        margin-left: 1.5rem;
      }
    }
    .login-form-operation {
      margin-top: 10rem;
      .register {
        display: block;
        color: #a5a5a5;
      }
      .operation {
        margin-top: 5px;
      }

    }
  }
}
.empty {
  margin: 6rem;
}

@media screen and (max-width: 515px) {
  .login-form-item:nth-child(2) {
    margin-left: 0!important;
    margin-top: 10px!important;
  }
}
</style>
