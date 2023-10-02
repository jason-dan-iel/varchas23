import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { events } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import PDFModal from "../components/PDFModal";
import RegistrationModal from "../components/RegistrationModal";

// eslint-disable-next-line react/prop-types
const TeamCard = ({ index, title, icon, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRModalOpen, setIsRModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(true);
  };
  const openRModal = () => {
    setIsRModalOpen(true);
  };
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
          className=" rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col opacity-90"
        >
          <img
            src={icon}
            alt="web-development"
            className=" object-contain w-24 h-24 rounded-md bg-gray-100 bg-opacity-50"
          />

          <h3 className="text-white text-[20px] font-bold text-center px-1 rounded-md bg-gray-100 bg-opacity-50  hover:text-[#fb0909]">
            {title}
          </h3>
          <h3 className="text-white text-[20px] font-bold text-center">
            {price}
          </h3>
          <div className="flex flex-row justify-between gap-4">
            <button className="text-white text-[15px] font-semibold text-center hover:shadow-sm hover:text-[#fb0909] hover:scale-110" onClick={openRModal}>
              Register
            </button>
            <button className="text-white text-[15px] font-semibold text-center hover:shadow-sm hover:text-[#fb0909] hover:scale-110" onClick={openModal}>
              Rules Book
            </button>
            <PDFModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <RegistrationModal isOpen={isRModalOpen} onClose={() => setIsRModalOpen(false)} />
          </div>
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