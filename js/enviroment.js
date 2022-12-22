const e_buttons = document.querySelectorAll('.e_button')
const e_buttonGroup = document.querySelector('.e_buttonGroup')
const e_subButton = document.querySelectorAll('.e_subButton')
const e_video = document.querySelector('.e_video')

const eVideo = document.querySelector('.e_video')
const play = document.querySelector('.fa-play')

const perHArray = [
	'3D RGBD\nEnviromental\nModeling',
	'Performance\nComparison',
	'Lane\nDetection',
	'Addresing\nFalse Positives',
]
e_subButton.forEach((e, i) => {
	e.textContent = perHArray[i]
})

e_buttons.forEach((buttonElement, i) => {
	e_buttons[0].classList.add('e_activeButton')
	buttonElement.addEventListener('click', (e) => {
		e_buttons.forEach((e) => {
			e.classList.remove('e_activeButton')
			e.classList.remove('e_activeButtonPurple')
			e_subButton.forEach((element) => {
				element.classList.remove('e_activeButton')
				element.classList.remove('e_activeButtonPurple')
				element.classList.remove('e_buttonPurple')
			})
		})

		switch (e.currentTarget.dataset.id) {
			case 'perH':
				const perHArray = [
					'3D RGBD\nEnviromental\nModeling',
					'Performance\nComparison',
					'Lane\nDetection',
					'Addresing\nFalse Positives',
				]
				const perHid = ['3drE', 'perC', 'lanD', 'addF']
				perHid.forEach((e, i) => {
					perHid[i] = 'perH' + e
				})
				e_subButton.forEach((subButtonElement, i) => {
					subButtonElement.dataset.id = perHid[i]
					subButtonElement.textContent = perHArray[i]
				})
				break

			case 'adaS':
				const adaSArray = [
					'Object Separation\non Highway',
					'Occluded Object\nDetection',
					'Lane Detection',
					'Addresing False Positives',
				]
				const adaSid = ['objS', 'occO', 'lanD', 'addF']
				adaSid.forEach((e, i) => {
					adaSid[i] = 'adaS' + e
				})
				e_subButton.forEach((e, i) => {
					e.dataset.id = adaSid[i]
					e.textContent = adaSArray[i]
				})
				break

			case 'opeE':
				const opeEArray = [
					'Operation in\nBlinding Light',
					'Operation\nin Rain',
					'Failed\nCamera',
					'Operation\nin Degraded\nSensors',
				]
				const opeEid = ['opeB', 'opeR', 'faiC', 'opeD']
				opeEid.forEach((e, i) => {
					opeEid[i] = 'opeE' + e
				})

				e_subButton.forEach((e, i) => {
					e.dataset.id = opeEid[i]
					e.textContent = opeEArray[i]
				})
				break

			case 'ledO':
				const ledOArray = [
					'Enviromental\nModeling For\nOff-Road',
					'3D Terrain\nModel',
					'Operation\nin Degraded\nSensors',
					'Detection and\nTracking',
				]
				const ledOid = ['envM', '3dT', 'opeD', 'detA']
				ledOid.forEach((e, i) => {
					ledOid[i] = 'ledO' + e
				})
				e_subButton.forEach((e, i) => {
					e.dataset.id = ledOid[i]
					e.classList.add('e_buttonPurple')
					e.textContent = ledOArray[i]
				})
				break
			default:
				break
		}

		if (e.currentTarget === e_buttonGroup.lastElementChild) {
			e.currentTarget.classList.add('e_activeButtonPurple')
		} else {
			e.currentTarget.classList.add('e_activeButton')
		}
	})
})

e_subButton.forEach((subButtonElement) => {
	e_subButton[0].classList.add('e_activeButton')
	subButtonElement.addEventListener('click', (e) => {
		e_subButton.forEach((e) => {
			e.classList.remove('e_activeButton')
			e.classList.remove('e_activeButtonPurple')
		})
		e_video.autoplay = true

		if (e.currentTarget.classList.contains('e_buttonPurple')) {
			e.currentTarget.classList.add('e_activeButtonPurple')
		} else {
			e.currentTarget.classList.add('e_activeButton')
		}
		console.log(e.currentTarget.dataset.id)
		switch (e.currentTarget.dataset.id) {
			case 'perH3drE':
				console.log('working')
				e_video.src = './assets/enviroments/enviromentalVideos/1.1.mp4'
				break
			case 'perHperC':
				e_video.src = './assets/enviroments/enviromentalVideos/1.2.mp4'
				break
			case 'perHlanD':
				e_video.src = './assets/enviroments/enviromentalVideos/1.3.mp4'
				break
			case 'perHaddF':
				e_video.src = './assets/enviroments/enviromentalVideos/1.4.mp4'
				break
			case 'adaSobjS':
				e_video.src = './assets/enviroments/enviromentalVideos/2.1.mp4'
				break
			case 'adaSoccO':
				e_video.src = './assets/enviroments/enviromentalVideos/2.2.mp4'
				break
			case 'adaSlanD':
				e_video.src = './assets/enviroments/enviromentalVideos/1.3.mp4'
				break
			case 'adaSaddF':
				e_video.src = './assets/enviroments/enviromentalVideos/1.4.mp4'
				break
			case 'opeEopeB':
				e_video.src = './assets/enviroments/enviromentalVideos/3.1.mp4'
				break
			case 'opeEopeR':
				e_video.src = './assets/enviroments/enviromentalVideos/3.2.mp4'
				break
			case 'opeEfaiC':
				e_video.src = './assets/enviroments/enviromentalVideos/3.3.mp4'
				break
			case 'opeEopeD':
				e_video.src = './assets/enviroments/enviromentalVideos/3.4.mov'
				break
			case 'ledOenvM':
				e_video.src = './assets/enviroments/enviromentalVideos/4.1.mp4'
				break
			case 'ledO3dT':
				e_video.src = './assets/enviroments/enviromentalVideos/4.2.mp4'
				break
			case 'ledOopeD':
				e_video.src = './assets/enviroments/enviromentalVideos/3.4.mov'
				break
			case 'ledOdetA':
				e_video.src = './assets/enviroments/enviromentalVideos/4.4.mp4'
				break
			default:
				break
		}
		e_video.loop = true
	})
})
