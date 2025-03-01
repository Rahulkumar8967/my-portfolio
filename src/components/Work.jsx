// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section
      id="skills"
      className="mt-32 flex flex-col justify-center items-center text-white md:scroll-mt-28 scroll-mt-10"
    >
      {/* Header Section */}
      <div className="text-center font-poppins mb-4">
        <h1 className="md:text-4xl text-4xl font-bold inline border-b-4 border-gray-500">
          Skills
        </h1>
        <p className="text-slate-300 md:text-lg text-sm -mt-2 py-5">
          My technical level
        </p>
      </div>

      {/* Skills Section */}
      <div className="md:flex gap-12">
        {/* Frontend Card */}
        <SkillCard
          title="Frontend Developer"
          skills={[
            { name: "HTML", level: "Advanced" },
            { name: "CSS & Tailwind", level: "Advanced" },
            { name: "JavaScript", level: "Intermediate" },
            { name: "Git & GitHub", level: "Intermediate" },
            { name: "React.js", level: "Intermediate" },
            { name: "UI/UX Design", level: "Beginner" },
          ]}
        />

        {/* Backend Card */}
        <SkillCard
          title="Backend Developer"
          skills={[
            { name: "Node.js", level: "Intermediate" },
            { name: "Express.js", level: "Intermediate" },
            { name: "MongoDB", level: "Intermediate" },
            { name: "MySQL", level: "Beginner" },
            { name: "SQL", level: "Beginner" },
            { name: "REST API", level: "Intermediate" },
          ]}
        />
      </div>
    </section>
  );
};

// Reusable Skill Card Component
const SkillCard = ({ title, skills }) => {
  return (
    <div className="bg-indigo-900 font-poppins flex flex-col items-center lg:h-[22rem] md:h-80 h-72 lg:w-[23rem] w-80 pt-6 rounded-3xl mb-6 md:mb-0 shadow-lg hover:scale-105 transition duration-300">
      <h6 className="mb-4 md:mt-2 text-lg font-semibold">{title}</h6>
      <div className="grid grid-cols-2 gap-6 md:gap-x-12 gap-x-10">
        {skills.map((skill, index) => (
          <SkillWithCheckIcon key={index} skill={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

// Skill Item Component
const SkillWithCheckIcon = ({ skill, level }) => {
  return (
    <div className="flex items-start">
      <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 mt-1 mr-2" />
      <div className="flex flex-col">
        <span className="font-semibold">{skill}</span>
        <span className="text-[12px] text-slate-300">{level}</span>
      </div>
    </div>
  );
};

export default Skills;
