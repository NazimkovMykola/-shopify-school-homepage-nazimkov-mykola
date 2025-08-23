import {
  COLORS,
  ACTIVE_BORDER_COLOR,
  ACTIVE_FILTER_STYLE,
  NOT_ACTIVE_BORDER_COLOR,
} from "./variables.js";

export function productScript() {
  const changeMainImage = (el, src) => {
    el.src = src;
  };

  const changePriceValue = (priceEl) => {
    priceEl.textContent = `$ ${(
      Math.floor(Math.random() * (320 - 180 + 1)) + 180
    ).toFixed(2)}`;
  };

  const changeActiveButtonSize = (buttonsSizeArr) => {
    const activeButtonIndex = Math.floor(Math.random() * 6);
    buttonsSizeArr.forEach(
      (btn) => (btn.style.borderColor = NOT_ACTIVE_BORDER_COLOR)
    );
    buttonsSizeArr[activeButtonIndex].style.borderColor = ACTIVE_BORDER_COLOR;
  };

  //SELECT MAIN IMG
  const productThumbs = document.querySelector(".product__viewer__thumbs");
  const images = productThumbs.querySelectorAll("img");
  const mainImage = document.querySelector(".product__viewer__main-img");
  const priceElement = document.querySelector(".product__details__price");
  const buttonsSizeArr = document.querySelectorAll(
    'button[aria-label="select size"]'
  );

  images.forEach((img) => {
    img.addEventListener("click", (e) => {
      changeMainImage(mainImage, img.src);
      changePriceValue(priceElement);
      changeActiveButtonSize(buttonsSizeArr);
      images.forEach((el) => (el.style.filter = "unset"));
      e.target.style.filter = ACTIVE_FILTER_STYLE;
    });
  });

  const changeProductThumbs = (currentColor) => {
    images.forEach((el) => (el.style.filter = "unset"));
    images[0].style.filter = ACTIVE_FILTER_STYLE;
    images.forEach((img, index) => {
      img.src = `/img/product/${COLORS[currentColor]}${index + 1}.avif`;
    });
    mainImage.src = `/img/product/${COLORS[currentColor]}1.avif`;
  };

  // SELECT COLOR
  const selectColorContainer = document.querySelector(
    ".product__details__select-color"
  );

  if (selectColorContainer) {
    const btns = selectColorContainer.querySelectorAll("button");
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.id;
        changeProductThumbs(id);
        changePriceValue(priceElement);
        changeActiveButtonSize(buttonsSizeArr);
        btns.forEach((btn) => {
          if (btn.id !== id) {
            btn.style.borderColor = "transparent";
          } else {
            btn.style.borderColor = ACTIVE_BORDER_COLOR;
          }
        });
      });
    });
  }
}
