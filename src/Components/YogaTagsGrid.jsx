import arrow2 from "../assets/arrow2.png";

export default function YogaTagsGrid({ text }) {
  return (
    <div className="lg:p-4 p-1 lg:gap-3 gap-1 flex flex-row justify-center items-center border border-white rounded-3xl h-8">
      <p className="hover:scale-105 transition-all font-semibold text-white text-xs cursor-pointer">
        {text}
      </p>
      <img
        src={arrow2}
        alt="arrow icon"
        className="w-5 h-5 border rounded-full border-white p-1 cursor-pointer transition-all hover:bg-color2"
      />
    </div>
  );
}
