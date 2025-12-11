import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black backdrop-blur-lg sticky top-0 z-50 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* LOGO */}
        <Link to="/">
          <img
            src="/Logo.png"
            alt="Logo"
            className="w-full h-10 hover:scale-110 transition duration-300"
          />
        </Link>

        {/* NAVIGATION */}
        <nav>
          <ul className="flex space-x-6 font-mono text-sm text-white">
            <NavItem to="/#Home" hash>Home</NavItem>
            <NavItem to="/#About" hash>About</NavItem>
            <NavItem to="/#Services" hash>Services</NavItem>
            <NavItem to="/#Projects" hash>Projects</NavItem>
            <NavItem to="/#Contact" hash>Contact</NavItem>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

const NavItem = ({ to, children, hash }) => {
  const Component = hash ? HashLink : Link;

  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      className="relative group"
    >
      <Component
        smooth={hash}
        to={to}
        className="hover:text-lime-400 transition"
      >
        {children}
      </Component>

      {/* NEON UNDERLINE */}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full bg-lime-400 transition-all duration-300"></span>
    </motion.li>
  );
};

export default Header;
