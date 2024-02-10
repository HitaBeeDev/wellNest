import { motion } from "framer-motion";
import YogaSessions from "./YogaSessions";
import FitMentDietCare from "./FitMentDietCare";
import { useInView } from "react-intersection-observer";
import fitMentData from "./fitMentData";

export default function OurServices() {
  const { ref: refOurServices, inView: inViewOurServices } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
    hidden: { opacity: 0, scale: 0.95 },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.section
      ref={refOurServices}
      variants={containerVariants}
      initial="hidden"
      animate={inViewOurServices ? "visible" : "hidden"}
      id="services"
      className="mt-28 lg:grid lg:grid-cols-4 flex flex-col gap-4"
    >
      <motion.div variants={itemVariants} className="col-span-4">
        <YogaSessions />
      </motion.div>

      {fitMentData.map((data, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          <FitMentDietCare
            url={data.url}
            header={data.header}
            description={data.description}
          />
        </motion.div>
      ))}
    </motion.section>
  );
}
