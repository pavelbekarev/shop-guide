import "../style.scss"
import phoneImg from "#assets/Phone.png"
import googlePlay from "#assets/googlePlay.png"
import appStore from "#assets/appStore.png"
import arrowDown from "#assets/arrowDown.svg"

export function Banner() {
    return (
        <section className="banner">
            <div className="container banner__content">
                <div className="banner__textContent">
                    <div className="banner__badge">
                        Только лучшие акции
                    </div>
                    <h1 className="banner__title">Shop<span className="banner__title--bold">Guide</span></h1>
                    <span className="banner__toLoadText">загрузить</span>

                    <div className="banner__storeLinks">
                        <a className="banner__storeLink" href="/" aria-label="Перейти в AppStore">
                            <img src={appStore} alt="App Store"/>
                        </a>
                        <a className="banner__storeLink" href="/" aria-label="Перейти в Google Play">
                            <img src={googlePlay} alt="Google Play"/>
                        </a>
                    </div>
                </div>
                <img className="banner__phoneImg" src={phoneImg} alt="Мобильная версия" />
            </div>
            <button className="banner__scrollDownButton">
                Вниз
                <img src={arrowDown} alt="Стрелка вниз" />
                Вниз
            </button>
        </section>
    );
}