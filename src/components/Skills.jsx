import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiSpringboot,
  SiReact,
  SiMysql,
  SiGit,
} from "react-icons/si";
import {
  FaCameraRetro,
  FaRunning,
  FaYarn,
  FaMusic,
} from "react-icons/fa";
import { DiJava } from "react-icons/di"; // Java icon


const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Java", icon: <DiJava /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Git", icon: <SiGit /> },
    ],
  },
  {
    category: "Other Interests",
    items: [
      { name: "Carnatic Violin", icon: <FaMusic /> },
      { name: "Photography", icon: <FaCameraRetro /> },
      { name: "Crochet", icon: <FaYarn /> },
      { name: "Running", icon: <FaRunning /> },
    ],
  },
];


const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-transparent text-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Additional Information</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((group, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] lg:w-[30%] p-6 rounded-3xl bg-opacity-10 bg-white backdrop-blur-md shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{group.category}</h3>
              <div className="flex flex-wrap gap-4">
                {group.items.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-opacity-40 bg-[#d6a8ff] text-white rounded-full text-sm shadow-md hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
