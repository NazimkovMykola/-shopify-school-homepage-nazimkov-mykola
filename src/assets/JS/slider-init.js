import { commonSliderSettings } from "./variables.js";
import Swiper from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export function sliderInit() {
  const swiperHero = new Swiper(".swiper-bg", {
    modules: [Pagination, Autoplay],
    ...commonSliderSettings,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
      dynamicBullets: true,
    },
  });

  const swiperCollection = new Swiper(".swiper-collection", {
    modules: [Autoplay, Navigation],
    ...commonSliderSettings,
    slidesPerView: window.innerWidth > 768 ? 4 : 1,
    centeredSlides: window.innerWidth > 768 ? false : true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: null,
    },
  });
}
