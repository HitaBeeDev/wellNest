import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="flex flex-col gap-5 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-4 sm:mt-28 mt-10"
    >
      <div className="bg-color8 col-span-2 rounded-xl shadow-xl p-5">
        <div className="flex flex-row gap-3 items-center">
          <img className="w-10 h-10 rounded-md" src={user1} />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-[400] text-color1">Samantha Lee</p>
            <p className="text-xs text-color1 opacity-50">
              Premium Subscription
            </p>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-md text-color1 tracking-wider font-normal">
            Great Experience: They really went above and beyond with their care
            and support. Felt very personalized and professional!
          </p>

          <p className="text-xs mt-2 text-color3 font-light tracking-wider leading-relaxed">
            "The premium subscription exceeded my expectations right from the
            start. The introductory week offered a great glimpse into its
            extensive services, initiating a personalized wellness journey. It's
            not just the exclusive features that impress but also the
            exceptional support and care provided. Since joining, I've seen a
            significant boost in my overall well-being, proving the investment
            truly worthwhile. The detailed attention and personalized touch have
            greatly enhanced my daily life, making this subscription an
            excellent choice for enhancing wellness."
          </p>
        </div>
      </div>

      <div className="bg-color4 rounded-xl shadow-xl p-5">
        <div className="flex flex-row gap-3 items-center">
          <img className="w-10 h-10 rounded-md" src={user2} />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-[400] text-color7">Alex Johnson</p>
            <p className="text-xs text-color7 opacity-50">
              Normal Subscription
            </p>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-md text-color8 tracking-wider font-normal">
            Fantastic Service: Exceptionally personalized and professional care!
          </p>

          <p className="text-xs mt-2 text-color8 font-light tracking-wider leading-relaxed">
            "The $99/month normal subscription is like having a wellness buddy!
            You get to pick 2 services you love, enjoy fixed fees, personalized
            attention, and no pesky long-term contracts. It's the perfect fit
            for a flexible and friendly wellness journey!"
          </p>
        </div>
      </div>

      <div className="lg:row-span-3 bg-color7 rounded-xl shadow-xl h-fit p-5">
        <div className="flex flex-row gap-3 items-center">
          <img className="w-10 h-10 rounded-md" src={user3} />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-[400] text-color1">Jordan Kim</p>
            <p className="text-xs text-color1 opacity-50">Gold Subscription</p>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-md text-color1 tracking-wider font-normal">
            Exceptional Service: The Gold Subscription went above and beyond,
            exceeding all expectations with their unparalleled care and support!
            Their friendly approach, personalized attention, and professional
            service truly stood out.
          </p>

          <p className="text-xs mt-4 text-color3 font-light tracking-wider leading-relaxed">
            "After trying the Gold Subscription, I was pleasantly surprised. At
            $199/month, you can select 3 services for a personalized wellness
            package. The 1-week trial provided a great overview of the available
            services, making it easy to tailor my wellness journey. I was
            impressed not only by the exclusive features but also by the
            exceptional support and care. Since joining, I've seen a significant
            improvement in my well-being. The attention to detail and
            personalized approach have truly enriched my daily life. With
            holistic support across various wellness areas, this subscription is
            definitely worth it. I highly recommend it to anyone looking to
            enhance their wellness journey."
          </p>
        </div>
      </div>

      <div className="bg-color5 rounded-xl shadow-xl p-5">
        <div className="flex flex-row gap-3 items-center">
          <img className="w-10 h-10 rounded-md" src={user4} />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-[400] text-color7">Chris Rivera</p>
            <p className="text-xs text-color7 opacity-50">
              Mental Wellness Therapy Sessions
            </p>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-md text-color8 tracking-wider font-normal">
            My Experience with Therapy Sessions: A Journey to Mental Wellness
          </p>

          <p className="text-xs mt-2 text-color8 font-light tracking-wider leading-relaxed">
            Starting Mental Wellness Therapy Sessions at $129 has been
            life-changing. Weekly, I receive personalized sessions with
            effective techniques for emotional well-being. The support for
            personal growth is exceptional.
          </p>
        </div>
      </div>

      <div className="col-span-2 rounded-xl shadow-xl p-5 bg-color6">
        <div className="flex flex-row gap-3 items-center">
          <img className="w-10 h-10 rounded-md" src={user5} />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-[400] text-color7">Morgan Bailey</p>
            <p className="text-xs text-color7 opacity-50">Diet Advice</p>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-md text-color8 tracking-wider font-normal">
            My Diet Advice Experience: Transforming my Relationship with Food
            for a Healthier Lifestyle Journey
          </p>

          <p className="text-xs mt-2 text-color8 font-light tracking-wider leading-relaxed">
            My Diet Advice Journey: Transforming How I Approach Food - Week
            after week, investing just $129 per session, I discovered that these
            sessions offered more than just dietary guidelines; they became
            transformative sanctuaries where I unraveled the intricate web of my
            relationship with food, exploring the depths of emotional triggers
            and uncovering profound insights into my eating behaviors. Delving
            into emotional aspects, they equipped me with effective techniques
            beyond mere food choices, empowering me to navigate cravings and
            emotional eating patterns with grace and self-awareness. Through
            this journey, I've not only transformed my eating habits but also
            gained invaluable insights into holistic well-being.
          </p>
        </div>
      </div>
    </div>
  );
}
