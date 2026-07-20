import CustomSwiper from "#shared/ui/CustomSwiper"
import { defaultBreakpoints } from "#shared/ui/CustomSwiper/model/defaultBreakpoints"
import "../style.scss"

export function Partners() {
    const partners = [
        {
            id: 1,
            logo: "/assets/Prada.png"
        },
        {
            id: 2,
            logo: "/assets/Nike.png"
        },
        {
            id: 3,
            logo: "/assets/TSUM.png"
        },
        {
            id: 4,
            logo: "/assets/Adidas.png"
        },
        {
            id: 5,
            logo: "/assets/GUM.png"
        },
        {
            id: 6,
            logo: "/assets/Zara.png"
        },
        {
            id: 7,
            logo: "/assets/Pazolini.png"
        },
    ]
    return (
        <section className="partners">
            <h2 className="partners__title">Наши партнёры</h2>
            <div className="partners__wrapper">
                <div className="container">
                    <div className="partners__swiperContainer">
                        <div className="partners__swiper">
                            <button className="partners-prev-button"></button>
                            <CustomSwiper
                                renderSlide={(slide) => (
                                    <img className="partners__img" key={slide?.id} src={slide?.logo} alt="Логотип партнера" />
                                )}
                                swiperConfig={{
                                    slides: partners,
                                    slidesPerView: 7,
                                    spaceBetween: 0,
                                    breakpoints: defaultBreakpoints
                                }}
                                swiperProps={{
                                    watchOverflow: true,
                                    navigation: {
                                        prevEl: ".partners-prev-button",
                                        nextEl: ".partners-next-button",
                                    },
                                }}
                                
                            />
                            <button className="partners-next-button"></button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="partners__ctaWrapper">
                <p className="partners__ctaText">Хотите стать партнёром?</p>
                <p className="partners__ctaText">Напишите нам и про ваши акции узнают все.</p>
                <button className="partners__ctaButton">Стать партнером</button>
            </div>

        </section>
    )
}