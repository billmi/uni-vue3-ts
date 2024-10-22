<template>
	<view class='tabbar'>
		<view :class="{
			'tab' : true,'active': item.pagePath == cureentPage ? true : false
		}" v-for="(item,index) in tabList" :key="index" :data-index="item.pagePath" @tap="changeTab(item.pagePath)">
			<image :src="item.pagePath == cureentPage ? item.selectedIconPath : item.iconPath  "></image>
			<view class='text'>{{item.text}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tab-bar",
		props: {
			cureentPage: {
				type: String,
				default: 'index'
			}
		},
		data() {
			return {
				currIndex: 'index',
				tabList: [{
						"pagePath": "index",
						"pageRoute": "/pages/index/index",
						"iconPath": "/static/tabbar/home.png",
						"selectedIconPath": "/static/tabbar/homeactive.png",
						"text": "首页"
					},
					{
						"pagePath": "uform",
						"pageRoute": "/pages/uform/index",
						"iconPath": "/static/tabbar/add.png",
						"selectedIconPath": "/static/tabbar/addactive.png",
						"text": "分类"
					},
					{
						"pagePath": "guanzhu",
						"pageRoute": "/pages/news/news",
						"iconPath": "/static/tabbar/guanzhu.png",
						"selectedIconPath": "/static/tabbar/guanzhuactive.png",
						"text": "关注"
					},
					{
						"pagePath": "my",
						"pageRoute": "/pages/my/my",
						"iconPath": "/static/tabbar/me.png",
						"selectedIconPath": "/static/tabbar/meactive.png",
						"text": "我的"
					}
				]
			}
		},
		methods: {
			// ...mapMutations('user', ['isLogin']),
			changeTab(pagePath) {
				this.tabList.forEach((item) => {
					if (pagePath == item.pagePath) {
						const _route = item.pageRoute
						console.log(_route)

						uni.navigateTo({
							url: _route
						})
					}
				})
			
				// this.tabList.forEach((item) => {
				// 	if (pagePath == item.pagePath) {
				// 		let _route = item.pageRoute
				// 		if ((pagePath == 'my') && !this.$store.getters['user/isLogin']) {
				// 			_route = '/pages/login/login'
				// 			uni.$showMsg('请先登录 !')
				// 			setTimeout(function() {
				// 				uni.redirectTo({
				// 					url: _route
				// 				})
				// 			}, 2000)
				// 			return
				// 		}
				// 		uni.reLaunch({
				// 			url: _route
				// 		})
				// 		return
				// 	}
				// })
			}
		},
		computed: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.tabbar {
		background-color: #FFFFFF;
		z-index: 9999;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 120rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.tab {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		&.active {
			.text {
				font-size: 24rpx;
				font-weight: bold;
				margin-bottom: 2rpx;
				color: #00BCD4;
			}
		}
	}

	image {
		width: 40rpx;
		height: 40rpx;
	}

	.text {
		font-size: 24rpx;
		font-weight: bold;
		margin-bottom: 2rpx;
	}
</style>