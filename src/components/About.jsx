import React from "react";
import Qualification from "./Qualification"; // Import the Qualification component

const About = () => {
  return (
    <div id="about" className="px-4 py-8 text-white font-bold">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline-block">
            About
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <p className="text-xl mt-5 mb-8">
              Hi there! I'm Rahul Kumar Saini, a second-year student passionate
              about full-stack development, particularly in the MERN stack. I
              have hands-on experience with MongoDB, Express.js, React.js, and
              Node.js, and I love building robust web applications that provide
              seamless user experiences.
            </p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              officia optio, corporis eius reprehenderit sit eum tenetur enim
              reiciendis at exercitationem pariatur atque, ea dolorum explicabo
              quas. Asperiores, nobis quibusdalorem20 Lorem ipsum dolor sit amet
              
            </p>
          </div>

          {/* Replace Featured Projects section with Qualification component */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Qualification />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
