import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import OpenCards from "./Components/OpenCards";
import OurServices from "./Components/OurServices";
import AboutUs from "./Components/AboutUs";
import Pricing from "./Components/Pricing";

//  --------------------------

/* const sections = [
  {
    name: "✅ Footer"
  },
  {
    name: "✅ Home Page"
  },
  {
    name: "✅ About Us"
  },
  {
    name: "✅ Services",
  },
  {
    name: "Pricing",
  },
  {
    name: "FAQs",
  },
  {
    name: "Testimonials",
  },
  {
    name: "Contact Us",
  },
  {
    name: "Footer",
  }
];

];
*/

export default function App() {
  // Separate inView and ref for each component
  const { ref: refAboutUs, inView: inViewAboutUs } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: refOurServices, inView: inViewOurServices } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: refPricing, inView: inViewPricing } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="overflow-hidden scroll-smooth pl-10 pr-10 pt-10 xl:pl-28 xl:pr-28 xl:pt-12 bg-color1">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <Navbar />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <OpenCards />
      </motion.div>

      <motion.div
        ref={refAboutUs}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inViewAboutUs ? 1 : 0, y: inViewAboutUs ? 0 : 50 }}
        transition={{ duration: 0.7 }}
      >
        <AboutUs />
      </motion.div>

      <motion.div
        ref={refOurServices}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: inViewOurServices ? 1 : 0,
          y: inViewOurServices ? 0 : 50,
        }}
        transition={{ duration: 0.7 }}
      >
        <OurServices />
      </motion.div>

      <motion.div
        ref={refPricing}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inViewPricing ? 1 : 0, y: inViewPricing ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <Pricing />
      </motion.div>
    </div>
  );
}
