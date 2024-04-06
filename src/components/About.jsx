import React from "react";

const About = () => {
  return (
    <div
      id='about'
      className="px-4 py-8"
      style={{ backgroundColor: "black", color: "white" }}
    >
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
              consectetur adipisicing elit. Cum velit repudiandae veniam! Illo,
              nobis repellat labore odit architecto, nostrum voluptas veritatis
              incidunt doloribus neque velit quia, ducimus iusto consectetur
              atque!
            </p>
          </div>

          {/* Fix this part of text white and background grey */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Featured Projects
              </h3>
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2 text-white">Project 1</h4>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quae, enim.
                </p>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2 text-white">Project 2</h4>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quae, enim.
                </p>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2 text-white">Project 3</h4>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quae, enim.
                </p>
              </div>
              {/* Add more projects or skills here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
