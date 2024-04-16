// Home.js
import React from "react";
import heroImage from "../assets/pic1RAHUL.png";
import { FaArrowRight, FaSmile } from "react-icons/fa";

const Home = () => {
  return (
    <div id="Home" className="min-h-screen w-full text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a FullStack Developer
          </h2>
          <p className="text-gray-500 py-6 max-w-md text-xl">
            I have excitement in learning new Technologies. Currently, I love to
            work on web applications using Technologies like React, Tailwind
            CSS, Express, and MongoDB.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-2 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-2xl transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-xl">
              Say Hello
              <span className="group-hover: duration-300 ml-3">
                <FaSmile size={24} />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="RahulImage"
            className="rounded-2xl mt-28 mx-auto md:w-60 py-3 w-80 h-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
