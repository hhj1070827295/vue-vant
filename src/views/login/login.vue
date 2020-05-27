<template>
  <div>
    <van-cell-group>
      <van-field v-model="loginName" label="账号" placeholder="请输入用户名" />
      <van-field v-model="password" label="密码" placeholder="请输入密码" />
    </van-cell-group>
    <van-button @click="onLogin" size="small">登陆</van-button>
  </div>
</template>

<script>
import {setToken } from '@/utils/auth'
export default {
  name: "Login",
  data() {
    return {};
  },
  methods:{
    onLogin() {
      let form = { mobile: this.loginName.trim(), opwd: this.password };
      console.log(form);
      let token ='xkhhashdshdhkl'
      setToken(token)
      this.$router.push('/')
    }
  }
};
</script>

<style>
</style>
