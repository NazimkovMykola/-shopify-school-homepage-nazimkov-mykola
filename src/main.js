import Swiper from "swiper";
import "swiper/css";

const swiper = new Swiper(".swiper-bg", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

swiper.init();
