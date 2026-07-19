import "../style.scss"
import Button from "#shared/ui/Button";
import vkIcon from "#assets/vkIcon.svg"
import twitterIcon from "#assets/twitter.svg"
import instIcon from "#assets/inst.svg"
import okIcon from "#assets/ok.svg"
import facebookIcon from "#assets/facebook.svg"

export function Header() {
    return (
        <header className="header">
            <div className="container header__content">
                <div className="header__socials">
                    <a className="header__socials-item" href="/" aria-label="Перейти в ВК">
                        <img src={vkIcon} alt="Иконка VK" />
                    </a>
                    <a className="header__socials-item" href="/" aria-label="Перейти в Twitter">
                        <img src={twitterIcon} alt="Иконка Twitter" />
                    </a>
                    <a className="header__socials-item" href="/" aria-label="Перейти в Instagram">
                        <img src={instIcon} alt="Иконка Instagram" />
                    </a>
                    <a className="header__socials-item" href="/" aria-label="Перейти в Facebook">
                        <img src={facebookIcon} alt="Иконка Facebook" />
                    </a>
                    <a className="header__socials-item" href="/" aria-label="Перейти в OK">
                        <img src={okIcon} alt="Иконка OK" />
                    </a>
                </div>
                <Button text="Стать партнером" />
            </div>
        </header>
    )
}