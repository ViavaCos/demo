<template>
<div class="register-wrap">
    <div class="register-form">
      <div class="register-form-item nickname">
        <el-input el-input v-model="userInfo.nickname" type="text" placeholder="nickname"></el-input>
      </div>
      <div class="register-form-item">
        <el-input el-input v-model="userInfo.name" type="password" placeholder="username"></el-input>
      </div>
      <div class="register-form-item">
        <el-input v-model="userInfo.password" type="password" placeholder="password"></el-input>
      </div>

      <div class="register-form-operation">
        <a class="register" href="javascript:;" @click="$router.replace('/login')">Already has account?</a>
        <el-button plain type="primary" class="operation" @click="onSubmit">REGISTER</el-button>
      </div>
    </div>
</div>
</template>

<script>
import { register } from '../api/index'
export default {
  name: "Register",
  data() {
    return {
      userInfo: {
        nickname: '',
        name: "",
        password: ""
      }
    };
  },
  methods: {
    async onSubmit() {
        for (const key in this.userInfo) {
            if (!this.userInfo[key]) {
                this.$message({ type: 'warning', message: 'Register info cannot be empty.' })
                return
            }
        }

      let res = await register({ ...this.userInfo })
      console.log('结果: ', res)
      if(!res || res.code !== 200) return
      res.message && this.$message({ type: 'success', message: res.message })
      this.$router.replace('/login')
    }
  }
};
</script>

<style lang="less" scoped>
.register-wrap {
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  color: #aed4d6;
  background-color: #05080d;
  box-sizing: border-box;
}
.register-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 10px;
    // box-shadow: #0ff 1px 1px 26px 20px;
    background: #000;

    .register-form-item {
        display: inline-block;
        &:nth-child(3) {
        margin-left: 1.5rem;
        }
        &.nickname {
            margin: 0 30%;
            margin-bottom: 1rem;
        }
    }
    .register-form-operation {
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
.empty {
  margin: 6rem;
}

@media screen and (max-width: 515px) {
  .nickname {
    margin: unset!important;
    margin-bottom: 10px!important;
  }
  .register-form-item:nth-child(3) {
    margin-left: 0!important;
    margin-top: 10px!important;
  }
}
</style>
