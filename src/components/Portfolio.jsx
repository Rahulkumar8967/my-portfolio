import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: proj1,
      demoLink: "https://rahulfinancly.vercel.app/", 
      codeLink: "https://github.com/Rahulkumar8967/financly", 
    },
    {
      id: 2,
      src: proj3,
      demoLink: "https://rahulhired.vercel.app/",
      codeLink: "https://github.com/Rahulkumar8967/hirred",
    },
    {
      id: 3,
      src: proj2,
      demoLink: "https://github.com/Rahulkumar8967/rahulmessenger",
      codeLink: "https://github.com/Rahulkumar8967/rahulmessenger",
    },
    {
      id: 4,
      src: proj4,
      demoLink: "https://github.com/Rahulkumar8967/NewsAggregatorReact",
      codeLink: "https://github.com/Rahulkumar8967/NewsAggregatorReact",
    },
  ];

  return (
    <div
      id="my-portfolio"
      className="w-full mt-36 text-white px-6 py-12 md:scroll-mt-24"
      style={{ minHeight: "100vh" }} 
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="md:text-4xl text-4xl font-bold inline border-b border-gray-500">Projects</h1>
          <p className="py-6">Browse through some of my recent projects below</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden flex flex-col">
              <img
                src={src}
                alt="Project Preview"
                className="w-full h-64 object-cover rounded-t-md duration-200 hover:scale-105 cursor-pointer"
              />
              <div className="flex items-center justify-center bg-gray-800 py-4">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 mx-2 duration-200 hover:scale-105 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 mx-2 duration-200 hover:scale-105 bg-green-500 text-white rounded-md hover:bg-green-600 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
