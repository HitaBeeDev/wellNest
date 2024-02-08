export default function ContactUsInfo({ icon, label, value }) {
  return (
    <div className="bg-color4 p-4 w-10/12 rounded-lg flex flex-row items-center gap-5">
      <img className="w-8 h-8" src={icon} alt={label} />
      <div className="flex flex-col gap-1">
        <p className="text-sm text-color8 font-semibold">{label}</p>
        <p className="text-sm text-color8">{value}</p>
      </div>
    </div>
  );
}
