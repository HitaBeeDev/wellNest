import { Swiper, SwiperSlide } from "swiper/react";
import ServiceData from "./ServiceData";
import checked from "../assets/checked.png";
import bg8 from "../Assets/bg8.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import Button from "./Button";

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="bg-cover bg-center mt-28 flex items-center flex-col gap-5"
    >
      <h2 className="text-md text-color2 font-semibold">
        Ready to Begin Your Wellness Journey?
      </h2>
      <p className="mb-4 text-sm text-color2">
        Choose the plan that fits your needs and start prioritising your
        well-being today!
      </p>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((service) => (
          <SwiperSlide key={service.id}>
            <div
              style={{ backgroundImage: `url(${bg8})` }}
              id="pricing"
              className="backdrop-blur-xl shadow-lg rounded-2xl flex flex-col justify-between h-96 lg:p-10 p-6 cursor-pointer mb-16 items-center"
            >
              <div className="text-left">
                <h2 className="text-color7 text-xl font-semibold">
                  {service.title}
                </h2>
                <p className="text-sm mb-5 text-color6">
                  {service.description}{" "}
                  <span className="font-bold">{service.span}</span>
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <img className="w-4 h-4" src={checked} alt="Checked" />
                    <p className="text-xs text-color8">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex w-full justify-center">
                <Button btnText={"Choose Plan!"} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
