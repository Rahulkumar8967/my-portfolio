import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav id="home">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#Home"
              className="text-white text-xl md:text-2xl font-serif font-bold hover:opacity-90 transition duration-300"
            >
              Rahul
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6 mt-2">
            {[
              { href: "#Home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#my-portfolio", label: "Project" },
              { href: "#qualification", label: "Qualification" },
              { href: "#contact", label: "Contact" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white text-lg hover:opacity-80 transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)} // Toggles menu visibility on click
              className="text-white text-2xl hover:opacity-80 focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-gradient-to-r from-black via-gray-800 to-black z-50 flex flex-col items-center justify-center space-y-6">
          {/* Close Button */}
          <div className="absolute top-5 right-5 text-white text-3xl cursor-pointer" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </div>
          
          {[
            { href: "#Home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#my-portfolio", label: "Project" },
            { href: "#qualification", label: "Qualification" },
            { href: "#contact", label: "Contact" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={handleLinkClick}
              className="text-white text-3xl font-semibold hover:opacity-80 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
