import Input from "./Input";

export default function ContactUsForm() {
  return (
    <div className="flex flex-col mb-10 bg-color7 p-10 rounded-xl shadow-lg">
      <div>
        <p className="text-color1 text-xs font-medium">
          Feel free to reach out
        </p>
        <div>
          <p className="mt-5 text-3xl font-semibold text-color3">
            Feel welcome to engage in a conversation with us.
          </p>
          <p className="text-sm text-color3 mt-2">
            Got questions or feedback? We're all ears and here to assist! Just
            shoot us a message, and we'll make sure to get back to you within 24
            hours.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-10 w-9/12">
        <Input label="Name" id="name" required />
        <Input label="Email" id="email" type="email" required />
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-color4">Message</label>
          <input
            className="mt-2 pl-3 pb-28 rounded-md text-xs h-40"
            type="text"
            placeholder="Share your thoughts with us..."
          />
        </div>
      </div>
      <div className="mt-10 flex justify-center h-11">
        <button className="text-sm w-5/12 rounded-xl font-semibold transition-all duration-500 bg-color1 text-color8 hover:bg-color3 hover:text-color7">
          Send!
        </button>
      </div>
    </div>
  );
}
