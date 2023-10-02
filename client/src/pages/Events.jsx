import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { events } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import PDFModal from "../components/PDFModal";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TeamCard = ({ index, title, icon, price, category, team, registerPath }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  const navigate = useNavigate();

  const register = () => {
    navigate(registerPath);
    // console.log(registerPath);
    // location.reload();
  }
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-lg shadow-[#00CCFF] cursor-pointer"
      >
        <motion.div
          options={{
            max: 45,
            scale: 1.1,
            speed: 450,
          }}
          className=" rounded-[20px] p-4 min-h-[280px] flex justify-evenly items-center flex-col opacity-90"
        >
          <img
            src={icon}
            alt="web-development"
            className=" object-contain w-16 h-16"
          />

          <h3 className="text-white text-[20px] font-bold text-center hover:text-[#fb0909]">
            {title}
          </h3>
          <h3 className="text-white text-[20px] font-bold text-center">
            {price}
          </h3>
          <div className="flex justify-center text-white w-full text-center gap-4 items-center h-full">
            <div className="shadow uppercase shadow-[#09fbd3] hover:text-[#09fbd3] w-full h-full px-2">{category}</div>
            <div className="shadow uppercase shadow-[#09fbd3] hover:text-[#09fbd3] w-full h-full px-2 ">{team}</div>
          </div>
          {/* <div className="flex flex-row justify-between gap-4"> */}
            <button className="text-white text-[15px] font-semibold text-center hover:shadow-sm hover:text-[#fb0909] hover:scale-110" onClick={register}>
              Register
            </button>
            {/* <button className="text-white text-[15px] font-semibold text-center hover:shadow-sm hover:text-[#fb0909] hover:scale-110" onClick={openModal}>
              Rules Book
            </button>
            <PDFModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
          {/* </div> */}
        </motion.div>
      </motion.div>
    </Tilt>
  );
};

const Events = () => {
  return (
    <main className="relative w-full h-full mx-auto sm:px-16 px-6 sm:py-16 py-10 max-w-7xl z-0">
      <div className="mt-20 flex flex-wrap gap-10">
        {events.map((service, index) => (
          <TeamCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </main>
  )
}

export default Events