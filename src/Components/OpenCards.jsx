import { useState } from "react";
import { motion } from "framer-motion";
import cardTitles from "./cardTitles";
import yoga from "../assets/yoga.jpg";
import fitness from "../assets/fitness.jpg";
import therapy from "../assets/therapy.jpg";
import diet from "../assets/diet.jpg";
import care from "../assets/care.jpg";

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "400px",
    },
    collapsed: {
      width: "200px",
    },
  };

  const cardImages = [yoga, fitness, therapy, diet, care];

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="hidden mt-12 lg:flex justify-center items-center gap-10">
          {cardTitles.map((title, index) => (
            <motion.div
              key={title}
              className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-3xl ${
                index === expandedIndex ? "expanded" : ""
              }`}
              variants={cardVariants}
              initial="collapsed"
              animate={index === expandedIndex ? "expanded" : "collapsed"}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              whileHover={{ width: "400px", transition: { duration: 0.5 } }}
              style={{
                backgroundImage: `url(${cardImages[index]})`,
              }}
            >
              <div className="card-content h-full flex flex-col justify-end">
                <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                  <h2 className="text-base p-2 font-semibold text-white">
                    {title}
                  </h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:hidden mt-20 col-span-1 flex justify-center content-center items-center flex-col gap-16">
          <div className="flex flex-col justify-center content-center gap-10">
            <h1 className=" text-color6 text-7xl">WellNest</h1>
            <p className="text-md text-color2 -mt-7">
              Discover Your Wellness Sanctuary at WellNest: Where Health and
              Harmony Unite.
            </p>
            <p className="text-color2 text-sm text leading-snug">
              At WellNest, we offer a curated selection of services to support
              your holistic well-being. From personalized yoga sessions and
              personal fitness plans to mental wellness therapy and balanced
              diet advice, we're committed to helping you prioritize self-care
              and achieve harmony in mind and body.
            </p>
          </div>

          <button className="flex justify-center content-center items-center text-sm text-color1 hover:font-semibold hover:bg-opacity-90   bg-color6  rounded-lg h-12 w-10/12 mb-5 transition duration-500 ease-in-out">
            Schedule Your First Appointment
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default OpenCards;
