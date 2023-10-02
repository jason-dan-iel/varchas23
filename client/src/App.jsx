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
import Opening from "./components/Opening";
import { useState } from "react";
import TeamCreate from "./pages/CreateTeam";
import TeamJoin from "./pages/Join";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpening = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      {
        isOpen ? (
          <>
            <Opening onOpeningComplete={handleOpening} />
          </>
        ) :
          (
            <div className="relative z-0  bg-primary  bg-cover bg-no-repeat bg-center">
              <Router>
                <div className="">
                  <Navbar />
                  <StarsCanvas />
                </div>

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sponsors" element={<Sponsors />} />
                  <Route path="/aboutus" element={<About />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/soch" element={<Soch />} />

                  <Route path="/profile" element={<Profile />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  
                  <Route path="/create" element={<TeamCreate />} />
                  <Route path="/join" element={<TeamJoin />} />

                </Routes>
              </Router>
            </div >)
      }
    </div>
  );
};

export default App;
