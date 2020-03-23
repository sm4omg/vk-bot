	const { VK } = require('vk-io');
	const vk = new VK({
	    token: ' ' // Токен страницы
	}); 

	// VK.COM/SM4OMG //
	setInterval(function () {
	    vk.api.account.setOnline()
	}, 3000)

	changeStatus()

	setInterval(changeStatus, 60000)

	function changeStatus() {
	vk.api.status.set({ text: '💡 AutoOnline by SM4OMG'})
	}
