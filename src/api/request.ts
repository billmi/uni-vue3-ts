import {
	ReqBaseUrl,ShowToast
} from '@/api/global'

const SendPostRequest = function(url :string, data :string, option = {
	hideLoading: false,
	hideMsg: false
}) {
	let hideLoading = option.hideLoading || false // 是否显示 loading
	let hideMsg = option.hideMsg || false // 是否隐藏错误提示
	let token = '' // 登录鉴权获得的 token
	if (!hideLoading) {
		uni.showLoading({
			title: '加载中...',
			mask: true
		})
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: ReqBaseUrl + url,
			method: "POST", 
			data: data,
			// dataType:'json',
			success: res => { // 服务器成功返回的回调函数
				if (!hideLoading) uni.hideLoading()
				if (res.statusCode === 200) {
					let result = res.data
					resolve(result)
					return
					// reject(result.errmsg)
					// if (!hideMsg) ShowToast(result.errmsg)
				}
			},
			fail: (err) => { // 接口调用失败的回调函数
				if (!hideLoading) uni.hideLoading()
				if (err.errMsg != 'request:fail abort') {
					ShowToast('连接超时，请检查您的网络。')
					reject(err);
				}
			}
		})
	})
}

const SendGetRequest = function(url = '', option = {
	hideLoading: false,
	hideMsg: false
}) {
	let hideLoading = option.hideLoading || false // 是否显示 loading
	let hideMsg = option.hideMsg || false // 是否隐藏错误提示
	let token = '' // 登录鉴权获得的 token
	if (!hideLoading) {
		uni.showLoading({
			title: '加载中...',
			mask: true
		})
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: ReqBaseUrl + url,
			method: "GET", 
			// dataType:'json',
			success: res => { // 服务器成功返回的回调函数
				if (!hideLoading) uni.hideLoading()
				if (res.statusCode === 200) {
					let result = res.data
					resolve(result)
					return
					// reject(result.errmsg)
					// if (!hideMsg) ShowToast(result.errmsg)
				}
			},
			fail: (err) => { // 接口调用失败的回调函数
				if (!hideLoading) uni.hideLoading()
				if (err.errMsg != 'request:fail abort') {
					ShowToast('连接超时，请检查您的网络。')
					reject(err);
				}
			}
		})
	})
}

export {
	SendPostRequest,
	SendGetRequest
}