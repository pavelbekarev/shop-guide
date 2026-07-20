
import "../style.scss"
import "swiper/css"
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from 'swiper/modules';
import type { CustomSwiperProps } from "../model/types"
import type { SwiperModule } from "swiper/types"

export default function CustomSwiper<T>({ swiperConfig, renderSlide, children, swiperProps }: CustomSwiperProps<T>) {
    const modules: SwiperModule[] = [Navigation, Autoplay, A11y]
    const defaultAutoplayConfig = {
        pauseOnMouseEnter: true,
        delay: 1000,
    }

    if (swiperConfig?.slides)
        return (
            <Swiper
            onSwiper={() => console.log("Swiper init")}
    onSlideChange={() => console.log("Slide changed")}
                modules={modules}
                className='customSwiper'
                slidesPerView={swiperConfig?.slidesPerView || 3}
                speed={300}
                autoplay={
                    swiperConfig?.autoPlay ? swiperConfig?.autoPlay || defaultAutoplayConfig : false
                }
                breakpoints={swiperConfig?.breakpoints}
                spaceBetween={swiperConfig?.spaceBetween} 
                loop={swiperConfig?.loop ?? false}
                draggable={false}
                {...swiperProps}
            >
                {
                    swiperConfig?.slides.map((slide, key: number) => (
                        <SwiperSlide key={key}>
                            {
                                renderSlide ?
                                renderSlide(slide, key) :
                                children || <p>Слайдер</p>
                            }
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        )

    else {
        return (
            <h2>Слайды не переданы</h2>
        )
    }
}