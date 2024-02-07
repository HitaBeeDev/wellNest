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
