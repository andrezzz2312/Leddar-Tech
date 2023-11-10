const e_buttons = document.querySelectorAll('.e_button')
const e_buttonGroup = document.querySelector('.e_buttonGroup')
const e_subButton = document.querySelectorAll('.e_subButton')
const e_video = document.querySelector('.e_video')
const eVideo = document.querySelector('.e_video')
const play = document.querySelector('.fa-play')

const titles = [
	`Products`,
	`Operating\nin all\nconditions`,
	`Operating with\nall sensor\nmodals`,
	`Off-road`,
]

e_buttons.forEach((e, i) => {
	e.textContent = titles[i]
})
let productsArray = ['LVF-E', 'LVF-H', 'LVS-2+', 'LVP']
e_subButton.forEach((e, i) => {
	e.textContent = productsArray[i]
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
			case 'prod':
				productsArray = ['LVF-E', 'LVF-H', 'LVS-2+', 'LVP']
				const prodid = ['LVF-E', 'LVF-H', 'LVS-2+', 'LVP']
				prodid.forEach((e, i) => {
					prodid[i] = 'prod' + e
				})
				e_subButton.forEach((subButtonElement, i) => {
					subButtonElement.dataset.id = prodid[i]
					subButtonElement.textContent = productsArray[i]
				})
				break

			case 'opeC':
				const opeCArray = [
					'Various enviromental\nConditions',
					'Crowded urban\nscenes',
					'Crowded highway\nscenes',
					'Degraded, conflicting,\nand failing sensors',
				]
				const opeCid = ['varE', 'croU', 'croH', 'degC']
				opeCid.forEach((e, i) => {
					opeCid[i] = 'opeC' + e
				})
				e_subButton.forEach((e, i) => {
					e.dataset.id = opeCid[i]
					e.textContent = opeCArray[i]
				})
				break

			case 'opeS':
				const opeSArray = [
					'Radar-Camera Fusion',
					'LiDAR-Camera Fusion',
					'LiDAR-Camera-Radar Fusion',
					'Single modality',
				]
				const opeSid = ['radC', 'lidCF', 'lidCR', 'sinM']
				opeSid.forEach((e, i) => {
					opeSid[i] = 'opeS' + e
				})

				e_subButton.forEach((e, i) => {
					e.dataset.id = opeSid[i]
					e.textContent = opeSArray[i]
				})
				break

			case 'offR':
				const offRArray = [
					'Harsh environment -\nDust & Dirt',
					'LLF outperforms\nsingle modality',
					'Failing and \ndegraded sensors',
					'Unstructured\nenvironment',
				]
				const offRid = ['harE', 'llfO', 'faiD', 'unsE']
				offRid.forEach((e, i) => {
					offRid[i] = 'offR' + e
				})
				e_subButton.forEach((e, i) => {
					e.dataset.id = offRid[i]
					e.classList.add('e_buttonPurple')
					e.textContent = offRArray[i]
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
			case 'prodLVF-E':
				e_video.src = './assets/environments/environmentalVideos/1.1.mp4'
				break
			case 'prodLVF-H':
				e_video.src = './assets/environments/environmentalVideos/1.2.mp4'
				break
			case 'prodLVS-2+':
				e_video.src = './assets/environments/environmentalVideos/1.3.mp4'
				break
			case 'prodLVP':
				e_video.src = './assets/environments/environmentalVideos/1.4.mp4'
				break
			case 'opeCvarE':
				e_video.src = './assets/environments/environmentalVideos/2.1.mp4'
				break
			case 'opeCcroU':
				e_video.src = './assets/environments/environmentalVideos/2.2.mp4'
				break
			case 'opeCcroH':
				e_video.src = './assets/environments/environmentalVideos/1.3.mp4'
				break
			case 'opeCdegC':
				e_video.src = './assets/environments/environmentalVideos/1.4.mp4'
				break
			case 'opeSradC':
				e_video.src = './assets/environments/environmentalVideos/3.1.mp4'
				break
			case 'opeSlidCF':
				e_video.src = './assets/environments/environmentalVideos/3.2.mp4'
				break
			case 'opeSlidCR':
				e_video.src = './assets/environments/environmentalVideos/3.3.mp4'
				break
			case 'opeSsinM':
				e_video.src = './assets/environments/environmentalVideos/3.4.mov'
				break
			case 'offRharE':
				e_video.src = './assets/environments/environmentalVideos/4.1.mp4'
				break
			case 'offRllfO':
				e_video.src = './assets/environments/environmentalVideos/4.2.mp4'
				break
			case 'offRfaiD':
				e_video.src = './assets/environments/environmentalVideos/3.4.mov'
				break
			case 'offRunsE':
				e_video.src = './assets/environments/environmentalVideos/4.4.mp4'
				break
			default:
				break
		}
		e_video.loop = true
	})
})
