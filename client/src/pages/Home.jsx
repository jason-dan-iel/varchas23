import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Soch from "./Soch";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <main className="h-full w-screen">
            <Hero />
            <Soch />
            <About />
            <Gallery />
            <Footer />
        </main>
    )
}

export default Home;