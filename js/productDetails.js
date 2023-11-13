import { productsTitles, leddarVisionTitles } from './variables.js'
const pD_buttons = document.querySelectorAll('.pD_button')
const pD_mainContainer = document.querySelector('.pD_mainContainer')
const pDVideos = document.querySelectorAll('.pD_video')
const pDVideo1 = document.querySelector('#pDVideo1')
const urlParams = new URLSearchParams(window.location.search)
const selected = urlParams.get('selected')
const play = document.querySelector('.fa-circle-play')

let index = 0
let prevIndex = null
pD_buttons.forEach((e, i) => {
	if (window.htmlType === 'A') {
		e.textContent = leddarVisionTitles[i]
	} else {
		e.textContent = productsTitles[i]
	}
})

if (play) {
	play.addEventListener('click', () => {
		pDVideo1.play()
		play.style.opacity = 0
		play.style.pointerEvents = 'none'
		pDVideo1.controls = 'true'
	})
}

// if (selected) {
// 	pD_buttons.forEach((e) => {
// 		e.style.borderBottom = '0.2em solid hsla(360, 100%, 100%, 0.7)'
// 		pD_mainContainer.innerHTML = ''
// 	})
// 	pD_buttons[1].style.borderBottom = '0.5em solid white'
// 	const image = document.createElement('img')
// 	image.src = pD_buttons[1].dataset.source
// 	image.classList.add('pD_image')
// 	pD_mainContainer.appendChild(image)
// }

pD_buttons.forEach((buttonElement, i) => {
	const videoElement = document.querySelector(`.pD_video[data-index="${i}"]`)

	buttonElement.dataset.videoElement = i // Store the index of the associated video element

	const allVideoElements = document.querySelectorAll('.pD_video')

	buttonElement.addEventListener('click', (e) => {
		const videoIndex = e.target.dataset.videoElement

		const childrenArray = Array.from(pD_mainContainer.children)

		childrenArray.forEach((element) => {
			element.classList.add('invisible')
		})

		childrenArray[parseInt(e.target.dataset.button)].classList.remove(
			'invisible'
		)
		allVideoElements.forEach((videoElement) => {
			videoElement.pause()
		})
		const selectedVideoElement = document.querySelector(
			`.pD_video[data-index="${videoIndex}"]`
		)

		if (selectedVideoElement) {
			selectedVideoElement.play()
			selectedVideoElement.controls = true
		}
		pD_buttons.forEach((e) => {
			e.style.borderBottom = '0.2em solid hsla(360, 100%, 100%, 0.7)'
		})

		e.currentTarget.style.borderBottom = '0.5em solid white'
	})
})
