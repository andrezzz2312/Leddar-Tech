// Variables
let videoloop = ''
let video1 = ''
let video2 = ''
let video3 = ''
let textContent = ''
let label = ''
let labelCont = ''
let paragraph = ''
let span = ''
let line = ''
let svg1 = ''
let circle = ''
let backButton = ''
let boxVideo = []
let backButtonContainer = ''
let containVideoWidth = ''
let containVideoHeight = ''
let video1check = false
let video2check = false
let video3check = false
let pCont = ''
let list = ''
let x = window.matchMedia('(max-height: 550px)')
const img = document.querySelector('#img1')

const video1Container = document.querySelector('#video1')
const video2Container = document.querySelector('#video2')
const video3Container = document.querySelector('#video3')
const videoHolder = document.querySelector('#videoHolder')
const mainButtons = document.querySelector('#mainButtons')
const showCont = document.querySelector('#showCont')
const svgContainer = document.querySelectorAll('.svgContainer')
const buttonContainer = document.querySelectorAll('.buttonContainer')
const mainContainer = document.querySelector('.container')
const loader = document.querySelector('.loader')
const viewR_button = document.querySelector('#viewR_button')
const initial = document.querySelector('.initial')
// const warningText = document.querySelector('.warningText')
// const warning = document.querySelector('.warning')
// const blurBg = document.querySelector('.blurBg')
const expand = document.querySelector('#expand')
const contract = document.querySelector('#contract')
const close = document.querySelector('#close')
const alertdiv = document.querySelector('.alertdiv')
const modalalert = document.querySelector('.modalalert')
const quality = document.querySelector('#quality_button')
const mainMenuB = document.querySelectorAll('.mainMenuB')

let details = navigator.userAgent
let regexp = /android|iphone|kindle|ipad/i
let ios = /iphone|ipad/i
let macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i
let isMobileDevice = regexp.test(details)
let isIOS = ios.test(details)
let isMac = macosPlatforms.test(details)
const buttons = document.querySelectorAll('.mainMenuB')
var buttonsText = []
buttons.forEach((e, i) => {
	const splitText = e.textContent.trim().split(' ')
	splitText[1]
		? (buttonsText[i] = splitText[0].toLowerCase() + splitText[1].substr(0, 1))
		: (buttonsText[i] = splitText[0].toLowerCase())
})
img.src = './assets/sensorAgnostics/button1/graphic3.png'
// Set animations for the buttons
function animations() {
	if (labelCont) {
		labelCont.style.animation =
			'growtall 0.5s cubic-bezier(0.86, 0.01, 0.77, 0.18) forwards '
		label.style.animation = 'fadein 0.5s ease-in-out forwards'
		labelCont.style.animationDelay = '0.5s'
		label.style.animationDelay = '1s'
	}
	if (pCont) {
		pCont.style.animation =
			'grow 0.5s cubic-bezier(0.86, 0.01, 0.77, 0.18) forwards'
		pCont.style.animationDelay = '1s'
		list.style.animation = 'fadein 0.5s ease-in-out forwards'
		list.style.animationDelay = '1.5s'
	}

	if (boxVideo) {
		boxVideo.forEach((element, i) => {
			boxVideo[i].style.animation =
				'growVideo 0.5s cubic-bezier(0.86, 0.01, 0.77, 0.18) forwards '
			boxVideo[i].style.animationDelay = '1.8s'
		})
	}
}

function setFontSizes() {
	const test = document.querySelectorAll('.sA_button')
	const circleTest = document.querySelectorAll('.circleButton')

	let fontvar = `calc(7px + (27 - 7) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`

	for (let i = 0; i < test.length; i++) {
		test[i].style.fontSize = fontvar
	}
	for (let i = 0; i < circleTest.length; i++) {
		circleTest[i].style.fontSize = fontvar
	}
}

function ArreglarLineas() {
	for (let i = 0; i < svgContainer.length; i++) {
		svgContainer[i].style.width = containVideoWidth + 'px'
		svgContainer[i].style.height = containVideoHeight + 'px'
	}
	for (let i = 0; i < buttonContainer.length; i++) {
		buttonContainer[i].style.width = containVideoWidth + 'px'
		buttonContainer[i].style.height = containVideoHeight + 'px'
	}
	// mainButtons.style.opacity = '0'
}

function getRenderedSize(contains, cWidth, cHeight, width, height, pos) {
	var oRatio = width / height,
		cRatio = cWidth / cHeight

	return function () {
		if (contains ? oRatio > cRatio : oRatio < cRatio) {
			this.width = cWidth
			this.height = cWidth / oRatio
		} else {
			this.width = cHeight * oRatio
			this.height = cHeight
		}
		this.left = (cWidth - this.width) * (pos / 100)
		this.right = this.width + this.left
		return this
	}.call({})
}

function getImgSizeInfo(img) {
	var pos = window
		.getComputedStyle(img)
		.getPropertyValue('object-position')
		.split(' ')

	return getRenderedSize(
		true,
		img.offsetWidth,
		img.offsetHeight,
		img.naturalWidth,
		img.naturalHeight,
		parseInt(pos[0])
	)
}
if (img.complete) {
	// alert('epic')
	setFontSizes()

	containVideoWidth = getImgSizeInfo(img).width

	containVideoHeight = getImgSizeInfo(img).height
	ArreglarLineas()

	initial.classList.add('short-vanish')
	setTimeout(() => {
		initial.style.zIndex = '-200'
	}, 500)
}

const sA_videoContainer = document.querySelectorAll('#img')
window.addEventListener('DOMContentLoaded', function () {
	setFontSizes()

	function pptxLoop() {
		setTimeout(() => {
			sA_videoContainer[2].style.opacity = 0
			console.log('ooookay')
			setTimeout(() => {
				sA_videoContainer[1].style.opacity = 0
				setTimeout(() => {
					sA_videoContainer[1].style.opacity = 1
					sA_videoContainer[2].style.opacity = 1
					pptxLoop()
				}, 15000)
			}, 3000)
		}, 3000)
	}
	pptxLoop()
})

window.addEventListener('resize', function () {
	if (img.complete) {
		containVideoWidth = getImgSizeInfo(img).width
		containVideoHeight = getImgSizeInfo(img).height

		setFontSizes()
		ArreglarLineas()
	}
})

close.addEventListener('click', function (e) {
	modalalert.style.pointerEvents = 'none'
	modalalert.style.transform = 'scale(0)'
	alertdiv.style.opacity = 0
	alertdiv.style.pointerEvents = 'none'
})
