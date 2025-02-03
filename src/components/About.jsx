import React from 'react';

const About = () => {
    return (
        <div id='about' className='min-h-screen w-full mt-36 text-white px-6 py-12 md:scroll-mt-24'>
            <div className='text-center font-poppins'>
                <h1 className='md:text-4xl text-4xl font-bold inline border-b border-gray-500'>About Me</h1>
                <p className='text-slate-300 md:text-lg text-sm mt-2'>Passionate Developer & Problem Solver</p>
            </div>

            <div className='md:mt-10 flex flex-col justify-center items-center text-center md:text-left'>
                <p className='md:w-[40rem] w-80 md:mb-6 mb-4 lg:text-base text-sm'>
                    Hello! I'm a dedicated MERN Stack Developer with a passion for creating dynamic, user-centric web applications. 
                    With over a year of experience, I specialize in building scalable, high-performance web solutions.
                </p>

                <div className='flex flex-wrap justify-center gap-6 md:gap-10 mb-6'>
                    <div className='bg-indigo-900 w-36 h-24 flex flex-col justify-center items-center rounded-xl p-2'>
                        <i className="fa-solid fa-code lg:text-lg text-sm"></i>
                        <span className='mt-1 text-sm font-semibold'>Experience</span>
                        <span className='text-xs text-slate-300'>1+ Year in Development</span>
                    </div>
                    <div className='bg-indigo-900 w-36 h-24 flex flex-col justify-center items-center rounded-xl p-2'>
                        <i className="fa-solid fa-layer-group lg:text-lg text-sm"></i>
                        <span className='mt-1 text-sm font-semibold'>Projects</span>
                        <span className='text-xs text-slate-300'>5+ Completed</span>
                    </div>
                    <div className='bg-indigo-900 w-36 h-24 flex flex-col justify-center items-center rounded-xl p-2'>
                        <i className="fa-solid fa-headset lg:text-lg text-sm"></i>
                        <span className='mt-1 text-sm font-semibold'>Support</span>
                        <span className='text-xs text-slate-300'>Available 24/7</span>
                    </div>
                </div>

                <p className='md:w-[40rem] w-80 md:mb-6 mb-4 lg:text-base text-sm'>
                    I love solving real-world problems with code and constantly learning new technologies to enhance my skill set. 
                    My expertise lies in JavaScript, React.js, Node.js, Express.js, and MongoDB. I strive to create seamless, 
                    intuitive, and aesthetically pleasing applications that enhance user experience.
                </p>
                <p className='md:w-[40rem] w-80 md:mb-6 mb-4 lg:text-base text-sm'>
                    I also enjoy contributing to open-source projects, mentoring fellow developers, and exploring 
                    the latest trends in web development. When I’m not coding, you’ll find me reading tech blogs, 
                    engaging in hackathons, or brainstorming innovative project ideas.
                </p>

                <button className='bg-indigo-900 hover:bg-indigo-700 rounded-xl h-11 w-40 text-white'>
                    <a href='/rahulresume.pdf' download='rahulresume.pdf' className='no-underline'>
                        Download Resume <i className="fa-regular fa-file ml-1"></i>
                    </a>
                </button>
            </div>
        </div>
    );
};

export default About;
