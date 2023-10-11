import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

// eslint-disable-next-line react/prop-types
const TeamCard = ({ index, para }) => {
  return (
    <div>
      <div className=" w-full">
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full p-[1px] rounded-[20px] shadow-lg hover:shadow-xl hover:shadow-[#00CCFF] shadow-[#00CCFF] cursor-pointer "
        >
          <motion.div
            options={{
              max: 45,
              scale: 1.1,
              speed: 450,
            }}
            className=" rounded-[20px] p-4 min-h-[280px] flex justify-evenly items-center flex-col opacity-90"
          >
            <p className="text-[#9fffef] xl:text-2xl text-center">{para}</p>

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const Soch = () => {
  return (
    <main className="relative h-screen w-screen sm:h-screen mx-auto sm:px-16 px-6 sm:py-16 py-10 max-w-7xl z-0 flex flex-col items-center justify-center">
      <div className="text-emerald-500 mt-7 text-[100px] font-Londrina_sketch">S O C H</div>
      <div className="mt-5 flex flex-wrap gap-10 font-mono">
        <TeamCard
          index={1}
          para={"SOCH is the social initiative of Varchas which develops a platform to spread awarness and motivate the citizen to take a collective stand against contempary social issues prevailing in our society and come up with practical solutions to resolve such issues . \n In order to understand the mindset of our younger generation on these burning issues the volunteers visited numerous school in Jodhpur and conducted competitions like esaay writing, drawing and face paintings in previous editions of Varchas"}
        />
      </div>
    </main>
  )
}

export default Soch