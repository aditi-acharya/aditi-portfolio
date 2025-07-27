import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resumePDF from '../assets/AditiPAcharya-Resume.pdf';
import { FaFilePdf } from 'react-icons/fa';
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section id="about" className="py-8 px-4 bg-transparent text-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Side: Large Name */}
        <div className="w-full lg:w-1/2 text-left">
          <h1 className="text-9xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Aditi<br />P<br />Acharya{' '}
            <span className="text-purple-300">
              <Typewriter
                words={['| Full-Stack Developer', '| CS Engineer', '| Violinist']}
                loop={true}
                cursor={true}
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>

        {/* Right Side: About Text */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-white">About Me</h2>

          <p className="text-lg leading-relaxed text-gray-200">
            Hi! I'm <span className="font-semibold text-purple-400">Aditi P Acharya</span>, a final-year Computer Science engineering student of PES University based in Bangalore. 
            I previously interned at <span className="font-semibold text-white">Mphasis</span>, where I developed a resume-screening application to support HR hiring processes.
          </p>

          <p className="text-lg leading-relaxed text-gray-200">
            I'm passionate about <span className="font-semibold text-white">full-stack development</span> and enjoy working with technologies like 
            <span className="font-semibold text-purple-300"> React.js </span>and<span className="font-semibold text-purple-300"> Spring Boot</span>. I also love building intelligent applications powered by <span className="font-semibold text-purple-300">AI</span>, which I’ve worked on extensively during my internship.
          </p>

          <p className="text-lg leading-relaxed text-gray-200">
            Outside of tech, I’m a junior-graded <span className="font-semibold text-white">Carnatic violinist,</span> currently pursuing senior level.
            In my free time, I enjoy <span className="font-semibold text-white">photography</span>, <span className="font-semibold text-white">crocheting</span>, and <span className="font-semibold text-white">running</span>.
          </p>

          <div className="text-lg text-gray-300 space-y-1">
            <p>
              📍 Bangalore, India &nbsp;|&nbsp; 📧 
              <a href="mailto:aditiacharya1806@gmail.com" className="text-purple-400 hover:underline ml-1">
                aditiacharya1806@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Quick Links:</span> &nbsp;
              <a href="https://github.com/aditi-acharya/" className="text-purple-400 hover:text-white">
                <FaGithub className="inline mr-1" />
              </a> &nbsp;
              <a href="https://www.linkedin.com/in/aditi-p-acharya-442584251/" className="text-blue-400 hover:text-white">
                <FaLinkedin className="inline mr-1" />
              </a> &nbsp;
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-white text-xl inline-block"
                title="View Resume"
              >
                <FaFilePdf className="inline mr-1" />
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
