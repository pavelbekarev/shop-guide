import Button from "#shared/ui/Button"
import "../style.scss"

export function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__content">
                <div className="footer__left">
                    <span className="copyright">2016 © shopguide</span>
                    <div className="footer__links">
                        <a className="footer__text" href="/">Политика конфиденциальности</a>
                        <a className="footer__text" href="/">Правила пользования</a>
                    </div>
                </div>
                <div className="footer__right">
                    <Button
                        text="Связаться с нами"
                        classnames={['footer__button']}
                    >
                        <img src="/assets/mailIcon.svg" alt="Иконка письма" />
                    </Button>
                </div>
            </div>
        </footer>
    )
}