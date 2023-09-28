import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center 
    
    ">
      <div
        className="flex justify-between w-[60%] items-center text-xl text-white

    
        
        backdrop-blur-sm bg-white/10 ... rounded-b-[15px]
        shadow-lg
        "
      >
        <div className="px-2 hover:text-gray-400">
          <NavLink to="/events">Event</NavLink>
        </div>
        <div className="px-2 hover:text-gray-400">
          <NavLink to="/gallery">Gallery</NavLink>
        </div>
        <div className="px-2 hover:text-gray-400">
          <NavLink to="/soch">Soch</NavLink>
        </div>
        <div className="px-2 hover:text-gray-400">
          <NavLink to="/">
            <img src="/VLW.png" className="h-12 w-16" />
          </NavLink>
        </div>
        <div className="px-2 hover:text-gray-400">
          <NavLink to="/sponsors">Sponsors</NavLink>
        </div>
        <div className="px-2 hover:text-gray-400">
          <NavLink to="/aboutus">About us</NavLink>
        </div>
        <div className="px-2 hover:text-gray-400">
          <NavLink to="/team">Team</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
