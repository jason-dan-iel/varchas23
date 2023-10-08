import { motion } from "framer-motion";
import { EarthCanvas } from "../components/canvas";

import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Hero = () => {
  return (
    <div
      className={` flex-1 flex-col xl:flex-row h-screen right-0 bg-gallery bg-cover bg-no-repeat`}
    >
      <main className="h-screen flex justify-center items-center sm:items-start">
        <div className="flex flex-col gap-2 justify-end items-end mx-4 px-4">
          <div className="sm:block hidden">
            <img src="../logo.png" className="z-15 w-[200px] h-[200px]" />
            <p className="text-center uppercase font-nova_square text-[#09df9a] -mt-[14px]">3rd - 5th november</p>
          </div>
          <div className="flex flex-col mt-4 items-end justify-end">
            <img src="/Vn.png" className="sm:w-1/2"/>
          </div>
          <div className="border-t text-white font-nova_square border-b border-l mt-6 p-3 pb-4 text-[2rem] sm:block hidden rounded-lg border-[#09FBD3] shadow-lg shadow-[#09FBD3] shadow-r-none w-1/2 md:text-[2.5rem]">
            Galactic Insignia
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;