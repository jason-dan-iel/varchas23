import { motion } from "framer-motion";
import { EarthCanvas } from "../components/canvas";

import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Hero = () => {
  return (
    // <section className={`relative w-full h-screen mx-auto  flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
    //   <div
    //     className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    //   >
    //     <div className="flex flex-col justify-center items-center mt-5">
    //       <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
    //       <div className="w-1 sm:h-80 h-40 violet-gradient" />
    //     </div>

    //     <div>
    //       <h1 className={`${styles.heroHeadText} text-white`}>
    //         <span className="text-[#09fbd3] font-Londrina_sketch">Varchas23</span>
    //       </h1>
    //       <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    //         Vigor
    //         <br className="sm:block hidden" />
    //         Valor
    //         <br className="sm:block hidden" />
    //         Victory
    //       </p>
    //     </div>
    //     <motion.div
    //       variants={slideIn("right", "tween", 0.2, 1)}
    //       className="xl:flex-1 md:h-[550px] h-[350px]"
    //     >
    //       <EarthCanvas />
    //     </motion.div>
    //   </div>
    // </section>

    <div
      className={` flex xl:flex-row flex-col gap-10 overflow-hidden h-screen`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl"
      >
        <div className="flex mt-12 items-center gap-2">
          <div className="flex flex-col justify-center items-center mt-8">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white text-[5rem]`}>
              <span className="text-[#09fbd3] font-Londrina_sketch">
                Varchas23
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 text-[1.5rem]`}>
              Vigor 
              <br className="sm:block hidden" />
              Valor 
              <br className="sm:block hidden" />
              Victory
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Hero;
