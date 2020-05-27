<template>
  <div class="app-container">
      <van-button size="small" @click='logout'>退出登录</van-button>
  </div>
</template>

<script>
import {removeToken } from '@/utils/auth'
export default {
  name:"setting",
  data(){
    return{

    }
  },
  methods:{
    logout(){
      removeToken()
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
