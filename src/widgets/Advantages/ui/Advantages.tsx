import { advantages } from "../model/mock"
import "../style.scss"

export function Advantages() {
    return (
        <section className="advantages">
            <div className="container advantages__content">
                {
                    advantages.map((item, key) => (
                        <div className="advantages__item">
                            <img key={key} src={item.icon} alt={item.title} />
                            <div className="advantages__textContent">
                                <h2 className="advantages__title">{item.title}</h2>
                                <p className="advantages__description">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
