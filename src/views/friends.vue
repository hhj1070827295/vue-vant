<template>
  <div class="app-container">
    朋友圈
    <van-button type="primary" @click="show=true">查看图片</van-button>
    <van-image-preview v-model="show" :images="images" @change="onChange">
      <template v-slot:index>第{{ index }}页</template>
    </van-image-preview>
  </div>
</template>

<script>
export default {
  name: "Friends",
  data() {
    return {
      show: false,
      index: 0,
      images: ["https://img.yzcdn.cn/3.jpg", "https://img.yzcdn.cn/2.jpg"]
    };
  },
  methods: {
    onChange(index) {
      this.index = index;
    }
  }
};
</script>

<style>
</style>