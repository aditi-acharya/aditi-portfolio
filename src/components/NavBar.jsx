import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [{name:'About', to:'about'}, 'Experience', 'Projects', { name: 'Other', to: 'skills' }];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 ${
        isScrolled ? 'bg-inherit shadow-sm backdrop-blur-sm' : 'bg-opacity-20 bg-black'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-semibold text-white">My Portfolio</div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const name = typeof item === 'string' ? item : item.name;
              const to = typeof item === 'string' ? item.toLowerCase() : item.to;

              return (
                <Link
                  key={name}
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-40}
                  spy={true}
                  activeClass="text-[#30133b] font-semibold"
                  className="cursor-pointer text-gray-300 hover:text-black transition"
                >
                  {name}
                </Link>
              );
            })}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
