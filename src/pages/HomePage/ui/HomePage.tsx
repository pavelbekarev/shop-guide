import "../style.scss"
import Header from "#widgets/Header"
import Banner from "#widgets/Banner"
import Advantages from "#widgets/Advantages"
import {PhoneSection} from "#widgets/PhoneSection"

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Advantages />
                <PhoneSection />
            </main>
            <footer></footer>
        </>
    )
}
