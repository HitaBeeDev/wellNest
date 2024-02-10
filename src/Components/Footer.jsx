import logoFooter from "../assets/logow.png";

export default function Footer() {
  const links = [
    { id: "about", name: "About Us" },
    { id: "services", name: "Our Services" },
    { id: "pricing", name: "Pricing" },
    { id: "faq", name: "FAQ" },
    { id: "testimonials", name: "Testimonials" },
    { id: "contactUs", name: "Contact Us!" },
  ];

  return (
    <nav className="bg-color2">
      <div>
        <img src={logoFooter} />
      </div>

      <div>
        {links.map((link) => (
          <a key={link.id} href={`#${link.id}`}>
            {link.name}
          </a>
        ))}
      </div>
      {/* <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">
                  BrandName
                </span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 ">
            <a
              href="#"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
              FaFacebookF
            </a>
            <a
              href="#"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
              FaInstagram
            </a>
            <a
              href="#"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
              FaTwitter
            </a>
          </div>
        </div>
      </div> */}
    </nav>
  );
}
