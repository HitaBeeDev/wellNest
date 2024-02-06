import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import Menu from "../assets/menu.png";
import User from "../assets/user4.png";
import AuthModal from "./AuthModal";
import navLinks from "./navLinks";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-between cursor-pointer items-center relative transition-all duration-1000"
    >
      <img
        src={Logo}
        alt="Logo"
        className="w-24 lg:w-28 hover:scale-110 transition duration-1000"
      />

      <ul
        className={`mt-20 lg:mt-0 text-right lg:text-center lg:flex-row lg:flex lg:gap-20 text-md font-normal lg:text-sm text-text lg:items-center ${
          showMenu
            ? "fixed h-fit inset-0 z-50 flex flex-col items-center justify-center bg-color3 transition-all duration-1000"
            : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="text-color2 p-1 m-5 lg:p-1 lg:m-1 hover:scale-105 hover:border-b-2 hover:border-color2 transition duration-800"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </motion.a>
          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        <div>
          <img
            src={User}
            alt="User Profile"
            className="w-6 h-6 hover:scale-110 transition duration-500"
            onClick={toggleModal}
          />
          <AuthModal isOpen={isModalOpen} onClose={toggleModal} />
        </div>

        <motion.img
          src={Menu}
          alt="Menu Button"
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: showMenu ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden w-5 lg:w-28 hover:scale-110 transition duration-500"
          onClick={toggleMenu}
        />
      </div>
    </motion.nav>
  );
}
