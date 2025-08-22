import "swiper/css";
import "swiper/css/pagination";
import { setDialog } from "./assets/JS/dialog-script";
import { sliderInit } from "./assets/JS/slider-init";
import { productScript } from "./assets/JS/product-script";
import { mainPageFormScript } from "./assets/JS/form-script";

sliderInit();
productScript();
mainPageFormScript();
setDialog();
