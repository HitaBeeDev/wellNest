import contactUs from "../assets/contactUs.gif";
import ContactUsForm from "./ContactUsForm";
import ContactUsInfo from "./ContactUsInfo";

export default function ContactUs() {
  return (
    <div className="mt-28 grid grid-cols-2 gap-10 items-center">
      <div>
        <ContactUsForm />
      </div>

      <div className="grid grid-rows-3 gap-10 justify-center">
        <div className="row-span-2">
          <img className="w-96" src={contactUs} />
        </div>

        <div className="row-span-1">
          <ContactUsInfo />
        </div>
      </div>
    </div>
  );
}
