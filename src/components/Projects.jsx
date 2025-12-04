import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="min-h-screen bg-black text-white px-12 py-20 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl animate-pulse" />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-4xl font-bold mb-16 text-center text-lime-400"
      >
        LAB.PROJECTS
      </motion.h2>

      {/* DEV PROJECT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-4xl mx-auto bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/10 mb-24"
      >
        <h3 className="text-2xl font-semibold mb-4 text-lime-400">
          DEV MODULE
        </h3>

        <p className="text-gray-300 mb-6 font-mono text-sm">
          &gt; Displaying primary application deployment…
        </p>

        <div className="bg-black/50 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 border border-white/10">
          <motion.img
            src="images/thumbnail.png"
            alt="Dev project thumbnail"
            className="w-full md:w-56 rounded-lg object-cover"
            whileHover={{ scale: 1.05 }}
          />

          <div>
            <h4 className="text-xl font-semibold mb-2 text-white">
              My Live Website
            </h4>
            <p className="text-gray-400 mb-4">
              A modern website engineered for performance, responsiveness,
              and visual clarity.
            </p>

            <motion.a
              href="https://it-master-sphere-yhqx.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="inline-block bg-lime-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg shadow-lime-400/30"
            >
              Visit Website →
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* GRAPHICS */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <h3 className="text-2xl font-semibold mb-4 text-lime-400">
          DESIGN ARCHIVE
        </h3>

        <p className="text-gray-400 mb-10 font-mono text-sm">
          &gt; Loading graphic design artifacts…
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "images/geopex.png",
            "images/poster.png",
            "images/lupa.png",
            "images/rollup.png",
          ].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10"
            >
              <img
                src={img}
                alt="Design work"
                className="w-full h-56 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
