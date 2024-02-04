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

function App() {
  return (
    <div className="scroll-smooth	pl-10 pr-10 pt-10 xl:pl-28 xl:pr-28 xl:pt-12 bg-color1">
      <Navbar />
      <OpenCards />
      <AboutUs />
      <OurServices />
      <Pricing />
    </div>
  );
}

export default App;
