import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-120 bg-black text-white flex relative overflow-hidden">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-cyan-500/10 to-purple-500/10 animate-pulse blur-3xl"></div>

      {/* Left Side */}
      <motion.div
        className="flex-1 flex flex-col items-start justify-center p-10 relative z-10"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >

        {/* Floating Title */}
        <motion.h1
          className="text-30 mb-5 font-bold tracking-wide"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          Hello, my name is Jeremiah
        </motion.h1>

        {/* Neon Subtitle */}
        <motion.p
          className="text-25 opacity-80 mb-10 text-lime-400"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          Full Stack Developer <br /> + Graphics Designer
        </motion.p>

        {/* Futuristic Button */}
        <motion.a
          href="#projects"
          className="relative inline-flex items-center justify-center rounded-50 px-10 py-3 bg-lime-500 text-black overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 bg-lime-300 blur-xl opacity-40 animate-ping"></span>
          <span className="relative z-10 font-bold">View My Work</span>
        </motion.a>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="flex-1 flex items-center justify-center relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >

        {/* Glow Aura */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-lime-400/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />

        {/* Floating Image */}
        <motion.img
          src="images/photo.png"
          alt="Jeremiah"
          className="w-90 h-full rounded-lg shadow-xl brightness-75 relative z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
