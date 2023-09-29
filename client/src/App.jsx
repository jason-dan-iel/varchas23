import Navbar from "./components/Navbar";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Sponsors from "./pages/Sponsors";
import Soch from "./pages/Soch";
import Team from "./pages/Team";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StarsCanvas from "./components/canvas/Stars";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";


const App = () => {
  return (
    <div className="relative z-0  bg-primary  bg-cover bg-no-repeat bg-center">
      <Router>
        <div className="">
          <Navbar />
          <StarsCanvas />
        </div>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/soch" element={<Soch />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
