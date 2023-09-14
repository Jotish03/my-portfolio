import React from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-10"> {/* Increased height */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <a
            href="https://www.linkedin.com/in/jotish-sharma-78a5431b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077b5] hover:text-[#00548f] mr-4"
          >
            <FiLinkedin size={32} />
          </a>
          <a
            href="https://github.com/Jotish03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6cc644] hover:text-[#28a745] mr-4"
          >
            <FiGithub size={32} />
          </a>
        </div>
        <div className="text-center md:flex-grow">
          <p>&copy; {new Date().getFullYear()} JS All Rights Reserved.</p>
        </div>
        <div className="text-center md:text-right">
          <p>Gangtok, Sikkim 737101, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
