import { COMMON_SLIDER_SETTINGS } from "./variables.js";
import Swiper from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export function sliderInit() {
  const swiperHero = new Swiper(".swiper-bg", {
    modules: [Pagination, Autoplay],
    ...COMMON_SLIDER_SETTINGS,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
      dynamicBullets: true,
    },
  });

  let sliderQuantity = 4;
  if (window.innerWidth < 768) {
    sliderQuantity = 1;
  } else if (window.innerWidth > 768 && window.innerWidth < 1280) {
    sliderQuantity = 2;
  }

  const swiperCollection = new Swiper(".swiper-collection", {
    modules: [Autoplay, Navigation],
    ...COMMON_SLIDER_SETTINGS,
    slidesPerView: sliderQuantity,
    centeredSlides: window.innerWidth > 768 ? false : true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: null,
    },
  });
}
