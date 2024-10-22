const ReqBaseUrl = import.meta.env.VITE_APP_AXIOS_BASE_URL

const ShowToast = function(title = '', duration = 2000, icon = "none") {
	uni.showToast({
		title,
		duration,
		icon: 'none'
	})
}

export {
	ReqBaseUrl,
	ShowToast,
}