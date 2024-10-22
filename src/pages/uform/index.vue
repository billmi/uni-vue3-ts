<template>
    
    <view>
        <view>
            vForm
        </view>
        <TabBar :cureentPage="paegIndex"/>
    </view>
</template>

<script lang="ts" setup>
import {ref} from "vue"
import TabBar from "@/components/tab-bar/tab-bar.vue"

const paegIndex = ref("uform")

</script>

<style scoped>

</style>