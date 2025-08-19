import { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";

const Qualification = () => {
    const [activeTab, setActiveTab] = useState("Education");

    const qualifications = {
        Education: [
            {
                title: "High School",
                institution: "Abhinav Vidya Mandir Sr. Sec. School, Bandikui (Dausa)",
                duration: "2018 - 2021",
                extra: "Percentage: 97.80%",
                icon: "fa-solid fa-graduation-cap",
            },
            {
                title: "Bachelor of Technology (B.Tech) Computer Science Engineering",
                institution: "College Of Technology And Engineering,Udaipur",
                duration: "2022 - 2026",
                extra: "OGPA: 7.35",
                icon: "fa-solid fa-graduation-cap",
            },
        ],
        Experience: [
            {
                title: "Full Stack Development Training",
                institution: "Physics Wallah",
                duration: "June 2023 - Sept. 2023",
                extra: "",
                icon: "fa-solid fa-laptop-code",
            },
            {
                title: "Web Development Internship",
                institution: "Code Clause, Pune, India",
                duration: "June 2024 - July 2024",
                extra: "",
                icon: "fa-solid fa-briefcase",
            },
        ],
    };

    return (
        <section
            id="qualification"
            className="mt-32 flex flex-col items-center text-white px-6 py-12 md:scroll-mt-24"
        >
            {/* Header Section */}
            <motion.div 
                className="text-center font-poppins mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="md:text-4xl text-4xl font-bold inline border-b-4 border-indigo-500">
                    Qualification
                </h1>
                <p className="text-slate-300 text-lg mt-2">My Personal Journey</p>
            </motion.div>

            {/* Tabs Section */}
            <motion.div 
                className="flex justify-center gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                {["Education", "Experience"].map((tab) => (
                    <motion.div
                        key={tab}
                        className={`cursor-pointer flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-lg transition ${
                            activeTab === tab ? "bg-indigo-500 text-white" : "bg-gray-700 text-slate-300"
                        } hover:bg-indigo-400`}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setActiveTab(tab)}
                    >
                        <i className={tab === "Education" ? "fa-solid fa-graduation-cap" : "fa-solid fa-briefcase"}></i>
                        <span>{tab}</span>
                    </motion.div>
                ))}
            </motion.div>

            {/* Content Section */}
            <motion.div 
                className="grid md:grid-cols-2 gap-8 w-full max-w-4xl"
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {qualifications[activeTab].map((item, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <i className={`${item.icon} text-3xl text-indigo-400 mb-4`}></i>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-slate-400 mt-2">{item.institution}</p>
                        <span className="text-indigo-300 mt-2 block">
                            <i className="fa-regular fa-calendar mr-2"></i> {item.duration}
                        </span>
                        {item.extra && <div className="font-bold mt-2">{item.extra}</div>}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Qualification;
