import  { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
// SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

export const projectSliderProps = {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".next_button",
    prevEl: ".prev_button",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2, spaceBetween: 50 },
    1040: { slidesPerView: 3, spaceBetween: 50 },
  },
};
export const partnersSliderProps = {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 2 },
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1040: { slidesPerView: 4 },
    1200: { slidesPerView: 5 },
    1600: { slidesPerView: 5 },
    1920: { slidesPerView: 5 },
  },
};
