<template>
    <view class="u-page">
        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-title text-pink"></text> 全屏限高轮播
            </view>
            <view class="action">
                <switch @change="DotStyle" :class="dotStyle ? 'checked' : ''" :checked="dotStyle ? true : false">
                </switch>
            </view>
        </view>
        <swiper class="screen-swiper" :class="dotStyle ? 'square-dot' : 'round-dot'" :indicator-dots="true"
            :circular="true" :autoplay="true" interval="5000" duration="500">
            <swiper-item v-for="(item, index) in swiperList" :key="index">
                <image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>
                <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover"
                    v-if="item.type == 'video'"></video>
            </swiper-item>
        </swiper>
        <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
                <text class="cuIcon-title text-orange "></text> 宫格列表
            </view>
            <view class="action">
                <button class="cu-btn bg-green shadow" @tap="showModal" data-target="gridModal">设置</button>
            </view>
        </view>
        <view class="cu-bar bg-white solid-bottom">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>按钮形状
            </view>
            <view class="action">
                <navigator class="action" url="design" hover-class="none">
                    <text class="cuIcon-skinfill"></text>
                    <text class="text-df">设计</text>
                </navigator>
            </view>
        </view>

        <view class="padding flex flex-direction">
            <button class="cu-btn bg-grey lg" @tap="touchOne">{{ touch.msg }}</button>
        </view>

        <view class="padding-xl" @tap="UserInfo">
            <button class="cu-btn block bg-blue margin-tb-sm lg">
                <text class="cuIcon-loading2 cuIconfont-spin"></text>
                个人信息</button>
        </view>
        <view class="padding-xl" @tap="GetUser">
            <button class="cu-btn block bg-blue margin-tb-sm lg">
                <text class="cuIcon-loading2 cuIconfont-spin"></text>
                查看设置</button>
        </view>
    </view>
    <view>
        <uni-card title="基础卡片" :isFull="true" sub-title="副标题" extra="额外信息">
            <text>这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>
        </uni-card>
    </view>
    <TabBar :cureentPage="paegIndex" />
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import TabBar from '@/components/tab-bar/tab-bar.vue'
import headerImg from "@/static/images/header.jpg"
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import { SendGetRequest } from '@/api/request'
import { TestReqUrl } from '@/api/api'
import { storeToRefs } from 'pinia'
import { custStore } from '@/store'

const store = custStore()

const { age, name } = storeToRefs(store)

onPullDownRefresh(() => {
    console.log("1")
    setTimeout(() => {
        uni.stopPullDownRefresh();
        console.log("stop")
    }, 10000)
})

onReachBottom(() => {
    console.log("reach !")
    alert(1234)
})

computed(() => {
    console.log("computed...")
});


const swiperList = reactive([{
    id: 0,
    type: 'image',
    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
}, {
    id: 1,
    type: 'image',
    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
}, {
    id: 2,
    type: 'image',
    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
}, {
    id: 3,
    type: 'image',
    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
}, {
    id: 4,
    type: 'image',
    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
}, {
    id: 5,
    type: 'image',
    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
}, {
    id: 6,
    type: 'image',
    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
}])

const paegIndex = ref("my")

const header = ref(headerImg)

const text = ref("无头像")

const form = reactive({
    name: "222"
})

const touch = reactive({
    msg: "touch ..."
})

const touchOne = () => {
    SendGetRequest(TestReqUrl).then((res: any) => {
        console.log(res)
        console.log("finished !")
    })
}

const UserInfo = () => {
    store.saveUserInfo("测试", 200)
    // console.log(store.$state.age)
    // console.log(store.$state.name)
    console.log("ok !")
}

const GetUser = () => {
    console.log(store.name)
}

const bindClick = () => {
    console.log("bindClick")
}

</script>

<style scoped></style>