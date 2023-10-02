import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { gsap } from 'gsap';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // useEffect(() => {
  //   gsap.fromTo(
  //     "#NAV",
  //     {
  //       y: -100,
  //       scaleY: 1,
  //       scaleX: 1,
  //     },
  //     {
  //       y: 10,
  //       scaleY: 1.5,
  //       scaleX: 1.5,
  //       duration: 2,
  //       ease: "elastic.out(1, 0.5)",
  //     }
  //   )
  //   gsap.to("#NAV", {
  //     y: 0,
  //     scaleY: 1,
  //     scaleX: 1,
  //     duration: 1,
  //     delay: 2,
  //     ease: "elastic.out(1, 0.5)",
  //   })
  // }, [])

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Token");
    navigate("/");
    location.reload();
  };

  const token = localStorage.getItem("Token");

  return (
    <nav id="NAV" className="w-full flex items-center sm:py-5 fixed sm:top-2 z-20 justify-center">
      <ul
        className="list-none hidden sm:flex justify-between items-center 
      text-[32px] sm:text-[18px] text-white 
      backdrop-blur-sm bg-white/10 ... 
      rounded-b-[15px] shadow-2xl px-2 shadow-[#09FBD3]
      font-Eczar fixed
      "
      >
        <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg  hover:scale-125 ">
          <NavLink to="/events">Events</NavLink>
        </li>
        <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg hover:scale-125">
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg hover:scale-125">
          <NavLink to="/soch">Soch</NavLink>
        </li>
        <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg hover:scale-125">
          <NavLink to="/team">Team</NavLink>
        </li>
        <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg hover:scale-125">
          <NavLink to="/sponsors">Sponsors</NavLink>
        </li>
        <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg hover:scale-150">
          <NavLink to="/">
            <img src="/VLW.png" className="h-16 w-16" />
          </NavLink>
        </li>
        <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg hover:scale-125">
          <NavLink to="/aboutus">About us</NavLink>
        </li>
        <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg hover:scale-125">
          <NavLink to="/create">Create Team</NavLink>
        </li>
        <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg hover:scale-125">
          <NavLink to="/join">Join Team</NavLink>
        </li>
        <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg hover:scale-125">
          {token ? (
            <NavLink to="/profile">Profile</NavLink>
          ) : (
            <NavLink to="/login">LogIn</NavLink>
          )}
        </li>
        <li className="px-2 hover:text-[#09FBD3] hover:shadow-lg hover:scale-125">
          {token ? (
            <p onClick={handleLogout}>Log Out</p>
          ) : (
            <NavLink to="/signup">SignUp</NavLink>
          )}
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-between items-center backdrop-blur-sm bg-white/10 ... ">
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
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
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
              <NavLink to="/team">Team</NavLink>
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
