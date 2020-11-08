// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";

// import Swiper styles
import "swiper/swiper-bundle.css";
import "../styles/partials/testimonial.css";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    bulletClass: "bullet",
    bulletActiveClass: "bullet-color",
  },
  paginationClickable: true,
  slidesPerView: 4,
  allowTouchMove: true,
  spaceBetween: 50,

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});
