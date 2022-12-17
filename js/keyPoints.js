const kP_buttons = document.querySelectorAll('.kP_button')
const kP_mainContainer = document.querySelector('.kP_mainContainer')
const kP_paragraph = document.querySelector('.kP_paragraph')

kP_paragraph.innerHTML = `The hallmark of LeddarVision – superior performance for safe and reliable ADAS and AD.
LeddarVision’s Low-Level Fusion (LLF) technology exceeds the performance of legacy
solutions by more than doubling the object detection range, thus enabling implementation of
ADAS solutions at the lowest sensor and hardware cost.

<strong style="font-weight: bold"
  >Some performance features of the technology:</strong
>
<ul>
<li>Reduced false alarms.</li><li>Superior object position, size and orientation measurements enabling superior ADAS features e.g. ACC up to 160kph and 200m range.</li><li>Superior accuracy in object separation.</li><li>Delivers 5-star NCAP 2025/GSR 2022.</li><li>Unified environmental model enabling fusion of external sensors (HD-map and V2X)
</li>
</ul>`
kP_buttons.forEach((buttonElement, i) => {
	buttonElement.addEventListener('click', (e) => {
		kP_buttons.forEach((e) => {
			e.style.borderBottom = '0.2em solid hsla(360, 100%, 100%, 0.7)'
			// kP_mainContainer.innerHTML = ''
		})
		const splitText = buttonElement.textContent
			.replace(/[\n\r]+|[\s]{2,}/g, ' ')
			.trim()
			.split(' ')[0]
		console.log(splitText)
		switch (splitText) {
			case 'PERFORMANCE':
				console.log('asd')
				kP_paragraph.innerHTML = `The hallmark of LeddarVision – superior performance for safe and reliable ADAS and AD.
        LeddarVision’s Low-Level Fusion (LLF) technology exceeds the performance of legacy
        solutions by more than doubling the object detection range, thus enabling implementation of
        ADAS solutions at the lowest sensor and hardware cost.
        
        <strong style="font-weight: bold"
          >Some performance features of the technology:</strong
        >
        <ul>
        <li>Reduced false alarms.</li><li>Superior object position, size and orientation measurements enabling superior ADAS features e.g. ACC up to 160kph and 200m range.</li><li>Superior accuracy in object separation.</li><li>Delivers 5-star NCAP 2025/GSR 2022.</li><li>Unified environmental model enabling fusion of external sensors (HD-map and V2X)
        </li>
        </ul>`
				break

			case 'FLEXIBILITY':
				kP_paragraph.innerHTML = `LeddarVision is a sensor-agnostic sensor fusion and perception technology that
        accommodates any sensor set and architecture and can be used in many applications
        ranging from on-road vehicles to construction, agriculture, and mining. Leddar
        with any sensor type (LiDAR, radar, camera) irrespective of the brand. Moreover, it can run on
        multiple SoCs and processors empowering OEMs and Tier 1-2s to choose the sensors and
        processing hardware they deem best suited to their needs.`
				break

			case 'SCALABILITY':
				kP_paragraph.innerHTML = `LeddarVision is a scalable solution that enables the development of entry-level L2/L2+ ADAS
        to AD on a common platform. Solution computation power efficiently scales with sensor
        additions and rework efforts are minimized with limited sensor changes. This results in
        reduced R&D time, lower costs, and faster time-to-market for OEMs and Tier 1-2s.`
				break

			case 'COST-EFFECTIVE':
				kP_paragraph.innerHTML = `For any given sensor set, LeddarVision’s low-level fusion and perception technology exceeds
        the performance of legacy solutions by more than doubling the object detection range,
        allowing LeddarVision to work with the most cost-efficient sensors.As an example, LVF-E
        (LeddarVision front-view product) enables L2/L2+ ADAS and 5-star safety using only a 1.2
        Megapixel camera and 2 short-range front corner radars and can be implemented on efficient
        TDA4 platform, resulting in significant cost savings to OEMs and Tier 1s.`
				break
			default:
				break
		}
		e.currentTarget.style.borderBottom = '0.5em solid white'
	})
})
