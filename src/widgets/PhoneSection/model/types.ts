import { Swiper as SwiperType } from "swiper";

export interface Phone {
  id: number;
  title: string;
  description: string[];
  screen: string;
}

export interface PhoneProps {
  onSwiper: (swiper: SwiperType) => void;
  onSlideChange: (swiper: SwiperType) => void;
  screens: Phone[];
}
