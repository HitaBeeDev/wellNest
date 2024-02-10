import {
  faLinkedin,
  faFacebookF,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    href: "https://linkedin.com",
    icon: faLinkedin,
    className: "p-3 text-color3 hover:text-color7 transition-all duration-500",
  },
  {
    href: "https://facebook.com",
    icon: faFacebookF,
    className: "p-3 text-color3 hover:text-color7 transition-all duration-500",
  },
  {
    href: "https://twitter.com",
    icon: faTwitter,
    className: "p-3 text-color3 hover:text-color7 transition-all duration-500",
  },
  {
    href: "https://instagram.com",
    icon: faInstagram,
    className: "p-3 text-color3 hover:text-color7 transition-all duration-500",
  },
  {
    href: "https://api.whatsapp.com/send?phone=YOURNUMBER",
    icon: faWhatsapp,
    className: "p-3 text-color3 hover:text-color7 transition-all duration-500",
  },
];

export default socialLinks;
