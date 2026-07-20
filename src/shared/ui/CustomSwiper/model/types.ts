import type { SwiperProps } from "swiper/react";
import type { SwiperOptions } from "swiper/types";

interface SwiperConfig<T> {
  slides: T[];
  slidesPerView?: number;
  autoPlay?: {
    delay?: number;
    pauseOnMouseEnter?: boolean;
  };
  onSlideChange?: () => void;
  breakpoints?: SwiperOptions["breakpoints"];
  spaceBetween?: number;
  loop?: boolean;
}

export interface CustomSwiperProps<T> {
  swiperConfig: SwiperConfig<T>;
  renderSlide: (slide: T, key: number) => React.ReactNode;
  children?: React.ReactNode;
  swiperProps?: SwiperProps;
}
