import {Swiper} from "swiper";

document.addEventListener("DOMContentLoaded", function () {
	new Swiper('.swiper', {
		slidesPerView: 4,
		spaceBetween: 0,
		grabCursor: true,
		breakpoints: {
			320: {
				slidesPerView: 1.2
			},
			768: {
				slidesPerView: 4
			}
		}
	})
})

