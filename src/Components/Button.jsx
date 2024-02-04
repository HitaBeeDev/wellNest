import { motion } from "framer-motion";
import arrow from "../assets/arrow.png";
export default function Button({ btnText }) {
  return (
    <motion.div
      className="flex flex-row justify-center items-center p-2 gap-2 bg-white w-3/5 h-7 cursor-pointer rounded-full hover:bg-color6 transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <button className="text-xs">{btnText}</button>
      <motion.img
        src={arrow}
        alt="arrow icon"
        className="w-3 h-3 mt-1"
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      />
    </motion.div>
  );
}
