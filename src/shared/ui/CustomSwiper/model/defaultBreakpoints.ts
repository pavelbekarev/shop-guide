import type { SwiperOptions } from "swiper/types";

export const defaultBreakpoints: SwiperOptions["breakpoints"] = {
  390: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 7,
    spaceBetween: 40,
  },
};
