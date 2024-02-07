import user1 from "../assets/user1.jpg";

const TestimonialsData = [
  {
    name: "Alex Johnson",
    receivedService: "Normal Subscription",
    reviewHeader: "Transformative Wellness Journey with My Chosen Services",
    reviewDescription:
      "Choosing the Normal Subscription was a game-changer for me. Having the flexibility to select two services each month allowed me to tailor my wellness routine perfectly. The value for the price is incredible, and I've never felt better!",
  },
  {
    name: "Samantha Lee",
    receivedService: "Premium Subscription",
    reviewHeader:
      "Unparalleled Support with Premium Care, Every Step of the Way",
    reviewDescription:
      "The Premium Subscription not only met but exceeded my expectations. The week-long trial was a fantastic way to get acquainted with the offerings, and I've been hooked ever since. The exclusive features and holistic support are worth every penny.",
  },
  {
    name: "Chris Rivera",
    receivedService: "Premium Subscription",
    reviewHeader: "A Holistic Approach to Wellness That Truly Cares",
    reviewDescription:
      "Opting for the Premium Subscription has provided me with a comprehensive wellness package that's tailored to my needs. The trial period was a great introduction, and the continued access to exclusive content has made all the difference in my wellness journey.",
  },
  {
    name: "Jordan Kim",
    receivedService: "Individual Yoga Sessions",
    reviewHeader: "Personalized Yoga Journey That Respects My Pace and Goals",
    reviewDescription:
      "The Individual Yoga Sessions have been transformative. Each session is tailored to my needs, helping me progress at my own pace. The expert guidance has improved my posture, flexibility, and mental peace significantly.",
  },
  {
    name: "Taylor Cruz",
    receivedService: "Personal Fitness Plans",
    reviewHeader: "Custom Fitness Plan That Pushes Me to My Best Self",
    reviewDescription:
      "The Personal Fitness Plans are exactly what I needed to stay motivated and on track with my fitness goals. The bi-weekly check-ins are a great touch, offering personalized guidance and support that make a real difference.",
  },
  {
    name: "Morgan Bailey",
    receivedService: "Mental Wellness Therapy Sessions",
    reviewHeader:
      "Compassionate and Effective Therapy for Life's Ups and Downs",
    reviewDescription:
      "Weekly Mental Wellness Therapy Sessions have been a cornerstone of my emotional well-being. Each session is tailored to my personal needs, providing effective techniques and support for coping with stress and fostering personal growth.",
  },
  {
    name: "Casey Smith",
    receivedService: "Diet Advice",
    reviewHeader: "Expert Diet Advice That's Transforming My Health and Habits",
    reviewDescription:
      "The Diet Advice service has been incredibly beneficial. Weekly sessions offer personalized guidance that's helping me make healthier choices and understand my body's needs better. It's been a judgment-free journey towards better health.",
  },
  {
    name: "Jamie Taylor",
    receivedService: "Self-Care Services",
    reviewHeader: "Elevating My Routine with Tailored Self-Care Practices",
    reviewDescription:
      "The Self-Care Services have introduced me to customized activities that nurture my body, mind, and soul. The monthly challenges keep me engaged and motivated, helping me achieve a balanced and fulfilling lifestyle.",
  },
  {
    name: "Riley Jordan",
    receivedService: "Personal Fitness Plans",
    reviewHeader: "Achieving Fitness Goals with Personalized Plans and Support",
    reviewDescription:
      "My experience with the Personal Fitness Plans has been nothing short of amazing. The personalized workouts and the supportive community have empowered me to reach new heights in my fitness journey.",
  },
  {
    name: "Drew Parker",
    receivedService: "Mental Wellness Therapy Sessions",
    reviewHeader: "Finding Balance and Support Through Tailored Therapy",
    reviewDescription:
      "Engaging in the Mental Wellness Therapy Sessions has provided me with invaluable support and techniques to manage stress and emotional challenges. It's been a pivotal part of my journey to mental wellness and self-discovery.",
  },
];

export default function TestimonialCard() {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4 mt-28">
      <div className="bg-color2 col-span-2">
        <div>
          <img className="w-10 h-10" src={user1} />
          <div>Nam</div>
          <div>Almis oldugu servis</div>
        </div>

        <div>
          <p>
            Header :: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <p>
            Description :: Lorem ipsum, dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
      </div>

      <div className="bg-color2">
        <div>
          <img className="w-10 h-10" src={user1} />
          <div>Nam</div>
          <div>Almis oldugu servis</div>
        </div>

        <div>
          <p>
            Header :: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <p>
            Description :: Lorem ipsum, dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
      </div>

      <div className="row-span-3 bg-color2">
        <div>
          <img className="w-10 h-10" src={user1} />
          <div>Nam</div>
          <div>Almis oldugu servis</div>
        </div>

        <div>
          <p>
            Header :: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <p>
            Description :: Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Description :: Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Description :: Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Description :: Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Description :: Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Description :: Lorem ipsum,
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="bg-color2">
        <div>
          <img className="w-10 h-10" src={user1} />
          <div>Nam</div>
          <div>Almis oldugu servis</div>
        </div>

        <div>
          <p>
            Header :: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <p>
            Description :: Lorem ipsum, dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
      </div>

      <div className="col-span-2 bg-color2">
        <div>
          <img className="w-10 h-10" src={user1} />
          <div>Nam</div>
          <div>Almis oldugu servis</div>
        </div>

        <div>
          <p>
            Header :: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <p>
            Description :: Lorem ipsum, dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
      </div>

      <div className="bg-color2 col-span-3">
        <div>
          <img className="w-10 h-10" src={user1} />
          <div>Nam</div>
          <div>Almis oldugu servis</div>
        </div>

        <div>
          <p>
            Header :: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <p>
            Description :: Lorem ipsum, dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
      </div>
    </div>
  );
}
