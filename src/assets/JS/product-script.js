import { colors } from "./variables.js";

export function productScript() {
  const changeMainImage = (el, src) => {
    el.src = src;
  };

  const productThumbs = document.querySelector(".product__viewer__thumbs");
  const images = productThumbs.querySelectorAll("img");
  const mainImage = document.querySelector(".product__viewer__main-img");
  images.forEach((img) => {
    img.addEventListener("click", (e) => {
      changeMainImage(mainImage, img.src);
      images.forEach((el) => (el.style.filter = "unset"));
      e.target.style.filter = "brightness(0.7)";
    });
  });

  const changeProductThumbs = (currentColor) => {
    images.forEach((el) => (el.style.filter = "unset"));
    images[0].style.filter = "brightness(0.7)";
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
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.id;
        changeProductThumbs(id);
        btns.forEach((btn) => {
          if (btn.id !== id) {
            btn.style.borderColor = "transparent";
          } else {
            btn.style.borderColor = "black";
          }
        });
      });
    });
  }
}
