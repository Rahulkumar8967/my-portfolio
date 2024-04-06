import React from "react";
import heroImage from "../assets/pic1RAHUL.png";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      id='Home'
      className="min-h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-56">
            I'm a FullStack Developer
          </h2>
          <p className="text-gray-500 py-6 max-w-md text-xl">
            I have excitement in learning new Technologies. Currently, I love to
            work on web applications using Technologies like React, Tailwind
            CSS, Express, and MongoDB.
          </p>
          <div>
            <button className="group text-white w-fit  px-6 py-2 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-2xl">
              Project
              <span className="group-hover: duration-300">
                <FaArrowRight size={30} className="ml-14" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="RahulImage"
            className="rounded-2xl mt-28 mx-auto md:w-80 py-3 w-80 h-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
