import { useState } from "react";
import faqData from "./faqData";
import backgroundImage1 from "../Assets/backgroundImage1.jpg";
import faqArrow from "../assets/faqArrow.png";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="flex justify-center items-center h-screen mt-28">
      <div className="relative flex flex-col lg:p-10 p-5 lg:w-8/12 shadow-md rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-75"
          style={{
            backgroundImage: `url(${backgroundImage1})`,
          }}
        ></div>
        <div className="relative">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-2">
              <button
                className="flex justify-between items-center text-left text-xs lg:text-sm text-color7 bg-opacity-80 bg-color1 font-medium w-full py-4 px-6 rounded-tl-lg rounded-tr-lg shadow"
                onClick={() => handleClick(index)}
                style={{ minHeight: "4rem" }}
              >
                {faq.question}
                <img
                  src={faqArrow}
                  className={`transition-transform duration-500 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  alt="Expand"
                  style={{ width: "20px", height: "20px" }}
                />
              </button>
              <div
                className={`duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="p-4 mt-1 bg-color1 rounded-bl-md rounded-br-md text-left">
                  <p className="lg:text-sm text-xs text-color7 font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
