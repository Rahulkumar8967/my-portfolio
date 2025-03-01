import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] z-50 flex justify-between items-center px-6">
      {/* Logo */}
      <a
  href="#home"
  className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider text-white transition duration-300 transform hover:scale-110 hover:text-blue-400 drop-shadow-[0_0_10px_#3b82f6]"
>
  RAHUL
</a>


      {/* Desktop Links */}
      <div className="hidden lg:flex items-center space-x-8">
        {[
          { href: "#home", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#skills", label: "Skills" },
          { href: "#projects", label: "Projects" },
          { href: "#qualification", label: "Qualification" },
          { href: "#contact", label: "Contact" },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="relative text-white text-lg font-semibold transition-all duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-blue-400 before:transition-all before:duration-300 hover:before:w-full hover:text-blue-400"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? (
          <FaTimes className="text-white text-2xl transition duration-300 animate-pulse" />
        ) : (
          <FaBars className="text-white text-2xl transition duration-300" />
        )}
      </button>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-3/4 bg-gray-900 text-white z-50 flex flex-col items-center justify-center space-y-6 transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition-transform duration-500`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white text-3xl"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        {[
          { href: "#home", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#skills", label: "Skills" },
          { href: "#projects", label: "Projects" },
          { href: "#qualification", label: "Qualification" },
          { href: "#contact", label: "Contact" },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={handleLinkClick}
            className="text-white text-2xl font-semibold transition duration-300 hover:text-blue-400"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
