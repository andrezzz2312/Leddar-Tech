const warningText = document.querySelector('.warningText')
const warning = document.querySelector('.warning')
const blurBg = document.querySelector('.blurBg')
const modal = document.querySelector('.modal')

window.addEventListener('DOMContentLoaded', function () {
	if (window.matchMedia('(max-width: 650px)').matches) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			blurBg.style.opacity = '1'
			modal.style.opacity = '1'
			warning.style.zIndex = '300'
			blurBg.style.zIndex = '300'
		}
	}
})
window.addEventListener('resize', function () {
	if (window.matchMedia('(max-width: 650px)').matches) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			blurBg.style.opacity = '1'
			modal.style.opacity = '1'
			warning.style.zIndex = '300'
			blurBg.style.zIndex = '300'
		}
	} else {
		if (window.matchMedia('(orientation: landscape)').matches) {
			warning.style.opacity = '0'
			blurBg.style.opacity = '0'
			modal.style.opacity = '0'
			warning.style.zIndex = '-100'
			blurBg.style.zIndex = '-100'
			window.scrollTo(0, document.body.scrollHeight)
		}
	}
})
