import React from 'react';
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description: "This personal portfolio built with React and Tailwind CSS.",
    githubLink: "",
    technologies: ["React.js", "Tailwind CSS"],
    highlights: [
      "Fully responsive layout",
      "Smooth scroll and section navigation using react-scroll",
    ],
  },
  {
    title: "Fitness Streaming System",
    description: "A Real-time Fitness Tracking System using modern big data technologies",
    githubLink: "https://github.com/aditi-acharya/fitness-streaming-project",
    technologies: ["Streaming","Python", "Apache Kafka", "Apache Spark", "Stream-Processing", "Batch-PRocessing"],
    highlights: [
      "Simulated real-time fitness data pipelines with Kafka and Spark",
      "Analyzed user metrics using a combination of stream processing and batch processing to extract insights from both real-time and historical data",
    ],
  },
  {
    title: "Event Management Database System",
    description: "A GUI-based Event Management System with MySQL backend, supporting CRUD, triggers, and functions",
    githubLink: "https://github.com/aditi-acharya/event-management-system",
    technologies: ["MySQL", "Python", "Tkinter", "RDBMS", "SQL Triggers and Functions"],
    highlights: [
      "User-friendly GUI to perform all CRUD operations seamlessly",
      "Used MySQL as the backend database with structured tables and foreign key relationships",
      "Implemented SQL triggers to prevent invalid entries like too many performers or negative vendor fees",
      "Displayed event schedules and performance details dynamically through the GUI"
    ],
  },
  {
    title: "Smart CV Analyser",
    description: "A Resume-analyser application that uses LLM Llama3 to extract key information from resumes",
    githubLink: "https://github.com/aditi-acharya/smart-cv-analyser",
    technologies: ["React.js", "Llama3", "Prototype Q&A", "Hugging Face", "Prompt Engineering", "react-router-dom", "APIs"],
    highlights: [
      "Built with React.js for a dynamic user interface",
      "Utilizes Llama3 for advanced information extraction",
      "Integrated external APIs for real-time text analysis"
    ],
  },
  {
    title: "Cafe Management System",
    description: "A simple Cafe Management System with interactive features for managing orders.",  
    githubLink: "https://github.com/aditi-acharya/cafe-management-system",
    technologies: ["C", "Linked Lists", "Queues"],
    highlights: [
      "Utilized C programming for backend logic",
      "Use of Linked Lists and Queues for efficient data handling"
    ],
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-transparent text-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
        
        {/* Grid Layout for Projects */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="relative break-inside-avoid mb-6 p-6 bg-white/10 rounded-xl shadow-md backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-purple-400 hover:text-white"
                >
                  <FaGithub className="text-xl" />
                </a>
              )}
              <p className="text-gray-200 mb-3">{project.description}</p>
              {project.highlights && (
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                  {project.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-opacity-5 bg-purple-100 text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
