<template>
  <div>
    <keep-alive>
      <transition :name="transitionName">
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </transition>
    </keep-alive>
    <transition :name="transitionName">
      <router-view  v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "HomeChild",
  data() {
    return {
      transitionName: "slide-right" //初始过渡动画方向
    };
  }
};
</script>

<style>
</style>