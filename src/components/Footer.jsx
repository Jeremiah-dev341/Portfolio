import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const socialLinks = [
  { id: 1, name: "GitHub", icon: <FaGithub />, url: "https://github.com/Jeremiah-dev341" },
  { id: 2, name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/jeremiah-kaberere-a0647b38a/" },
  { id: 4, name: "Phone", icon: <FaPhone />, url: "tel:+254799472453" },
];

const Footer = () => {
  return (
    <footer className="bg-black relative overflow-hidden border-t border-white/10">

      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto py-8 px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
      >
        {/* Left */}
        <p className="font-mono text-sm text-gray-400">
          &copy; {new Date().getFullYear()} JEREMIAH — All systems operational
        </p>

        {/* Right */}
        <div className="flex gap-6">
          {socialLinks.map(link => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 flex items-center justify-center rounded-full border border-lime-200 hover:border-lime-500 transition"
            >
              {/* Glow */}
              <span className="absolute inset-0 rounded-full bg-lime-400 blur-lg opacity-0 group-hover:opacity-40 transition"></span>
              {/* Icon */}
              <span className="relative z-10 text-lime-400 transition text-lg">
                {link.icon}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
