import AboutTeamMotion from "./AboutTeamMotion";
import teamBg from "../Assets/teamBg8.jpg";
import AboutWellNest from "./AboutWellNest";
import qouteBg from "../Assets/bg1.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
  const { ref: refAboutUs, inView: inViewAboutUs } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const hoverVariants = {
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <motion.section
      ref={refAboutUs}
      variants={sectionVariants}
      initial="hidden"
      animate={inViewAboutUs ? "visible" : "hidden"}
      id="about"
      className="lg:grid lg:grid-cols-2 flex flex-col mt-28 gap-5"
    >
      <motion.div
        className="lg:bg-cover lg:bg-center hidden rounded-3xl p-5 w-fit lg:flex justify-center"
        style={{ backgroundImage: `url(${teamBg})` }}
        whileHover="hover"
        variants={hoverVariants}
      >
        <AboutTeamMotion />
      </motion.div>

      <div className="grid grid-rows-2">
        <motion.div whileHover={{ scale: 1.03 }} className="row-span-2">
          <AboutWellNest />
        </motion.div>

        <div className="lg:grid lg:-mt-10 lg:grid-cols-2 flex flex-col gap-3">
          <motion.div
            className="bg-cover bg-center rounded-3xl hover:scale-105 transition-all duration-700"
            style={{ backgroundImage: `url(${qouteBg})` }}
            whileHover="hover"
            variants={hoverVariants}
          >
            <p className="mt-2 text-sm font-bold leading-relaxed text-color2 p-6 pr-24">
              "Nourish your body, feed your soul, and watch your wellness
              bloom."
            </p>
          </motion.div>

          <motion.div
            className="text-sm bg-color3 text-color6 p-10 rounded-3xl hover:scale-105 transition-all duration-700"
            whileHover="hover"
            variants={hoverVariants}
          >
            <p>
              At WellNest, every breath is a reminder to cherish the harmony of
              mind, body, and soul.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
