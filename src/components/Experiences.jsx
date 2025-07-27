import React from 'react';


const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Mphasis',
      date: 'May 2025 – July 2025',
      description:
        'Building a resume-screening web application to automate hiring workflows for the HR team, reducing manual screening time and improving efficiency.',
      responsibilities: [
        'Developed a full-stack, AI-powered Resume Classifier Web App using React, Java Spring Boot, and Python to automate resume screening against job descriptions with customizable strictness levels',
        'Integrated GPT-3.5-Turbo via Azure OpenAI to evaluate and score resumes, returning structured JSON responses containing relevance scores and candidate insights.',
        'Designed scalable REST API architecture for modular interaction between frontend, backend, and Python services; enabled parsing of resumes in multiple formats (PDF, DOCX, HTML)',
        ' Implemented an efficient multi-format resume parsing pipeline using Java libraries and Microsoft’s markitdown, dynamically selecting and comparing text sources for optimal token input to the LLM',
        'Used PostgreSQL for persistent storage of job and resume data and enabled Excel export of ranked candidates, improving data accessibility and workflow efficiency for HR teams'
      ],
      technologies: [
        'React.js',
        'Java Spring Boot',
        'PostgreSQL',
        'REST APIs',
        'GPT-3.5 Turbo',
        'Python',
      ],
    },
    {
      title: 'Summer Intern',
      company: 'Mphasis',
      date: 'May 2024 – July 2024',
      description:
        ' Developed proof-of-concept for Resume-Classifier Application called Smart-CV-Analyzer',
      responsibilities: [
        ' Researched core ML and NLP techniques using HuggingFace Transformers and SpaCy',
        ' Built a prototype Q&A and resume screening system using prompt engineering and LLaMA 3 APIs',
      ],
      technologies: ['Proof-of-Concept','React.js', 'Hugging Face', 'NLP', 'SpaCy', 'LLaMA 3'],
    },
    // Add more as needed
  ];

  return (
    <section className="py-16 px-4 bg-transparent text-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-2">Experience</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Building real-world solutions and gaining hands-on experience in modern technology.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-purple-400 bg-opacity-15 p-6 rounded-xl shadow transition hover:shadow-lg"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-semibold text-white">
                  {exp.title}
                </h3>
              </div>
              <p className="text-base text-gray-300 mb-1">{exp.company}</p>
              <p className="text-base text-gray-400 mb-4">{exp.date}</p>
              <p className="text-gray-200 leading-relaxed mb-4">{exp.description}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-opacity-10 bg-purple-200 text-blue-200 px-3 py-1 rounded-full"
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

export default Experience;
