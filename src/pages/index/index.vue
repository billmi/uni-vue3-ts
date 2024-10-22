<template>
  <view class="index-page">
    <!-- <Hello /> -->
    <UnoCss />
    <!-- <view>
      <u-button type="primary" shape="square" :ripple="true" @click.prevent="toView">调试表单页</u-button>
    </view> -->
    <text class="h2"> 查看其它页面示例↓ </text>
    <view>
      <navigator v-for="(v, idx) in pages" :key="idx" :url="v.url" style="height: 20px;">{{
        v.title
      }}</navigator>
    </view>
    <TabBar :cureentPage="paegIndex"/>
  </view>
</template>

<script setup lang="ts">
import { reactive,ref } from 'vue'
import Hello from '@/components/hello/index.vue'
import UnoCss from '@/components/unocss/index.vue'
import TabBar from '@/components/tab-bar/tab-bar.vue'
const paegIndex = ref("index")

const pages = reactive([
  {
    title: 'Pinia Demo',
    url: '/pages/pinia/index'
  },
  {
    title: 'UnoCSS Demo',
    url: '/pages/unocss/index'
  },
  {
    title: 'uView Demo',
    url: '/pages/uview/index'
  }
])
</script>

<style scoped>
.index-page {
  font-style: normal;
  text-align: center;
}
.h2 {
  color: green;
  font-size: 50rpx;
}
navigator {
  color: #1e80ff;
}
</style>
