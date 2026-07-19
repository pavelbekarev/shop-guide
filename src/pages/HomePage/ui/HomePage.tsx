import "../style.scss"
import Header from "#widgets/Header"
import Banner from "#widgets/Banner"
import Advantages from "#widgets/Advantages"

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Advantages />
            </main>
            <footer></footer>
        </>
    )
}
