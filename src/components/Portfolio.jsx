import React from "react";
import proj1 from "../assets/doctorImage.png";
import proj2 from "../assets/Restro.png";
import proj3 from "../assets/doctorImage.png";
import proj4 from "../assets/Restro.png";

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: proj1 },
    { id: 2, src: proj2 },
    { id: 3, src: proj3 },
    { id: 4, src: proj4 },
  ];

  return (
    <div
      id="my-portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white bg-black mt-36"
      style={{ minHeight: "100vh" }} // Set minimum height to fill the viewport
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Portfolio
          </h1>
          <p className="py-6">
            Browse through some of my recent projects below
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 cursor-pointer"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-green-500 text-white rounded-md hover:bg-green-600">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
