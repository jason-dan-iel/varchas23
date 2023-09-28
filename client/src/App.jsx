import Navbar from "./components/Navbar";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Sponsors from "./pages/Sponsors";
import Soch from "./pages/Soch";
import Team from "./pages/Team";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
      <Router>
    <div className="relative z-0 bg-primary bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <div className="">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/soch" element={<Soch />} />
        </Routes>
    </div>
      </Router>
  );
};

export default App;
