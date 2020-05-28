<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
    </router-view>
    <van-tabbar v-model="active" route fixed v-if="showFooter">
      <van-tabbar-item name="home" icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="search" to="/search">搜索</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o" to="/friends">朋友圈</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o" to="/setting">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: "home"
    };
  },
  computed: {
    showFooter() {
      return this.$route.meta.showFooter;
    }
  },
  created() {
    console.log(this.$route);
    // this.calcRem() //如果是使用postremcss单位来进行转化就不需要这个函数饿了
  },
  methods:{
    calcRem() {
      var bodyWidth = document.getElementsByTagName("body")[0].clientWidth;
      var html = document.getElementsByTagName("html")[0];
      //自适应最大宽度限制，避免页面资源展示失真
      if (bodyWidth >= 750) {
        html.style.fontSize = 100 + "px";
        return;
      }
      var scale = bodyWidth / 750;
      html.style.fontSize = scale * 100 + "px";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}
</style>
