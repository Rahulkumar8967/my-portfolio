import { React, useState } from "react";
import "../App.css";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  const handleExperienceClick = () => {
    setActiveTab("Experience");
  };

  const handleQualificationClick = () => {
    setActiveTab("Qualification");
  };

  return (
    <section
      id="qualification"
      className="mt-32 flex flex-col justify-center items-center text-white md:scroll-mt-24 scroll-mt-24"
    >
      <div className="text-center font-poppins mb-3">
        <h1 className="md:text-4xl font-medium">Qualification</h1>
        <p className="text-slate-300 md:text-lg text-sm -mt-2">
          My Personel Journey
        </p>
      </div>

      <div className="flex md:gap-5 gap-4">
        <div
          className={`flex items-center cursor-pointer hover:text-indigo-400 ${
            activeTab === "Experience" ? "text-indigo-400" : ""
          }`}
          onClick={handleExperienceClick}
        >
          <i className="fa-solid fa-graduation-cap mr-2 mb-2 md:text-base text-sm"></i>
          <h5 className="md:text-xl text-lg">Education</h5>
        </div>

        <div
          className={`flex items-center cursor-pointer hover:text-indigo-400 ${
            activeTab === "Qualification" ? "text-indigo-400" : ""
          }`}
          onClick={handleQualificationClick}
        >
          <i className="fa-solid fa-briefcase mr-2 mb-2 md:text-base text-sm"></i>
          <h5 className="md:text-xl text-lg">Experience</h5>
        </div>
      </div>

      <div
        className={`relative grid grid-cols-2 md:gap-x-20 gap-x-12 mt-5 ${
          activeTab === "Qualification" ? "hidden" : ""
        }`}
      >
        {/* First Qualification (Left Side) */}
        <div className="flex justify-end">
          <div className="flex flex-col text-end mr-5">
            <h6 className="md:text-base text-sm">Elementary & Middle School</h6>
            <span className="text-slate-300 md:text-sm text-xs">
              Lav Kush Talent Academy, Salumber
            </span>
            <span className="mt-2 text-slate-300 md:text-sm text-xs">
              <i className="fa-regular fa-calendar mr-1 md:text-sm text-xs"></i>
              2008-2018
            </span>
          </div>
          <div className="-mr-8">
            <span className="qualification-rounder bg-indigo-400"></span>
            <span className="qualification-line bg-indigo-400"></span>
          </div>
        </div>

        {/* Second Qualification (Right Side) */}
        <div className="relative flex items-start mt-28">
          <div className="-ml-[1.8rem] md:-ml-[3.8rem]">
            <span className="qualification-rounder bg-indigo-400"></span>
            <span className="qualification-line bg-indigo-400"></span>
          </div>
          <div className="flex flex-col items-start ml-5">
            <h6 className="md:text-base text-sm">High School</h6>
            <span className="text-slate-300 md:text-sm text-xs">
              Guru Nanak Public School, Udaipur
            </span>
            <span className="mt-2 text-slate-300 md:text-sm text-xs">
              <i className="fa-regular fa-calendar mr-1 md:text-sm text-xs"></i>{" "}
              2018-2021
            </span>
          </div>
        </div>

        {/* third Qualification (Left Side) */}
        <div className="flex -mt-6">
          <div className="flex flex-col text-end mr-5">
            <h6 className="md:text-base text-sm">
              B.Tech, Computer Science & Engineering
            </h6>
            <span className="text-slate-300 md:text-sm text-xs">
              College of Technology & Engineering, Udaipur
            </span>
            <span className="mt-2 text-slate-300 md:text-sm text-xs">
              <i className="fa-regular fa-calendar mr-1 md:text-sm text-xs"></i>{" "}
              2021-present
            </span>
          </div>
          <div className="-mr-8">
            <span className="qualification-rounder bg-indigo-400"></span>
            <span className="qualification-line bg-indigo-400"></span>
          </div>
        </div>
      </div>

      <div
        className={`relative grid grid-cols-2 md:gap-x-20 gap-x-12 mt-5 ${
          activeTab === "Experience" ? "hidden" : ""
        }`}
      >
        {/* First Experience (Left Side) */}
        <div className="flex justify-end">
          <div className="flex flex-col text-end mr-5">
            <h6 className="md:text-base text-sm">
              Full Stack Development training
            </h6>
            <span className="text-slate-300 md:text-sm text-xs">Pregrad</span>
            <span className="mt-2 text-slate-300 md:text-sm text-xs">
              <i className="fa-regular fa-calendar mr-1 md:text-sm text-xs"></i>
              June 2023 - Sept. 2023
            </span>
          </div>
          <div className="-mr-8">
            <span className="qualification-rounder bg-indigo-400"></span>
            <span className="qualification-line bg-indigo-400"></span>
          </div>
        </div>

        {/* Second Experience (Right Side) */}
        <div className="relative flex items-start mt-28">
          <div className="-ml-[1.8rem] md:-ml-[3.8rem]">
            <span className="qualification-rounder bg-indigo-400"></span>
            <span className="qualification-line bg-indigo-400"></span>
          </div>
          <div className="flex flex-col items-start ml-5">
            <h6 className="md:text-base text-sm">Web Development Internship</h6>
            <span className="text-slate-300 md:text-sm text-xs">
              Virtual Coders, Ahmedabad
            </span>
            <span className="mt-2 text-slate-300 md:text-sm text-xs">
              <i className="fa-regular fa-calendar mr-1 md:text-sm text-xs"></i>
              June 2023 - Jul 2023
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
