import { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();
  const location = useLocation().pathname;
  const handleLogout = () => {
    // localStorage.removeItem("Token");
    localStorage.clear();
    navigate("/");
    location.reload();
  };

  const token = localStorage.getItem("Token");
  const team_token = localStorage.getItem("team_token");
  return (
    <nav
      id="NAV"
      className="w-screen flex flex-col items-center sm:py-5 fixed sm:top-2 z-20 justify-center navbar"
    >
      <div className="z-10 w-1/3">
        <ul
          className={`list-none hidden sm:flex sm:flex-col sm:left-0 justify-between
           items-center text-[11px] md:text-[14px] lg:text-[16px] xl:text-[20px]  
           2xl:text-[25px] text-white ... font-nova_square
           rounded-b-[15px] px-2 shadow-[#09FBD3] fixed capitalize h-[80vh] sm:gap-4 ${location === '/' ? "sm:flex" : "sm:hover:opacity-100 sm:opacity-0"}`}
        >
          <li className="px-2 hover:text-[#09FBD3] border border-[#09FBD3] rounded-full hover:shadow-lg  ">
            <NavLink to="/">
              <img src="/VLW.png" className="xl:h-16 xl:w-16 h-12 w-12" />
            </NavLink>
          </li>
          <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg w-[125px] md:w-[200px] text-center mx-auto border border-[#09FBD3] rounded-lg shadow-[#09FBD3] shadow-md hover:shadow-[#09FBD3]">
            <NavLink to="/events">Events</NavLink>
          </li>
          <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg w-[125px] md:w-[200px] text-center mx-auto border border-[#09FBD3] rounded-lg shadow-[#09FBD3] shadow-md hover:shadow-[#09FBD3]">
            <NavLink to="/discount">Discount</NavLink>
          </li>
          <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg w-[125px] md:w-[200px] text-center mx-auto border border-[#09FBD3] rounded-lg shadow-[#09FBD3] shadow-md hover:shadow-[#09FBD3] ">
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg w-[125px] md:w-[200px] text-center mx-auto border border-[#09FBD3] rounded-lg shadow-[#09FBD3] shadow-md hover:shadow-[#09FBD3] ">
            <NavLink to="/soch">Soch</NavLink>
          </li>
          <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg w-[125px] md:w-[200px] text-center mx-auto border border-[#09FBD3] rounded-lg shadow-[#09FBD3] shadow-md hover:shadow-[#09FBD3] ">
            <NavLink to="/team">Our Team</NavLink>
          </li>
          <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg w-[125px] md:w-[200px] text-center mx-auto border border-[#09FBD3] rounded-lg shadow-[#09FBD3] shadow-md hover:shadow-[#09FBD3] ">
            <NavLink to="/sponsors">Sponsors</NavLink>
          </li>
          <li className="lg:px-2 px-1 hover:text-[#09FBD3] hover:shadow-lg w-[125px] md:w-[200px] text-center mx-auto border border-[#09FBD3] rounded-lg shadow-[#09FBD3] shadow-md hover:shadow-[#09FBD3]  ">
            <NavLink to="/aboutus">About us</NavLink>
          </li>
          <li className="lg:px-2 px-1 hover:text-[#09FBD3] hover:shadow-lg w-[125px] md:w-[200px] text-center mx-auto border border-[#09FBD3] rounded-lg shadow-[#09FBD3] shadow-md hover:shadow-[#09FBD3] ">
            <NavLink to="/create">Create Team</NavLink>
          </li>
          <li
            className={`lg:px-2 px-1 hover:text-[#09FBD3] hover:shadow-lg w-[125px] md:w-[200px] text-center mx-auto border border-[#09FBD3] rounded-lg shadow-[#09FBD3] shadow-md hover:shadow-[#09FBD3] `}
          >
            <NavLink to="/join">Join Team</NavLink>
          </li>
          <li className="lg:px-2 px-1 hover:text-[#09FBD3] hover:shadow-lg w-[125px] md:w-[200px] text-center mx-auto border border-[#09FBD3] rounded-lg shadow-[#09FBD3] shadow-md hover:shadow-[#09FBD3] ">
            <NavLink to="/payment">Payment</NavLink>
          </li>
          <li
            className={` px-2 hover:text-[#09FBD3] hover:shadow-lg w-[125px] md:w-[200px] text-center mx-auto border border-[#09FBD3] rounded-lg shadow-[#09FBD3] shadow-md hover:shadow-[#09FBD3]
           `}
          >
            {token ? (
              <NavLink to="/profile">Profile</NavLink>
            ) : (
              <NavLink to="/login">LogIn</NavLink>
            )}
          </li>
          <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg w-[125px] md:w-[200px] text-center border mx-auto border-[#09FBD3] rounded-lg shadow-[#09FBD3] shadow-md hover:shadow-[#09FBD3] ">
            {token ? (
              <p onClick={handleLogout}>Log Out</p>
            ) : (
              <NavLink to="/signup">SignUp</NavLink>
            )}
          </li>
        </ul>
      </div>
      <div className="sm:hidden flex flex-1 justify-between gap-8 w-full items-center backdrop-blur-sm bg-white/10 ... ">
        <div className="">
          <NavLink to="/">
            <img src="/VLW.png" className="h-16 w-16" />
          </NavLink>
        </div>
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain mr-3"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex flex-col justify-end items-start flex-1 gap-4">
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] text-white hover:text-[#09fbd3] hover:shadow-lg hover:scale-125`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/events">Events</NavLink>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] text-white hover:text-[#09fbd3] hover:shadow-lg hover:scale-125`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/discount">Discount</NavLink>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] text-white hover:text-[#09fbd3] hover:shadow-lg hover:scale-125`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] text-white hover:text-[#09fbd3] hover:shadow-lg hover:scale-125`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/soch">Soch</NavLink>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] text-white hover:text-[#09fbd3] hover:shadow-lg hover:scale-125`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/team">Our Team</NavLink>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] text-white hover:text-[#09fbd3] hover:shadow-lg hover:scale-125`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/sponsors">Sponsors</NavLink>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] text-white hover:text-[#09fbd3] hover:shadow-lg hover:scale-125`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/aboutus">About us</NavLink>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] text-white hover:text-[#09fbd3] hover:shadow-lg hover:scale-125`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/create">Create Team</NavLink>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] text-white hover:text-[#09fbd3] hover:shadow-lg hover:scale-125`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/join">Join Team</NavLink>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] text-white hover:text-[#09fbd3] hover:shadow-lg hover:scale-125`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/payment">Payment</NavLink>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] text-white hover:text-[#09fbd3] hover:shadow-lg hover:scale-125`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {token ? (
                <NavLink to="/profile">Profile</NavLink>
              ) : (
                <NavLink to="/login">LogIn</NavLink>
              )}
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] text-white hover:text-[#09fbd3] hover:shadow-lg hover:scale-125`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {token ? (
                <p onClick={handleLogout}>Log Out</p>
              ) : (
                <NavLink to="/signup">SignUp</NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
