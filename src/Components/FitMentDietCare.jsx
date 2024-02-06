import Button from "./Button";

export default function FitMentDietCare({ url, header, description }) {
  return (
    <div
      className="h-72 hover:transition-all duration-1000 delay-100 hover:scale-95 bg-cover bg-center rounded-3xl flex flex-col justify-between p-10"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div>
        <h3 className="text-color2 font-semibold text-lg">{header}</h3>
        <p className="text-sm text-color2">{description}</p>
      </div>

      <Button btnText={"Check it out!"} />
    </div>
  );
}

// {
//   id: 4,
//   title: "Individual Yoga Sessions",
//   description:
//     "Step onto your mat and let's flow together towards a happier, healthier you! Dive into the world of yoga where every breath brings you closer to balance and bliss.",
//   message:
//     "No matter where you are on your journey, our yoga sessions are here to wrap you in warmth and guide you towards your brightest, most radiant self.",
//   items: [
//     {
//       item: ": 5 sessions/month for",
//       itemSpan1: "Basic",
//       itemSpan2: "$49",
//       itemDescription:
//         "Dip your toes into yoga with our beginner-friendly sessions. Explore gentle poses and easy-to-follow flows that welcome you with open arms into the practice.",
//     },
//     {
//       item: ": 10 sessions/month for",
//       itemSpan1: "Plus",
//       itemSpan2: "$79",
//       itemDescription:
//         "Take your practice up a notch with sessions designed to deepen your understanding of yoga. Stretch, strengthen, and sweat as you flow through different styles, always supported with modifications for every level.",
//     },
//     {
//       item: ": Unlimited sessions for",
//       itemSpan1: "Pro",
//       itemSpan2: "$129",
//       itemDescription:
//         "Dive deep into the heart of yoga with unlimited access to our treasure trove of classes. From soothing flows to dynamic power sessions, find your flow anytime, anywhere, with personalized tips to make every practice uniquely yours.",
//     },
//   ],
// },
