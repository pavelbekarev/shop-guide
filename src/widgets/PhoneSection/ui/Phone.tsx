import CustomSwiper from "#shared/ui/CustomSwiper"
import {Swiper as SwiperType} from "swiper"
import type { Phone } from "../model/types";

interface PhoneProps {
    onSwiper: (swiper: SwiperType) => void;
    onSlideChange: (swiper: SwiperType) => void;
    screens: Phone[]
}

export function Phone({ onSwiper, onSlideChange, screens }: PhoneProps) {
    return (
        <div className="phone">
            <img className="phone__phoneLayout" src="/assets/iPhone.png" alt="iPhone" />

            <div className="phone__swiper">
                <CustomSwiper 
                    renderSlide={(slide) => (
                        <img
                            className="phone__img"
                            src={slide.screen}
                            alt={slide.title}
                        />
                    )}
                    swiperConfig={{ slides: screens }} 
                    swiperProps={{ 
                        onSwiper: onSwiper, 
                        onSlideChange: onSlideChange,
                    }} 
                />
            </div>
        </div>
    )
}
