import Navbar from "./Components/Navbar";
import OpenCards from "./Components/OpenCards";
import OurServices from "./Components/OurServices";
import AboutUs from "./Components/AboutUs";
import Pricing from "./Components/Pricing";
import FAQ from "./Components/FAQ";
import Testimonials from "./Components/Testimonials";
import ContactUs from "./Components/ContactUs";

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
    name: "✅ Pricing",
  },
  {
    name: "✅ FAQs",
  },
  {
    name: "✅ Testimonials",
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

  return (
    <div className="overflow-hidden scroll-smooth pl-10 pr-10 pt-10 xl:pl-28 xl:pr-28 xl:pt-12 bg-color1">
      <Navbar />

      <OpenCards />

      <AboutUs />

      <OurServices />

      <Pricing />

      <FAQ />

      <Testimonials />

      <ContactUs />
    </div>
  );
}
