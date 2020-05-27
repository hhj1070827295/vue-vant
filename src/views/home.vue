<template>
  <div class="app-container">
    <!-- <div @click="$router.push('/home-children/detail')">首页</div> -->
    <van-image fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    {{token}}{{name}}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getRegProtocol } from "@/api";

export default {
  name: "Home",
  data() {
    return {
      loginName: "18650310457",
      password: "qaz123456"
    };
  },
  computed: {
    ...mapGetters(["token", "name"])
  },
  created() {
    this.getRegProtocol();
  },
  methods: {
    getRegProtocol() {
      getRegProtocol()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    
  }
};
</script>

<style lang="scss">
</style>
