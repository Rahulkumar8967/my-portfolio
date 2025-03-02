import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rahul-kumar-saini-43a29624a/",
      bgColor: "bg-blue-700",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Rahulkumar8967",
      bgColor: "bg-gray-800",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:sainirahul8967@gmail.com",
      bgColor: "bg-red-600",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/rahulresume.pdf",
      download: true,
      bgColor: "bg-green-700",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <ul className="flex flex-wrap justify-center gap-4">
        {links.map(({ id, child, href, download, bgColor }) => (
          <li
            key={id}
            className={`flex items-center justify-center px-6 py-3 rounded-lg text-white font-semibold shadow-md transition-all hover:scale-105 ${bgColor}`}
          >
            <a
              href={href}
              className="flex items-center gap-2"
              download={download ? "true" : undefined}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;
