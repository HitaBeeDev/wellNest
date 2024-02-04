import AboutTeamMotion from "./AboutTeamMotion";
import teamBg from "../Assets/teamBg8.jpg";
import AboutWellNest from "./AboutWellNest";
import qouteBg from "../Assets/bg1.jpg";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="lg:grid lg:grid-cols-2 flex flex-col mt-28 gap-5"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="lg:bg-cover lg:bg-center hidden rounded-3xl p-5 w-fit lg:flex justify-center"
        style={{ backgroundImage: `url(${teamBg})` }}
      >
        <AboutTeamMotion />
      </motion.div>

      <div className="grid grid-rows-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="row-span-2"
        >
          <AboutWellNest />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="lg:grid lg:-mt-10 lg:grid-cols-2 flex flex-col gap-3"
        >
          <div
            className="bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: `url(${qouteBg})` }}
          >
            <p className="mt-2 text-sm font-bold leading-relaxed text-color2 p-6 pr-24">
              "Nourish your body, feed your soul, and watch your wellness
              bloom."
            </p>
          </div>

          <div className="text-sm bg-color3 text-color6 p-10 rounded-3xl">
            <p>
              At WellNest, every breath is a reminder to cherish the harmony of
              mind, body, and soul.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
