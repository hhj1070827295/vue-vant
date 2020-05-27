<template>
  <div class="app-container">
    <van-nav-bar
      title="详情页"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="$router.back()"
    />详情页
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getRegProtocol } from "@/api";
export default {
  name: "Detail",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["token", "name"])
  },
  activated() {
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
    }
  }
};
</script>

<style>
</style>
