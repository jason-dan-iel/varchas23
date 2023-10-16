import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Soch from "./Soch";

const Home = () => {
    return (
        <main className="h-full w-screen">
            <Hero />
            <Soch />
            <About />
            <Gallery />
        </main>
    )
}

export default Home;