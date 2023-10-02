import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const TeamCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=" rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Team = () => {
  return (
    <main className="relative w-full h-screen mx-auto sm:px-16 px-6 sm:py-16 py-10 max-w-7xl z-0">
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <TeamCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </main>
  );
};

export default Team;
