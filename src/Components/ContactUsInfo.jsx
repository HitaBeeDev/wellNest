import mailIcon from "../assets/mail.png";
import callIcon from "../assets/call.png";
import ContactInfoItem from "./ContactInfoItem";

export default function ContactUsInfo() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <ContactInfoItem
        icon={mailIcon}
        label="Email Address:"
        value="contact@wellnest.com"
      />
      <ContactInfoItem
        icon={callIcon}
        label="Contact Number:"
        value="+1 (555) 123-4567"
      />
    </div>
  );
}
