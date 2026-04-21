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
      <div className="pt-10 pl-10 pr-10 overflow-hidden scroll-smooth xl:pl-28 xl:pr-28 xl:pt-12">
        <Navbar />

        <main>
          <OpenCards />

          <AboutUs />

          <OurServices />

          <Pricing />

          <FAQ />

          <Testimonials />

          <ContactUs />
        </main>
      </div>
      <Footer />
    </div>
  );
}
