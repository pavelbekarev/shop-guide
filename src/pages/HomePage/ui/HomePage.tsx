import "../style.scss"
import Header from "#widgets/Header"
import Banner from "#widgets/Banner"
import Advantages from "#widgets/Advantages"
import {PhoneSection} from "#widgets/PhoneSection"
import Promotion from "#widgets/Promotion"
import Partners from "#widgets/Partners"
import Footer from "#widgets/Footer"

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Advantages />
                <PhoneSection />
                <Promotion />
                <Partners />
            </main>
            <Footer />
        </>
    )
}
