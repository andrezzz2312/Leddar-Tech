const warningText = document.querySelector('.warningText')
const warning = document.querySelector('.warning')
const blurBg = document.querySelector('.blurBg')

window.addEventListener('DOMContentLoaded', function () {
	setFontSizes()
	if (window.matchMedia('(max-width: 520px)').matches) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			blurBg.style.opacity = '1'
			warning.style.zIndex = '300'
			blurBg.style.zIndex = '300'
		}
	}
})
window.addEventListener('resize', function () {
	console.log('watafaaak')
	if (window.matchMedia('(max-width: 520px)').matches) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			blurBg.style.opacity = '1'
			warning.style.zIndex = '300'
			blurBg.style.zIndex = '300'
		}
	} else {
		if (window.matchMedia('(orientation: landscape)').matches) {
			warning.style.opacity = '0'
			blurBg.style.opacity = '0'
			warning.style.zIndex = '-100'
			blurBg.style.zIndex = '-100'
			window.scrollTo(0, document.body.scrollHeight)
		}
	}
})