import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full mt-10 flex flex-col items-center text-white px-6 py-12 md:scroll-mt-24"
    >
      <motion.div
        className="text-center font-poppins"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold inline border-b-4 border-indigo-500">
          About Me
        </h1>
        <p className="text-slate-300 md:text-lg text-sm mt-2">
          Passionate Developer & Problem Solver
        </p>
      </motion.div>

      <motion.div
        className="md:mt-10 flex flex-col justify-center items-center text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="md:w-[40rem] w-80 md:mb-6 mb-4 lg:text-base text-sm">
          Hello! I'm a dedicated MERN Stack Developer with a passion for
          creating dynamic, user-centric web applications. With over a year of
          experience, I specialize in building scalable, high-performance web
          solutions.
        </p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {[
            { icon: "fa-code", title: "Experience", desc: "1+ Year in Development" },
            { icon: "fa-layer-group", title: "Projects", desc: "5+ Completed" },
            { icon: "fa-headset", title: "Support", desc: "Available 24/7" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-indigo-900 w-40 h-28 flex flex-col justify-center items-center rounded-2xl shadow-lg p-3 transition hover:scale-105 hover:shadow-indigo-500"
              whileHover={{ scale: 1.05 }}
            >
              <i className={`fa-solid ${item.icon} lg:text-2xl text-lg`}></i>
              <span className="mt-1 text-sm font-semibold">{item.title}</span>
              <span className="text-xs text-slate-300">{item.desc}</span>
            </motion.div>
          ))}
        </motion.div>

        <p className="md:w-[40rem] w-80 md:mb-6 mb-4 lg:text-base text-sm">
          I love solving real-world problems with code and constantly learning
          new technologies. My expertise lies in JavaScript, React.js, Node.js,
          Express.js, and MongoDB. I strive to create seamless, intuitive, and
          aesthetically pleasing applications.
        </p>
        <p className="md:w-[40rem] w-80 md:mb-6 mb-4 lg:text-base text-sm">
          I also enjoy contributing to open-source projects, mentoring fellow
          developers, and exploring the latest trends in web development. When
          I’m not coding, you’ll find me reading tech blogs, engaging in
          hackathons, or brainstorming innovative project ideas.
        </p>

        <motion.button
          className="bg-indigo-700 hover:bg-indigo-500 rounded-2xl h-12 w-44 text-white font-semibold shadow-md transition hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/rahulresume.pdf"
            download="rahulresume.pdf"
            className="no-underline flex items-center justify-center"
          >
            Download Resume <i className="fa-regular fa-file ml-2"></i>
          </a>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default About;
