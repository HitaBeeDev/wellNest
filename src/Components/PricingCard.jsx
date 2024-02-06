// import Button from "./Button";

// const priceDatas = [
//   {
//     id: 1,
//     title: "Normal Subscription",
//     description: "Choose any 2 services for",
//     span: "$99/month",
//     benefits: [
//       "Choose 2 services for your wellness goals",
//       "Fixed monthly fee for 2 premium services",
//       "Tailored to focus on your top wellness needs",
//       "Enjoy benefits without a long commitment",
//     ],
//   },

//   {
//     id: 2,
//     title: "Premium Subscription",
//     description: "Choose any 3 services with a 1-week trial for",
//     span: "$149/month",
//     benefits: [
//       "Pick 3 services for your custom wellness package",
//       "1-week trial to experience full benefits",
//       "Unlock exclusive features and content",
//       "Get holistic support across wellness areas",
//     ],
//   },
// ];

// export default function PricingCard() {
//   return (
//     <>
//       {priceDatas.map((data) => (
//         <div key={data.id} className="flex flex-col w-full h-64 bg-color2 p-4">
//           <h2 className="text-lg font-bold">{data.title}</h2>
//           <p className="my-2">
//             {data.description} <span className="font-bold">{data.span}</span>
//           </p>

//           {data.benefits.map((benefit, index) => (
//             <div key={index} className="flex items-center gap-2 my-1">
//               <div className="w-2 h-2 rounded-full bg-color6"></div>
//               <p className="text-sm">{benefit}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </>
//   );
// }
