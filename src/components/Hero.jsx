import { motion } from "framer-motion";

import { styles } from "../styles";
import { Hero_Img } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex lg:flex-row flex-col-reverse items-center gap-5 mb-28 md:mb-0`}
      >
        <div className="flex gap-5 sm:gap-8">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Akash</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I craft dynamic user interfaces,
              <br className="sm:block hidden" />
              seamless web experiences, and responsive websites.
            </p>
          </div>
        </div>
        <div>
          <img
            src={Hero_Img}
            alt="Profile image of Akash"
            className="rounded-full md:ml-10 w-[200px] lg:w-[300px] md:mt-0 object-cover"
          />
        </div>
      </div>

      <div className="absolute xs:bottom-6 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
