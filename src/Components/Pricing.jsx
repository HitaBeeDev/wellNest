import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import Button from "./Button";

const ServiceData = [
  {
    id: 1,
    title: "Normal Subscription",
    description: "Choose any 2 services for",
    span: "$99/month",
    benefits: [
      "Choose 2 services for your wellness goals",
      "Fixed monthly fee for 2 premium services",
      "Tailored to focus on your top wellness needs",
      "Enjoy benefits without a long commitment",
    ],
  },

  {
    id: 2,
    title: "Premium Subscription",
    description: "Choose any 3 services with a 1-week trial for",
    span: "$149/month",
    benefits: [
      "Pick 3 services for your custom wellness package",
      "1-week trial to experience full benefits",
      "Unlock exclusive features and content",
      "Get holistic support across wellness areas",
    ],
  },
  {
    id: 3,
    title: "Premium Subscription",
    description: "Choose any 3 services with a 1-week trial for",
    span: "$199/month",
    benefits: [
      "Pick 3 services for your custom wellness package",
      "1-week trial to experience full benefits",
      "Unlock exclusive features and content",
      "Get holistic support across wellness areas",
    ],
  },
  {
    id: 4,
    title: "Individual Yoga Sessions",
    description:
      "Step onto your mat and let's flow together towards a happier, healthier you!",
    span: "10 sessions/month - $69/month",
    benefits: [
      "Individualized yoga sessions tailored to your unique needs",
      "Progress at your own pace, whether you're a beginner or experienced yogi",
      "Expert guidance and adjustments for proper posture and alignment",
      "Flexible scheduling to accommodate your lifestyle",
    ],
  },
  {
    id: 5,
    title: "Personal Fitness Plans",
    description:
      "Join our fitness journey and feel amazing, no matter your level!",
    span: "Monthly plan with bi-weekly check-ins - $89",
    benefits: [
      "Customized fitness plans for all levels",
      "Goal-oriented workouts to help you crush your goals",
      "Personalized guidance for a successful fitness journey",
      "Support and motivation every step of the way",
    ],
  },
  {
    id: 6,
    title: "Mental Wellness Therapy Sessions",
    description:
      "Join our fitness journey and feel amazing, no matter your level!",
    span: "Weekly sessions - $129",
    benefits: [
      "Tailored therapy sessions to meet your specific needs",
      "Effective techniques for emotional well-being",
      "Tools to cope with life's challenges",
      "Support for personal growth and healing",
      "Confidential and judgment-free environment",
    ],
  },
  {
    id: 7,
    title: "Diet Advice",
    description:
      "Boost energy and satisfaction with our Balanced Diet Advice sessions!",
    span: "Weekly sessions - $129",
    benefits: [
      "Tailored therapy sessions to meet your specific needs",
      "Effective techniques for emotional well-being",
      "Tools to cope with life's challenges",
      "Support for personal growth and healing",
      "Confidential and judgment-free environment",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="mt-28 flex items-center justify-center flex-col">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((data) => (
          <SwiperSlide key={data}>
            <div className="flex flex-col mb-20 group relative shadow-lg rounded-xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3"></div>
              <div
                key={data.id}
                className="flex flex-col w-full h-64 bg-color2 p-4"
              >
                <h2 className="text-lg font-bold">{data.title}</h2>
                <p className="my-2">
                  {data.description}{" "}
                  <span className="font-bold">{data.span}</span>
                </p>

                {data.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 my-1">
                    <div className="w-2 h-2 rounded-full bg-color6"></div>
                    <p className="text-sm">{benefit}</p>
                  </div>
                ))}
                <Button btnText={"Check it out!"} />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {ServiceData.map((data) => (
          <SwiperSlide key={data}>
            <div className="flex flex-col mb-20 group relative shadow-lg rounded-xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3"></div>
              <div
                key={data.id}
                className="flex flex-col w-full h-64 bg-color2 p-4"
              >
                <h2 className="text-lg font-bold">{data.title}</h2>
                <p className="my-2">{data.description}</p>
                <p>
                  <span>Basic</span> : 5 sessions/month for <span>$49</span>
                </p>
                <p>
                  Dip your toes into yoga with our beginner-friendly sessions.
                  Explore gentle poses and easy-to-follow flows that welcome you
                  with open arms into the practice.
                </p>

                {data.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 my-1">
                    <div className="w-2 h-2 rounded-full bg-color6"></div>
                    <p className="text-sm">{benefit}</p>
                  </div>
                ))}
                <Button btnText={"Check it out!"} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
