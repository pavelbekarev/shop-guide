import "../style.scss"
import Header from "#widgets/Header"
import Banner from "#widgets/Banner"

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Banner />
            </main>
            <footer></footer>
        </>
    )
}
