import React from "react";
import { motion } from "framer-motion";
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
    <section
      id="my-portfolio"
      className="w-full min-h-screen text-white px-6 py-16 md:scroll-mt-24"
    >
      <motion.div
        className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.div
          className="text-center font-poppins"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold inline border-b-4 border-indigo-500">
            My Projects
          </h1>
          <p className="text-slate-300 md:text-lg text-sm mt-3">
            Browse through some of my recent projects below
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 sm:px-0 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <motion.div
              key={id}
              className="shadow-lg shadow-gray-700 rounded-lg overflow-hidden flex flex-col bg-gray-900 hover:shadow-indigo-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {/* Project Image */}
              <img
                src={src}
                alt="Project Preview"
                className="w-full h-64 object-cover rounded-t-md duration-200 hover:scale-105 cursor-pointer"
              />

              {/* Buttons */}
              <div className="flex items-center justify-center bg-gray-800 py-4">
                <motion.a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 mx-2 duration-200 hover:scale-105 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demo
                </motion.a>
                <motion.a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 mx-2 duration-200 hover:scale-105 bg-green-500 text-white rounded-md hover:bg-green-600 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
