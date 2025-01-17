// About.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import myImage from './pic1RAHUL.png';

const About = () => {
    return (
        <div id='about' className='min-h-screen w-full mt-36 text-white px-6 py-12 md:scroll-mt-24'>
            <div className='text-center font-poppins'>
                <h1 className='md:text-4xl text-4xl font-bold inline border-b border-gray-500'>About Me</h1>
                <p className='text-slate-300 md:text-lg text-sm -mt-0'>My Experience</p>
            </div>

            <div className='flex md:mt-6 md:flex-row flex-col justify-center items-center'>
                
                <img  
                    className="rounded-full mx-auto w-40 h-40 md:w-96 md:h-96 border-2 border-indigo-600 hover:scale-105 transition duration-300 mt-10" 
                    src={myImage} alt="Rahul" 
                />

                <div className='lg:ml-28 md:ml-10 md:flex flex-col text-center'>
                    <div className='flex gap-2 mb-4 justify-center md:justify-normal mt-6 md:mt-0'>
                        <div className='bg-indigo-900 lg:w-32 md:w-28 lg:h-24 md:h-24 w-24 h-20 flex flex-col justify-center items-center rounded-xl'>
                            <i className="fa-solid fa-medal lg:text-lg md:text-base text-sm"></i>
                            <span className='mt-1 md:text-base text-sm'>Experience</span>
                            <span className='md:text-xs text-[10px] text-slate-300'>1+ year</span>
                        </div>
                        <div className='bg-indigo-900 lg:w-32 md:w-28 lg:h-24 md:h-24 w-24 h-20 flex flex-col justify-center items-center rounded-xl'>
                            <i className="fa-solid fa-medal lg:text-lg md:text-base text-sm"></i>
                            <span className='mt-1 md:text-base text-sm'>Completed</span>
                            <span className='md:text-xs text-[10px] text-slate-300'>5+ Projects</span>
                        </div>
                        <div className='bg-indigo-900 lg:w-32 md:w-28 lg:h-24 md:h-24 w-24 h-20 flex flex-col justify-center items-center rounded-xl'>
                            <i className="fa-solid fa-medal lg:text-lg md:text-base text-sm"></i>
                            <span className='mt-1 md:text-base text-sm'>Support</span>
                            <span className='md:text-xs text-[10px] text-slate-300'>Online 24/7</span>
                        </div>
                    </div>
                    <p className='md:w-[26rem] w-80 md:mb-5 mb-4 lg:text-base text-sm md:text-left'>
                        Devoted MERN stack enthusiast. Crafting elegant, user-focused web solutions. Skilled in frontend and backend technologies, weaving creativity and efficiency into every project.
                    </p>
                    <button className='bg-indigo-900 hover:bg-indigo-700 rounded-xl h-11 w-40'>
                        <a href='../myResume.pdf' download='Rahul resume.pdf' className='text-white no-underline'>Download Resume <i className="fa-regular fa-file ml-1"></i></a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
