// Home.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import heroImage from "./pic1RAHUL.png";
import { FaSmile } from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="Home"
      className=" min-h-screen w-full mt-15 text-white px-6 py-12 md:scroll-mt-24"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Left Section: Text Content */}
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-indigo-400 ">
            I'm a FullStack Developer
          </h2>
          <p className="text-slate-300 py-10  max-w-md text-lg sm:text-xl">
            I have excitement in learning new Technologies. Currently, I love to
            work on web applications using Technologies like React, Tailwind
            CSS, Express, and MongoDB.
          </p>
          <div>
            <button className="mt-6 px-6 py-3 bg-indigo-500 rounded-xl text-white hover:bg-indigo-400 transition duration-300">
              <a href="#contact" className="flex items-center">
                Contact Me <FaSmile className="ml-2" />
              </a>
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="mt-10 md:mt-0">
          <img
            src={heroImage}
            alt="RahulImage"
            className="rounded-2xl mx-auto w-80 h-80 md:w-96 md:h-96 border-4 border-indigo-400 hover:scale-105 transition duration-300 mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
