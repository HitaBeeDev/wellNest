import { motion } from "framer-motion";
import YogaSessions from "./YogaSessions";
import FitMentDietCare from "./FitMentDietCare";
import fit from "../assets/fit.jpg";
import therapy1 from "../assets/therapy1.jpg";
import diet1 from "../assets/diet1.jpg";
import self from "../assets/self.jpg";

const fitMentData = [
  {
    url: fit,
    header: "Be Your Best Self With Customized Fitness Guidance!",
    description:
      "Unlock your potential and achieve your fitness goals with personalized plans tailored just for you!",
  },
  {
    url: therapy1,
    header: "Heal and Grow With Our Compassionate Therapists!",
    description:
      "Empower yourself and nurture your mind with the guidance of our expert therapists. You deserve to feel your best!",
  },
  {
    url: diet1,
    header: "Nourish Your Body and Soul for Overall Wellness!",
    description:
      "Discover the delicious path to harmony with our balanced diet advice. Nourish your body and soul!",
  },
  {
    url: self,
    header: "Radiate Joy and Confidence With Our Self-Care Tips!",
    description:
      "Embark on a journey of self-discovery, radiate positivity, and embrace self-care with kindness.",
  },
];

export default function OurServices() {
  return (
    <section
      id="services"
      className="mt-28 lg:grid lg:grid-cols-4 flex flex-col gap-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="col-span-4"
      >
        <YogaSessions />
      </motion.div>

      {fitMentData.map((data, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: index * 0.5 + 0.5 }}
        >
          <FitMentDietCare
            url={data.url}
            header={data.header}
            description={data.description}
          />
        </motion.div>
      ))}
    </section>
  );
}
