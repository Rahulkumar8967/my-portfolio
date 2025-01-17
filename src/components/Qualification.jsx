// eslint-disable-next-line no-unused-vars
import { React, useState } from 'react';
import '../App.css';

const Qualification = () => {
    const [activeTab, setActiveTab] = useState('Experience');

    const handleExperienceClick = () => {
        setActiveTab('Experience');
    };

    const handleQualificationClick = () => {
        setActiveTab('Qualification');
    };

    return (
        <section
            id="qualification"
            className="mt-32 flex flex-col items-center text-white px-6 py-12 md:scroll-mt-24"
        >
            {/* Header Section */}
            <div className="text-center font-poppins mb-6">
                <h1 className="md:text-4xl  text-4xl font0bold inline border-b border-gray-500">Qualification</h1>
                <p className="text-slate-300 text-lg mt-2">My Personal Journey</p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-6 mb-8">
                <div
                    className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                        activeTab === 'Experience' ? 'bg-indigo-500 text-white' : 'bg-gray-700 text-slate-300'
                    } hover:bg-indigo-400`}
                    onClick={handleExperienceClick}
                >
                    <i className="fa-solid fa-graduation-cap"></i>
                    <span>Education</span>
                </div>
                <div
                    className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                        activeTab === 'Qualification' ? 'bg-indigo-500 text-white' : 'bg-gray-700 text-slate-300'
                    } hover:bg-indigo-400`}
                    onClick={handleQualificationClick}
                >
                    <i className="fa-solid fa-briefcase"></i>
                    <span>Experience</span>
                </div>
            </div>

            {/* Education Content */}
            {activeTab === 'Experience' && (
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="flex flex-col items-end">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
                            <h3 className="text-xl font-semibold">Elementary & Middle School</h3>
                            <p className="text-slate-400 mt-2">Gyan Sudha Saini AVM Arniya (Dausa)</p>
                            <span className="text-indigo-300 mt-2 block">
                                <i className="fa-regular fa-calendar mr-2"></i>2009-2018
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
                            <h3 className="text-xl font-semibold">High School</h3>
                            <p className="text-slate-400 mt-2">Abhinav Vidya Mandir Sr. Sec. School Bandikui (Dausa)</p>
                            <span className="text-indigo-300 mt-2 block">
                                <i className="fa-regular fa-calendar mr-2"></i>2018-2021
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Experience Content */}
            {activeTab === 'Qualification' && (
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="flex flex-col items-end">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
                            <h3 className="text-xl font-semibold">Full Stack Development Training</h3>
                            <p className="text-slate-400 mt-2">Physics Wallah</p>
                            <span className="text-indigo-300 mt-2 block">
                                <i className="fa-regular fa-calendar mr-2"></i>June 2023 - Sept. 2023
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
                            <h3 className="text-xl font-semibold">Web Development Internship</h3>
                            <p className="text-slate-400 mt-2">Code Clause, Pune, India</p>
                            <span className="text-indigo-300 mt-2 block">
                                <i className="fa-regular fa-calendar mr-2"></i>June 2024 - July 2024
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Qualification;
