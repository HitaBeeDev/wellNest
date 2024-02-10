import logoFooter from "../assets/logow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialLinks from "./socialLinks";
import navLinks from "./navLinks";

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-color2 mt-28 flex flex-col justify-between gap-10 items-center p-10">
      <div>
        <img className="w-40" src={logoFooter} alt="Logo" />
      </div>

      <div>
        <p className="text-sm text-color3">
          WellNest, your go-to sanctuary for holistic well-being, where your
          health and happiness are our foremost priorities.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col gap-5 lg:gap-10">
        {navLinks.map((link) => (
          <button
            className="text-sm text-center mt-5 hover:text-color7 transition-all duration-500 text-color1"
            key={link.id}
            onClick={() => scrollToSection(link.id)}
          >
            {link.name}
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-row gap-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={link.className}
          >
            <FontAwesomeIcon icon={link.icon} size="1x" />
          </a>
        ))}
      </div>
    </footer>
  );
}
