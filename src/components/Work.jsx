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
      <div className="text-center font-poppins mb-4">
        <div>
          <h1 className="md:text-4xl  text-4xl font0bold inline border-b border-gray-500">
            Skills
          </h1>
          <p className="text-slate-300 md:text-lg text-sm -mt-2 py-5">
            My technical level
          </p>
        </div>
      </div>

      <div className="md:flex gap-12">
        <div className="bg-indigo-900 font-poppins flex flex-col items-center lg:h-[19rem] md:h-72 h-64 lg:w-[22.4rem] w-80 pt-4 rounded-3xl mb-6 md:mb-0">
          <h6 className="mb-4 md:mt-5">Frontend Developer</h6>
          <div className="grid grid-cols-2 gap-6 md:gap-x-12 gap-x-10">
            <SkillWithCheckIcon skill="HTML" level="" />
            <SkillWithCheckIcon skill="TailwindCss" level="" />
            <SkillWithCheckIcon skill="Javascript" level="" />
            <SkillWithCheckIcon skill="Git & Github" level="" />
            <SkillWithCheckIcon skill="React" level="" />
            <SkillWithCheckIcon skill="UI & UX design" level="" />
          </div>
        </div>

        <div className="bg-indigo-900 font-poppins flex flex-col items-center lg:h-[19rem] md:h-72 h-64 lg:w-[22.4rem] w-80 pt-4 rounded-3xl mb-6 md:mb-0">
          <h6 className="mb-4 md:mt-5">Backend Developer</h6>
          <div className="grid grid-cols-2 gap-6 md:gap-x-12 gap-x-10">
            <SkillWithCheckIcon skill="Node JS" level="" />
            <SkillWithCheckIcon skill="Express JS" level="" />
            <SkillWithCheckIcon skill="Mongo DB" level="" />
            <SkillWithCheckIcon skill="My SQL" level="" />
            <SkillWithCheckIcon skill="SQL" level="" />
            <SkillWithCheckIcon skill="API" level="" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillWithCheckIcon = ({ skill, level }) => {
  return (
    <div className="flex">
      <FontAwesomeIcon
        icon={faCheckCircle}
        className="text-green-500 mt-1 mr-2"
      />
      <div className="flex flex-col ml-3">
        <span>{skill}</span>
        <span className="text-[10px] text-slate-300">{level}</span>
      </div>
    </div>
  );
};

export default Skills;
