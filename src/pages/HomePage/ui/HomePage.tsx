import "../style.scss"
import Header from "#widgets/Header"
import Banner from "#widgets/Banner"
import Advantages from "#widgets/Advantages"
import {PhoneSection} from "#widgets/PhoneSection"
import Promotion from "#widgets/Promotion"

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Advantages />
                <PhoneSection />
                <Promotion />
            </main>
            <footer></footer>
        </>
    )
}
