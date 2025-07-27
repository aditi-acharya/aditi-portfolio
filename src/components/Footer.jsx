import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-opacity-10 bg-black text-white py-10 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h3 className="text-xl font-semibold text-white">Aditi P Acharya</h3>
        <p className="text-sm">
          Final-year Computer Science student | Full-Stack Developer | Based in Bangalore, India
        </p>
        <div className="flex justify-center space-x-4 text-sm">
          <a href="mailto:aditiacharya1806@gmail.com" className="hover:text-white transition">Email</a>
          <a href="https://github.com/aditi-acharya" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/aditi-p-acharya-442584251/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
        </div>
        <p className="text-xs text-white">
          © {currentYear} Aditi P Acharya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
