import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const TeamCard = ({ index, para }) => {
  return (
    <Tilt className=" w-full ">
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
          <p className="text-[#09fbd3] xl:text-2xl font-serif text-center">{para}</p>
      
        </motion.div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <main className="relative w-full h-screen mx-auto sm:px-16 px-6 sm:py-16 py-10 max-w-7xl z-0">
      <div className="mt-20 flex flex-wrap gap-10">
          <TeamCard 
          index={1}
          para = {"Varchas is the annual sports fest of IIT Jodhpur. Being the largest sports fest of North-West India, Varchas celebrates spirit of sportmanship and serves as platform to showcase the countless hours of perspiration put in by teams to achieve excellence in their sport. Since it's inception in 2011, the grandeur of Varchas has spread far and wide across the best colleges of India."}
          />
          <TeamCard 
          index={1}
          para = {"Indian Institute of Technology Jodhpur was established in 2008, to foster technology education and research in India. The Institute is committed to technological thought and action to benefit the economic development of India. IIT Jodhpur. functions from its sprawling résidential permamnent north- northwest of Jodhpur towards Nagaur. This campus is meticulously planned and envisioned to stand as a symbol of academics- simple, but deep"}
          />
      </div>
    </main>
  )
}

export default About;
