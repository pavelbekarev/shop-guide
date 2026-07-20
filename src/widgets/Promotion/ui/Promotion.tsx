import "../style.scss"

export function Promotion() {
    return (
        <section className="promotion">
            <div className="promotion__wrapper">
                <div className="container promotion__content">
                    <div className="promotion__left">
                        <h2 className="promotion__title">Наши акции</h2>
                        <p className="promotion__description">Каждый день в Москве проходят распродажи. В акциях и скидках дня могут принимать участие любые группы товаров. Особенно популярны распродажи одежды и обуви, распродажи мебели, распродажи сумок.</p>
                    </div>
                    <div className="promotion__phones">
                        <img className="promotion__phoneLeft" src="/assets/iPhone2.png" alt="iPhone" />
                        <img className="promotion__phoneRight" src="/assets/nexus.png" alt="Smartphone" />
                    </div>
                </div>
            </div>
        </section>
    )
}
