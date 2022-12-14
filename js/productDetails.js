const pD_buttons = document.querySelectorAll(".pD_button")
const pD_mainContainer = document.querySelector(".pD_mainContainer")

pD_buttons.forEach((buttonElement, i) => {
	buttonElement.addEventListener("click", (e) => {
		pD_buttons.forEach((e) => {
			e.style.borderBottom = "0.2em solid hsla(360, 100%, 100%, 0.7)"
			pD_mainContainer.innerHTML = ""
		})

		switch (e.currentTarget.dataset.media) {
			case "video":
				console.log("video")
				const video = document.createElement("video")
				video.src = e.currentTarget.dataset.source
				video.controls = true
				video.autoplay = true
				video.classList.add("pD_video")
				pD_mainContainer.appendChild(video)
				break

			case "image":
				console.log("image")
				console.log(e.currentTarget.dataset.source)
				const image = document.createElement("img")
				image.src = e.currentTarget.dataset.source
				image.classList.add("pD_image")
				pD_mainContainer.appendChild(image)
				break

			case "2images":
				console.log("2images")
			default:
				break
		}
		e.currentTarget.style.borderBottom = "0.5em solid white"
	})
})
