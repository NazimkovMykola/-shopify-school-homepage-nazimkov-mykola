import Swiper from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { commonSliderSettings, colors } from "./assets/JS/variables";

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

const setLocaleStorageDialog = () => {
  window.localStorage.setItem("isDialogViewed", "true");
};

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const dialog = document.querySelector("#dialog");
    if (dialog && window.localStorage.getItem("isDialogViewed") !== "true") {
      dialog.showModal();
      document.body.classList.add("no-scroll");
    }
    const closeDialogBtn = dialog.querySelector("#close-dialog-btn");
    if (closeDialogBtn) {
      closeDialogBtn.addEventListener("click", () => {
        dialog.close();
        document.body.classList.remove("no-scroll");
      });
    }
    const btnFormSubmit = dialog.querySelector('button[type="submit"]');
    if (btnFormSubmit) {
      btnFormSubmit.addEventListener("click", () => {
        setLocaleStorageDialog();
      });
    }
    dialog.addEventListener("close", () => {
      dialog.remove();
      setLocaleStorageDialog();
      document.body.classList.remove("no-scroll");
    });
  }, 1000);
});

const changeMainImage = (el, src) => {
  el.src = src;
};

const productThumbs = document.querySelector(".product__viewer__thumbs");
const images = productThumbs.querySelectorAll("img");
const mainImage = document.querySelector(".product__viewer__main-img");
images.forEach((img) => {
  img.addEventListener("click", () => changeMainImage(mainImage, img.src));
});

const changeProductThumbs = (currentColor) => {
  images.forEach((img, index) => {
    img.src = `/img/product/${colors[currentColor]}${index + 1}.avif`;
  });
  mainImage.src = `/img/product/${colors[currentColor]}1.avif`;
};
const selectColorContainer = document.querySelector(
  ".product__details__select-color"
);

if (selectColorContainer) {
  const btns = selectColorContainer.querySelectorAll("button");
  btns.forEach((btn, indx, btnsArr) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.id;
      changeProductThumbs(id);
      btnsArr.forEach((btn) => {
        if (btn.id !== id) {
          btn.style.borderColor = "transparent";
        } else {
          btn.style.borderColor = "black";
        }
      });
    });
  });
}
