const e_buttons = document.querySelectorAll('.e_button')
const e_buttonGroup = document.querySelector('.e_buttonGroup')
const e_subButton = document.querySelectorAll('.e_subButton')

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
				e_subButton.forEach((e, i) => {
					e.dataset.attribute = perHid[i]
					e.textContent = perHArray[i]
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
					e.dataset.attribute = adaSid[i]
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
					e.dataset.attribute = opeEid[i]
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
					e.dataset.attribute = ledOid[i]
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
	subButtonElement.addEventListener('click', (e) => {
		e_subButton.forEach((e) => {
			e.classList.remove('e_activeButton')
			e.classList.remove('e_activeButtonPurple')
		})

		if (e.currentTarget.classList.contains('e_buttonPurple')) {
			e.currentTarget.classList.add('e_activeButtonPurple')
		} else {
			e.currentTarget.classList.add('e_activeButton')
		}

		switch (e.currentTarget.dataset.id) {
			case value:
				break

			default:
				break
		}
	})
})
