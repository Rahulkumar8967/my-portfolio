import React from "react";
import heroImage from "./pic1RAHUL.png";
import { FaSmile } from "react-icons/fa";

const Home = () => {
  return (
    <div id="Home" className="min-h-screen w-full text-white px-6 py-12 md:scroll-mt-24">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full px-4 md:space-x-8 lg:space-x-12">
        
        {/* Left Section: Text Content */}
        <div className="flex flex-col justify-center h-full text-center md:text-left w-full md:w-1/2">
          <h2 className="text-4xl sm:text-6xl font-bold text-indigo-400">
            I'm a FullStack Developer
          </h2>
          <p className="text-slate-300 py-8 max-w-md text-lg sm:text-xl">
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
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Rahul's Profile"
            className="w-54 h-64 border-4 border-white object-cover rounded-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
