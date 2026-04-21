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
        <div className="items-center justify-center hidden gap-3 mt-12 lg:flex">
          {cardTitles.map((title, index) => (
            <motion.div
              key={title}
              role="button"
              tabIndex={0}
              aria-label={`${title} service card`}
              className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-3xl ${
                index === expandedIndex ? "expanded" : ""
              }`}
              variants={cardVariants}
              initial="collapsed"
              animate={index === expandedIndex ? "expanded" : "collapsed"}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && handleCardClick(index)
              }
              whileHover={{ width: "400px", transition: { duration: 0.5 } }}
              style={{
                backgroundImage: `url(${cardImages[index]})`,
              }}
            >
              <div className="flex flex-col justify-end h-full card-content">
                <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                  <h2 className="p-2 text-base font-semibold text-white">
                    {title}
                  </h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center content-center justify-center col-span-1 gap-16 mt-20 lg:hidden">
          <div className="flex flex-col content-center justify-center gap-10">
            <h1 className=" text-color6 text-7xl">WellNest</h1>
            <p className="text-md text-color2 -mt-7">
              Discover Your Wellness Sanctuary at WellNest: Where Health and
              Harmony Unite.
            </p>
            <p className="text-sm leading-snug text-color2 text">
              At WellNest, we offer a curated selection of services to support
              your holistic well-being. From personalized yoga sessions and
              personal fitness plans to mental wellness therapy and balanced
              diet advice, we're committed to helping you prioritize self-care
              and achieve harmony in mind and body.
            </p>
          </div>

          <button className="flex items-center content-center justify-center w-10/12 h-12 mb-5 text-sm transition duration-500 ease-in-out rounded-lg text-color1 hover:font-semibold hover:bg-opacity-90 bg-color6">
            Schedule Your First Appointment
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default OpenCards;
