import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegramPlane, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:mb-6 py-12 flex flex-col justify-center items-center gap-3 text-secondary">
      <div className="flex justify-center items-center gap-10">
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href="https://linkedin.com/in/akash-shingare-723197181/"
          className="self-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-8 w-8 hover:text-white" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href="https://github.com/BLACKEYE-ASTRO"
          className="self-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-8 w-8 hover:text-white" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href="https://telegram.org"
          className="self-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane className="h-8 w-8 hover:text-white" />
        </motion.a>
      </div>
      <div className="flex justify-center items-center w-full">
        Coded with <FaHeart className="mx-1" /> by Akash
      </div>
    </div>
  );
};

export default Footer;
