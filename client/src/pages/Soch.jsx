import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

// eslint-disable-next-line react/prop-types
const TeamCard = ({ index, para }) => {
  return (
    <div>
      <div className=" w-full">
        <div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-3/4 mx-auto p-[1px] rounded-[20px] shadow-lg  shadow-[#00CCFF] cursor-pointer "
        >
          <div

            className=" rounded-[20px] p-4 min-h-[280px] flex justify-evenly items-center flex-col opacity-90"
          >
            <p className="text-[#9fffef] xl:text-2xl sm:text-center">{para}</p>

          </div>
        </div>
      </div>
    </div>
  );
};

const Soch = () => {
  return (
    <main className="relative h-fit pb-10 w-screen  mx-auto max-w-7xl z-0 flex flex-col items-center">
      <div className="text-emerald-500 text-[60px] sm:text-[100px] font-Eczar">SOCH</div>
      <div className="flex flex-wrap gap-10 font-mono uppercase">
        <TeamCard
          index={1}
          para={"SOCH is the social initiative of Varchas which develops a platform to spread awarness and motivate the citizen to take a collective stand against contempary social issues prevailing in our society and come up with practical solutions to resolve such issues . \n In order to understand the mindset of our younger generation on these burning issues the volunteers visited numerous school in Jodhpur and conducted competitions like esaay writing, drawing and face paintings in previous editions of Varchas"}
        />
      </div>
    </main>
  )
}

export default Soch