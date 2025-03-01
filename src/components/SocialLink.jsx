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
      style: "rounded-tr-md",
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
      style: "rounded-br-md",
      download: true,
      bgColor: "bg-green-700",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col fixed top-1/3 left-0 z-50">
      <ul>
        {links.map(({ id, child, href, style, download, bgColor }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-48 h-14 px-4 ml-[-130px] hover:ml-[-10px] hover:rounded-md duration-500 ${bgColor} ${style} transition-all`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white text-lg font-semibold hover:scale-105 transition-transform duration-300"
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
