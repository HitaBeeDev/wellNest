export default function Input({ label, id, type = "text", required }) {
  return (
    <div className="flex flex-row items-center gap-6">
      <label htmlFor={id} className="text-xs font-medium text-color4">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        style={{ width: "100%" }}
        className="rounded-md h-8"
      />
    </div>
  );
}
