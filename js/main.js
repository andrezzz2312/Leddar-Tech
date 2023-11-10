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
const loop = document.querySelector('#loopVideo')
const loopContainer = document.querySelector('#loop')
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
const expand = document.querySelector('#expand')
const contract = document.querySelector('#contract')
const close = document.querySelector('#close')
const alertdiv = document.querySelector('.alertdiv')
const modalalert = document.querySelector('.modalalert')
const quality = document.querySelector('#quality_button')
const mainMenuB = document.querySelectorAll('.mainMenuB')
const userAgent = navigator.userAgent
let details = navigator.userAgent
let regexp = /android|iphone|kindle|ipad/i
let ios = /iphone|ipad/i
// let macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i
let isMobileDevice = regexp.test(details)
let isIOS = ios.test(details)
const urlParams = new URLSearchParams(window.location.search)
const selected = urlParams.get('selected')
// let isMac = macosPlatforms.test(details)

loop.src = `./assets/homeScreen.png?t=` + new Date()

function checkBrowser() {
	if (
		(navigator.userAgent.indexOf('Opera') ||
			navigator.userAgent.indexOf('OPR')) != -1
	) {
		return 'Opera'
	} else if (navigator.userAgent.indexOf('Edg') != -1) {
		return 'Edge'
	} else if (navigator.userAgent.indexOf('Chrome') != -1) {
		return 'Chrome'
	} else if (navigator.userAgent.indexOf('Safari') != -1) {
		return 'Safari'
	} else if (navigator.userAgent.indexOf('Firefox') != -1) {
		return 'Firefox'
	} else if (
		navigator.userAgent.indexOf('MSIE') != -1 ||
		!!document.documentMode == true
	) {
		//IF IE > 10
		return 'IE'
	} else {
		return 'unknown'
	}
}

const buttons = document.querySelectorAll('.mainMenuB')
var buttonsText = []
buttons.forEach((e, i) => {
	const splitText = e.textContent.trim().split(' ')
	splitText[1]
		? (buttonsText[i] = splitText[0].toLowerCase() + splitText[1].substr(0, 1))
		: (buttonsText[i] = splitText[0].toLowerCase())
})

const buttonContent = [
	{
		textLeft: '8%',
		textTop: '10%',
		title: mainMenuB[0].innerText + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
		content: [
			'Toolless',
			'Supported by scales,\npointers and quick release\nhandles',
			'HMI guides user through\nnumbered changeover\npoints',
			'With interactive guides',
			'Live sensor maps',
			'Advanced maintenance features',
			'Complete in under 4 min by trained technician',
		],
		src: buttonsText[0],
	},

	{
		textLeft: '8%',
		textBottom: '12%',
		title: mainMenuB[1].innerText + '&nbsp;',
		content: ['Sensors detect:', 'Fail to apply', 'Fail to cut', 'Low Tape'],

		src: buttonsText[1],
	},

	{
		textRight: '8%',
		textTop: '8%',
		title:
			mainMenuB[2].innerText +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
		content: [
			'For presealed or open cases',
			'Eliminates need for bypass conveyors',
		],

		src: buttonsText[2],
	},
	// {
	// 	textLeft: '5%',
	// 	textTop: '5%',
	// 	title:
	// 		mainMenuB[3].innerText +
	// 		'&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp',
	// 	content: [
	// 		'Also available for hot melt glue',
	// 		'Additional compression wheels provide secure glue bond through regulatable pressure',
	// 	],

	// 	src: buttonsText[3],
	// 	video: [buttonsText[3], 2],
	// },
	// {
	// 	textRight: '10%',
	// 	textBottom: '20%',
	// 	title:
	// 		mainMenuB[4].innerText +
	// 		'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
	// 	content: [
	// 		'Steady and even case transfer using:',
	// 		'Synchronous compensating side belts',
	// 		'Squaring wheels',
	// 	],

	// 	src: buttonsText[4],
	// },
	// {
	// 	textLeft: '8%',
	// 	textBottom: '8%',
	// 	title: mainMenuB[5].innerText + '&nbsp;&nbsp;',
	// 	content: [
	// 		'Metering stop creates\ngaps between cases',
	// 		'Removes need for infeed conveyor speed adjustments',
	// 	],

	// 	src: buttonsText[5],
	// },
	// {
	// 	textLeft: '5%',
	// 	textTop: '5%',
	// 	title: mainMenuB[6].innerText + '&nbsp;&nbsp;',
	// 	content: ['Machine is capable of top and/or bottom case sealing'],

	// 	src: buttonsText[6],
	// },
]

// Display fullscreen button
if (!isMobileDevice) {
	fullscreen_button.style.display = 'none'
} else {
	if (isIOS) {
		fullscreen_button.style.display = 'none'
	}
}

// Set which videos are going to swap
function InterpolateVideo(videoToPause, videoToVanish, videoToPlay) {
	videoToPause.pause()
	videoToVanish.classList.add('short-vanish')
	videoToPlay.style.opacity = 1
	setTimeout(() => {
		videoToPlay.play()
	}, 250)
}

// loop.currentTime = 60
// Vanish/show the main buttons and svgs
function HideShowMainButtons() {
	mainButtons.classList.toggle('show')
	mainButtons.classList.toggle('disabled')
	mainButtons.classList.toggle('short-vanish')
}

// Vanish/show when a main button is pressed
function HideShowCont() {
	showCont.classList.remove('hidden')
	showCont.classList.toggle('short-vanish')
	showCont.classList.toggle('show')
}

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

// Create the video tags storaged in videoContainer div
function createMedia(source1) {
	if (source1) {
		video1 = document.createElement('video')
		video1.src = source1
		video1.muted = true
		video1.setAttribute('playsinline', 'playsinline')
		// video1.controls = false
		video1.autoplay = true
		video1.classList.add('video')
		video1.style.opacity = 0
		video1.pause()
		// loopContainer.appendChild(video1)
		video1Container.appendChild(video1)
	}

	// if (source2) {
	// 	video2 = document.createElement('video')
	// 	video2.src = source2
	// 	video2.loop = true
	// 	video2.muted = true
	// 	video2.setAttribute('playsinline', 'playsinline')

	// 	video2.controls = false
	// 	video2.autoplay = true
	// 	video2.classList.add('video')
	// 	video2.style.opacity = 0
	// 	video2.pause()
	// 	// loopContainer.appendChild(video2)
	// 	video2Container.appendChild(video2)
	// }
	// if (source3) {
	// 	video3 = document.createElement('video')
	// 	video3.src = source3
	// 	video3.muted = true
	// 	video3.autoplay = true
	// 	video3.setAttribute('playsinline', 'playsinline')
	// 	video3.controls = false
	// 	video3.classList.add('video')
	// 	video3.style.opacity = 0
	// 	video3.pause()
	// 	// loopContainer.appendChild(video3)
	// 	video3Container.appendChild(video3)
	// }
}

// Create the content storaged in showCont div / Left and Top position of the container div, label title and content of the paragraph
function createContent(
	textLeft,
	textTop,
	textRight,
	textBottom,
	labelTitle,
	pContent,
	inputVideo
) {
	const centerContainerMade = document.createElement('div')
	centerContainerMade.classList.add('centerContainer')
	centerContainerMade.setAttribute('id', 'centerContainer_text')
	const textContainerMade = document.createElement('div')
	textContainerMade.classList.add('textContainer')
	textContainerMade.style.width = containVideoWidth + 'px'
	textContainerMade.style.height = containVideoHeight + 'px'

	textContent = document.createElement('div')

	textContent.classList.add('text')

	textContent.style.right = textRight
	textContent.style.top = textTop
	textContent.style.left = textLeft
	textContent.style.bottom = textBottom

	labelCont = document.createElement('div')
	labelCont.addEventListener('click', function (e) {
		labelCont.classList.add('checkers')
	})

	labelCont.classList.add('labelCont')

	label = document.createElement('label')
	label.classList.add('label')
	label.innerHTML = labelTitle

	textContent.appendChild(labelCont)
	labelCont.appendChild(label)

	fontvar = `calc(11px + (24 - 11) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`

	label.style.fontSize = fontvar

	if (pContent) {
		fontvar = `calc(8px + (20 - 8) * ((${
			containVideoWidth + 'px'
		} - 320px) / (1440 - 320)))`

		pCont = document.createElement('div')
		pCont.classList.add('pCont')

		setTimeout(() => {
			textContent.style.width = labelCont.offsetWidth + 'px'
		}, 300)

		list = document.createElement('ul')
		pContent.forEach((e) => {
			paragraph = document.createElement('li')
			paragraph.textContent = e
			paragraph.style.fontSize = fontvar
			list.appendChild(paragraph)
		})
		pCont.appendChild(list)
		textContent.appendChild(pCont)
	} else {
		labelCont.style.borderRadius = '0.8rem'
		label.style.marginRight = '0.8rem'
	}
	if (inputVideo) {
		console.log(inputVideo[0])
		for (let i = 0; i < inputVideo[1]; i++) {
			console.log(inputVideo)
			boxVideo[i] = document.createElement('video')
			boxVideo[i].src =
				'assets/' +
				inputVideo[0] +
				'/' +
				inputVideo[0] +
				'Video' +
				String(i + 1) +
				'.mp4'
			boxVideo[i].autoplay = true
			boxVideo[i].loop = true.muted = true
			boxVideo[i].setAttribute('playsinline', 'playsinline')
			// boxVideo[i].controls = false
			boxVideo[i].classList.add('boxVideo')
			list.appendChild(boxVideo[i])
		}
	}
	showCont.appendChild(textContent)

	showCont.appendChild(centerContainerMade)

	centerContainerMade.appendChild(textContainerMade)
	textContainerMade.appendChild(textContent)
}

// Create the svgs for the showCont div / 4 first parameters are the x and y points of the first and second point respectively, last 2 are the x and y points of the dot
function setFontSizes() {
	const test = document.querySelectorAll('.button')
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

function backButtonFunction() {
	ArreglarLineas()

	backButton.style.pointerEvents = 'none'
	InterpolateVideo(video2, video2, video3)
	HideShowCont()
	loop.style.zIndex = '-5'

	loop.currentTime = 0
	loop.pause()
	video3.addEventListener('ended', () => {
		video3.classList.add('short-vanish')
		loop.classList.remove('short-vanish')
		setTimeout(() => {
			loop.play()
		}, 500)

		HideShowMainButtons()
		setTimeout(() => {
			loop.style.zIndex = '-1'
			video1.remove()
			video2.remove()
			video3.remove()
			showCont.innerHTML = ''
		}, 500)
	})
}

function createBackButton() {
	const centerContainerMade = document.createElement('div')
	centerContainerMade.classList.add('centerContainer')
	centerContainerMade.setAttribute('id', 'centerContainer_backButton')
	const buttonContainerMade = document.createElement('div')
	buttonContainerMade.classList.add('buttonContainer')
	buttonContainerMade.style.width = containVideoWidth + 'px'
	buttonContainerMade.style.height = containVideoHeight + 'px'
	backButton = document.createElement('button')
	let fontvar = `calc(7px + (17 - 7) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	backButton.style.fontSize = fontvar
	backButton.classList.add('viewR_a')
	backButton.textContent = 'Back to Features'
	backButtonContainer = document.createElement('div')
	backButtonContainer.classList.add('viewR_container')
	showCont.appendChild(centerContainerMade)
	centerContainerMade.append(buttonContainerMade)
	buttonContainerMade.appendChild(backButtonContainer)
	backButtonContainer.appendChild(backButton)

	backButton.addEventListener('click', backButtonFunction)
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
	if (!mainButtons.classList.contains('disabled')) {
		mainButtons.classList.add('show')
	}
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

loop.addEventListener('load', () => {
	containVideoWidth = getImgSizeInfo(loop).width
	containVideoHeight = getImgSizeInfo(loop).height
	setFontSizes()
	ArreglarLineas()

	initial.classList.add('short-vanish')
	setTimeout(() => {
		initial.style.zIndex = '-200'
	}, 500)
})

window.addEventListener('DOMContentLoaded', function () {
	setFontSizes()
	if (window.matchMedia('(max-width: 520px)').matches) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			warning.style.zIndex = '300'
		}
	}
	if (selected === 'home') {
	} else {
		if (checkBrowser() === 'Safari') {
			alertdiv.style.display = 'flex'
		}
	}
	// function preloadImage(url) {
	// 	new Image().src = url
	// }
	// for (let i = 2; i < 8; i++) {
	// 	preloadImage(`./assets/productDetails/pDimage${i}.png`)
	// }

	setFontSizes()
})

window.addEventListener('resize', function () {
	if (loop.complete) {
		containVideoWidth = getImgSizeInfo(loop).width
		containVideoHeight = getImgSizeInfo(loop).height

		setFontSizes()

		if (!mainButtons.classList.contains('disabled')) {
			ArreglarLineas()
		}
	}
	if (window.matchMedia('(max-width: 520px)').matches) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			warning.style.zIndex = '300'
		}
	} else {
		if (window.matchMedia('(orientation: landscape)').matches) {
			warning.style.opacity = '0'
			warning.style.zIndex = '-100'
			window.scrollTo(0, document.body.scrollHeight)
		}
	}
})

////////// Event Listeners for the main buttons //////////

fullscreen_button.addEventListener('click', function (e) {
	expand.classList.toggle('disabledb')
	contract.classList.toggle('disabledb')

	if (!document.fullscreenElement) {
		mainContainer.webkitRequestFullscreen()
		mainContainer.webkitEnterFullscreen()
		mainContainer.requestFullscreen()
	} else {
		document.exitFullscreen()
		document.webkitExitFullscreen()
	}
})

function preloadImage(url) {
	var img = new Image()
	img.src = url
}

buttons.forEach((e, i) => {
	e.addEventListener('click', function (e) {
		HideShowMainButtons()
		createVideos(
			'assets/' + buttonContent[i].src + '/' + buttonContent[i].src + '1.mp4',
			'assets/' + buttonContent[i].src + '/' + buttonContent[i].src + '2.mp4',
			'assets/' + buttonContent[i].src + '/' + buttonContent[i].src + '3.mp4'
		)
		createContent(
			buttonContent[i].textLeft,
			buttonContent[i].textTop,
			buttonContent[i].textRight,
			buttonContent[i].textBottom,
			buttonContent[i].title,
			buttonContent[i].content,
			buttonContent[i].video
		)
		if (i === 1) {
			var first = document.querySelectorAll('.pCont ul li')
			first.forEach((e, i) => {
				var styleElem = e.appendChild(document.createElement('style'))
				styleElem.innerHTML = `li:first-child:before {content: '' !important; } ul li{margin-left: 1.5em;} li:first-child{margin-left:1em}`
			})
		}
		// if (i === 4) {
		// 	var first = document.querySelectorAll('.pCont ul li')
		// 	first.forEach((e, i) => {
		// 		var styleElem = e.appendChild(document.createElement('style'))
		// 		styleElem.innerHTML = `li:first-child:before {content: '' !important; } ul li{margin-left: 1.5em;} li:first-child{margin-left:1em}`
		// 	})
		// }

		// funcion para primer parrafo sin bullet y mas de 1 linea
		if (i === 4) {
			var first = document.querySelectorAll('.pCont ul li')
			first.forEach((e, i) => {
				var styleElem = e.appendChild(document.createElement('style'))
				styleElem.innerHTML = `li:first-child:before {content: '' !important; }  ul li:first-child{margin-left:0.6rem !important; text-indent: -0.3em; } `
			})
		}

		// if (i === 5) {
		// 	var first = document.querySelectorAll('.pCont ul li')
		// 	first.forEach((e, i) => {
		// 		var styleElem = e.appendChild(document.createElement('style'))
		// 		styleElem.innerHTML = `li:first-child:before {content: '' !important;}  ul li:first-child{margin-left:1rem !important; }`
		// 	})
		// }
		createBackButton()

		window.addEventListener('resize', function (e) {
			if (showCont.hasChildNodes()) {
				const textContainer = document.querySelector('#centerContainer_text')

				const backButtonContainer = document.querySelector(
					'#centerContainer_backButton'
				)
				textContainer.remove()

				backButtonContainer.remove()
				createContent(
					buttonContent[i].textLeft,
					buttonContent[i].textTop,
					buttonContent[i].textRight,
					buttonContent[i].textBottom,
					buttonContent[i].title,
					buttonContent[i].content,
					buttonContent[i].video
				)
				if (i === 1) {
					var first = document.querySelectorAll('.pCont ul li')
					first.forEach((e, i) => {
						var styleElem = e.appendChild(document.createElement('style'))
						styleElem.innerHTML = `li:first-child:before {content: '' !important; } ul li{margin-left: 1.5em;} li:first-child{margin-left:0.3rem}`
					})
				}
				if (i === 4) {
					var first = document.querySelectorAll('.pCont ul li')
					first.forEach((e, i) => {
						var styleElem = e.appendChild(document.createElement('style'))
						styleElem.innerHTML = `li:first-child:before {content: '' !important; }  ul li:first-child{margin-left:0.6rem !important; text-indent: -0.3em; } `
					})
				}
				// if (i === 5) {
				// 	var first = document.querySelectorAll('.pCont ul li')
				// 	first.forEach((e, i) => {
				// 		var styleElem = e.appendChild(document.createElement('style'))
				// 		styleElem.innerHTML = `li:first-child:before {content: '' !important;}  ul li:first-child{margin-left:1rem !important; }`
				// 	})
				// }
				animations()
				createBackButton()
			}
		})
		check1()

		let video1check = false
		let video2check = false
		let video3check = false
		function check1() {
			clearcheck = setInterval(repeatcheck, 600)
			function repeatcheck() {
				if (video1.readyState === 4) {
					video1check = true
				}
				if (video2.readyState === 4) {
					video2check = true
				}
				if (video3.readyState === 4) {
					video3check = true
				}
				setTimeout(() => {
					if (!video1check || !video2check || !video3check) {
						loader.style.zIndex = '200'
						loader.classList.add('show')
					}
				}, 3000)

				if (video1check && video2check && video3check) {
					loader.classList.remove('show')
					loader.classList.add('short-vanish')
					loader.style.zIndex = '-200'

					clearInterval(clearcheck)

					loop.classList.add('short-vanish')
					video1.style.opacity = 1
					setTimeout(() => {
						video1.play()
						video1.addEventListener('ended', () => {
							animations()
							InterpolateVideo(loop, video1, video2)
							HideShowCont()
						})
					}, 500)
				}
			}
		}
	})
})
