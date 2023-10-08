import { motion } from "framer-motion";
import { EarthCanvas } from "../components/canvas";

import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Hero = () => {
  return (
    <div
      className={` flex-1 flex-col xl:flex-row h-screen right-0 bg-gallery bg-cover bg-no-repeat`}
    >
      <main>
        <div className="flex flex-col gap-2 justify-end items-end mx-4 px-4">
          <div>
            <img src="../logo.png" className="z-15 w-[200px] h-[200px]" />
            <p className="text-center uppercase font-nova_square text-[#09df9a] -mt-[14px]">3rd - 5th november</p>
          </div>
          <div className="flex flex-col mt-4 items-end justify-end">
            <h1 className={`${styles.heroHeadText} text-white text-[3rem] sm:text-[5rem] `}>
              <p className="uppercase text-[1.25rem] -mb-8 font-roboto">iit jodhpur&apos;s</p>
              <span className="text-8xl">
                Varchas&apos;23
              </span>
            </h1>
            <div className={`${styles.heroSubText} font-semibold  text-white-100 text-[1.5rem] font-roboto uppercase mx-auto text-center flex flex-row gap-4 sm:gap-0`}>
              Vigor
              <p className="mx-1">|</p>
              Valor
              <p className="mx-1">|</p>
              Victory
            </div>
          </div>
          <div className="border-t text-white font-nova_square border-b border-l mt-6 p-3 pb-4 text-5xl sm:block hidden rounded-lg border-[#09FBD3] shadow-lg shadow-[#09FBD3] shadow-r-none">
            Galactic Insignia
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
