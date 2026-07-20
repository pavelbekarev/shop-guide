import "../style.scss"
import { phoneSectionMocks } from "../model/mock"
import { useState } from "react"
import { Swiper as SwiperType } from "swiper";
import { Phone } from "./Phone";

export function PhoneSection() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [swiper, setSwiper] = useState<SwiperType | null>(null)

    return (
        <section className="phoneSection">
            <div className="phoneSection__content">
                <div className="phoneSection__right">
                    <ul className="phoneSection__navigationMenu">
                        {
                            phoneSectionMocks.map((item, index) => (
                                index === 0 ?
                                <li 
                                    key={item.id}
                                    className={`phoneSection__menuItem phoneSection__menuItem--first ${activeIndex === index && `phoneSection__menuItem--active`}`} 
                                    onClick={() => swiper?.slideToLoop(index)}
                                >
                                    {item.title}
                                </li>
                                :
                                <li 
                                    key={item.id}
                                    className={`phoneSection__menuItem ${activeIndex === index && `phoneSection__menuItem--active`}`} 
                                    onClick={() => swiper?.slideToLoop(index)}
                                >
                                    {item.title}
                                </li>
                            ))
                        }
                    </ul>
                    <div className="phoneSection__description">
                        {phoneSectionMocks[activeIndex].description.map((text, key) => (
                            <p key={key}>{text}</p>
                        ))}
                    </div>
                </div>
                <Phone
                    screens={phoneSectionMocks}
                    onSlideChange={(swiper) => setActiveIndex(swiper?.realIndex)}
                    onSwiper={setSwiper}
                />
            </div>
        </section>
    )
}