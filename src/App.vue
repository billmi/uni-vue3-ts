<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style lang="scss">

@import "colorui/main.css";
@import "colorui/icon.css";

@import 'vk-uview-ui/index.scss';


// 设置整个项目的背景色
page {
  background-color: #f5f5f5;
  padding-bottom: calc(var(--window-bottom) + 120rpx);
}
</style>
