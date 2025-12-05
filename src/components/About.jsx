import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="About"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10 relative overflow-hidden"
    >
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>

      {/* Card */}
      <motion.div
        className="relative z-10 max-w-4xl w-full rounded-2xl border border-white/10 backdrop-blur-lg bg-white/5 p-10 shadow-xl"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.h2
          className="text-4xl font-bold text-lime-400 mb-6 tracking-wide"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          ABOUT ME
        </motion.h2>

        {/* Terminal Line */}
        <motion.p
          className="text-sm font-mono text-lime-300 mb-4 opacity-70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          &gt; Initializing developer profile...
        </motion.p>

        {/* Main Bio */}
        <motion.p
          className="text-lg leading-relaxed opacity-90 mb-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          I am <span className="text-lime-400 font-semibold">Jeremiah</span>, a passionate Full Stack Developer and Graphics Designer with a knack for creating visually appealing and user-friendly digital experiences. With expertise in both front-end and back-end technologies, I bring ideas to life through code and design. My goal is to build innovative solutions that not only meet client needs but also exceed their expectations.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed opacity-80 mb-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          On the design side, I focus on creating visuals that feel modern and intentional, whether it’s branding, UI layouts, or digital content. I’m also a researcher at heart, always learning new tools, improving workflows, and staying curious about how technology keeps evolving.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed opacity-80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          When I'm not coding or designing, I enjoy exploring new technologies, contributing to open-source projects, and collaborating with fellow developers and designers. Let's connect and create something amazing together!
        </motion.p>

        {/* Divider */}
        <motion.div
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-lime-500/40 to-transparent my-8"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />

        {/* Footer Line */}
        <p className="text-sm font-mono text-lime-400 opacity-70">
          &gt; Status: Available for collaboration
        </p>
      </motion.div>
    </section>
  );
};

export default About;
