const pD_buttons = document.querySelectorAll('.pD_button')
const pD_mainContainer = document.querySelector('.pD_mainContainer')
const pDVideos = document.querySelectorAll('.pD_video')
const pDVideo1 = document.querySelector('#pDVideo1')
const urlParams = new URLSearchParams(window.location.search)
const selected = urlParams.get('selected')
const play = document.querySelector('.fa-circle-play')

let index = 0
let prevIndex = null

play.addEventListener('click', () => {
	pDVideo1.play()
	play.style.opacity = 0
	play.style.pointerEvents = 'none'
	pDVideo1.controls = 'true'
})
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
		const videoElement = document.querySelector(
			`.pD_video[data-index="${videoIndex}"]`
		)
		prevIndex = index
		index = i
		console.log(pD_mainContainer.children)
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
		console.log(e.target.dataset.button)
		if (videoElement) {
			videoElement.play()
			videoElement.controls = true
		}
		pD_buttons.forEach((e) => {
			e.style.borderBottom = '0.2em solid hsla(360, 100%, 100%, 0.7)'
			// pD_mainContainer.innerHTML = ''
		})

		// 	switch (e.currentTarget.dataset.media) {
		// 		case 'video':
		// 			console.log('video')
		// 			const video = document.createElement('video')
		// 			video.src = e.currentTarget.dataset.source
		// 			video.controls = true
		// 			video.autoplay = true
		// 			video.playsInline = true
		// 			video.classList.add('pD_video')
		// 			pD_mainContainer.appendChild(video)
		// 			break
		// 		case 'image':
		// 			console.log(e.currentTarget.dataset.source)
		// 			const image = document.createElement('img')
		// 			image.src = e.currentTarget.dataset.source
		// 			image.classList.add('pD_image')
		// 			pD_mainContainer.appendChild(image)
		// 			if (e.currentTarget.dataset.button) {
		// 				const button = document.createElement('button')
		// 				button.textContent = 'Click here to watch video'
		// 				button.classList.add('pD_watchVideo')
		// 				pD_mainContainer.appendChild(button)
		// 				button.addEventListener('click', () => {
		// 					console.log('wtf')
		// 					const modal = document.querySelector('.pD_modalVideoContainer')
		// 					modal.classList.add('pD_showModal')
		// 					const modalBox = document.querySelector('.pD_modal')
		// 					modalBox.classList.add('pD_showModal')
		// 					const modalVideo = document.querySelector('#modalVideo')
		// 					modalVideo.currentTime = 0
		// 					const backButton = document.querySelector('#backButton')
		// 					backButton.addEventListener('click', () => {
		// 						modal.classList.remove('pD_showModal')
		// 						modalBox.classList.remove('pD_showModal')
		// 					})
		// 				})
		// 			}
		// 			break
		// 		default:
		// 			break
		// 	}
		e.currentTarget.style.borderBottom = '0.5em solid white'
	})
})
