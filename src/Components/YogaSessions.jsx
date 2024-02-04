import arrow from "../assets/arrow.png";
import bg from "../assets/b3.jpg";
import YogaTags from "./YogaTags";
import YogaUserCard from "./YogaUserCard";
import { motion } from "framer-motion";

export default function YogaSessions() {
  return (
    <div
      className="bg-cover bg-center rounded-3xl flex flex-col lg:flex-row justify-between content-center lg:p-12 p-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.div
        className="lg:w-9/12 w-fit flex flex-col gap-6 justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2
          className="lg:text-5xl text-xl text-color6 font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover Inner Peace Through Our Yoga Sessions
        </motion.h2>
        <motion.p
          className="text-color2 text-sm lg:w-6/12 w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Unwind and reconnect with yourself through yoga sessions designed for
          your well-being and inner peace.
        </motion.p>

        <motion.div
          className="flex flex-row justify-center items-center gap-2 bg-white lg:w-2/12 w-full lg:h-8 h-10 rounded-full hover:bg-color6 transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="text-sm">Start Program!</button>
          <motion.img
            src={arrow}
            alt="arrow icon"
            className="w-3 h-3 mt-1"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="lg:w-3/12 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <YogaUserCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <YogaTags />
        </motion.div>
      </motion.div>
    </div>
  );
}
