import Navbar from "./Components/Navbar";
import OpenCards from "./Components/OpenCards";
import OurServices from "./Components/OurServices";
import AboutUs from "./Components/AboutUs";
import Pricing from "./Components/Pricing";
import FAQ from "./Components/FAQ";
import Testimonials from "./Components/Testimonials";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="bg-color1">
      <div className="overflow-hidden scroll-smooth pl-10 pr-10 pt-10 xl:pl-28 xl:pr-28 xl:pt-12">
        <Navbar />

        <OpenCards />

        <AboutUs />

        <OurServices />

        <Pricing />

        <FAQ />

        <Testimonials />

        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
