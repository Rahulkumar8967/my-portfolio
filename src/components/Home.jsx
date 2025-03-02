import React from "react";
import { motion } from "framer-motion";
import heroImage from "./pic1RAHUL.png";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center px-6 sm:px-12 lg:px-20 py-16"
    >
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Section: Text Content */}
        <motion.div
          className="flex flex-col justify-center text-center md:text-left space-y-6 px-4 sm:px-8 md:px-12 lg:px-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-6 sm:mt-10 md:mt-16">
            Hi, I'm <span className="text-indigo-400">Rahul</span>
          </h1>

          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-indigo-300"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Full Stack Developer 🚀
          </motion.h2>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-md mx-auto md:mx-0">
            I build scalable web apps with{" "}
            <span className="text-indigo-400 font-semibold">ReactJs</span>,{" "}
            <span className="text-indigo-400 font-semibold">Tailwind CSS</span>,{" "}
            <span className="text-indigo-400 font-semibold">Express</span>,{" "}
            <span className="text-indigo-400 font-semibold">MongoDB</span>, and{" "}
            <span className="text-indigo-400 font-semibold">NodeJs</span>.
          </p>
          <motion.div
            className="mt-6 flex justify-center md:justify-start"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-indigo-500 rounded-xl text-white font-semibold text-lg shadow-lg hover:bg-indigo-400 transition duration-300"
            >
              Let's Connect <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.img
            src={heroImage}
            alt="Rahul's Profile"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-60 h-auto border-4 border-indigo-400 object-cover rounded-3xl shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
