import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* DATA (unchanged) */
const projectsData = [
  {
    id: 1,
    title: "Awesome Dev Project",
    description: "A full-stack system engineered with React, Node.js, and Tailwind. Built to scale and optimized for UI/UX.",
    liveUrl: "https://it-master-sphere-yhqx.vercel.app/",
    repoUrl: "https://github.com/Jeremiah-dev341/ItMasterSphere.git",
    techTags: ["React", "Node.js", "Tailwind"],
    screenshotUrl: "https://via.placeholder.com/600x400",
    alt: "Screenshot of Awesome Dev Project",
  },
];

const designsData = [
  { id: 1, title: "Business Card Design", imageUrl: "images/geopex.png", tags: ["Business", "Brand"], alt: "Business Card" },
  { id: 2, title: "Logo Concept", imageUrl: "images/lupa.png", tags: ["Logo", "Identity"], alt: "Logo" },
  { id: 3, title: "Roll-up Banner", imageUrl: "images/rollup.png", tags: ["Banner", "Print"], alt: "Banner" },
  { id: 4, title: "Poster Design", imageUrl: "images/poster.png", tags: ["Poster", "Graphic"], alt: "Poster" },
];

/* TAG COMPONENT */
const Tag = ({ text }) => (
  <span className="text-xs px-2 py-1 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/30">
    {text}
  </span>
);

/* TABS */
const Tabs = ({ selectedTab, setSelectedTab }) => {
  const tabs = ["All", "Dev", "Design"];
  return (
    <div className="flex space-x-4 mb-8">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setSelectedTab(tab)}
          className={`px-4 py-2 rounded-full border transition ${
            selectedTab === tab
              ? "bg-lime-400 text-black shadow-lg shadow-lime-400/30"
              : "border-white/20 hover:border-lime-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

/* DEV CARD */
const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl shadow-xl hover:shadow-lime-400/20 transition"
  >
    <h3 className="text-xl font-bold text-lime-400 mb-2">{project.title}</h3>
    <p className="opacity-80 mb-3">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">{project.techTags.map(tag => <Tag key={tag} text={tag} />)}</div>

    <div className="flex gap-3">
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
        className="bg-lime-400 text-black px-4 py-2 rounded-md hover:scale-105 transition"
      >
        Live <FaExternalLinkAlt />
      </a>
      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
        className="border border-lime-400 text-lime-400 px-4 py-2 rounded-md hover:bg-lime-400 hover:text-black transition"
      >
        Repo <FaGithub />
      </a>
    </div>
  </motion.div>
);

/* DESIGN GRID */
const DesignGrid = ({ designs }) => (
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {designs.map(design => (
      <motion.div
        key={design.id}
        whileHover={{ scale: 1.05 }}
        className="relative group rounded-xl overflow-hidden border border-white/10"
      >
        <img src={design.imageUrl} alt={design.alt} className="h-64 w-full object-cover" />
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 p-4 transition flex flex-col justify-end">
          <h4 className="text-lime-400 font-bold">{design.title}</h4>
          <div className="flex gap-2 mt-2">
            {design.tags.map(tag => <Tag key={tag} text={tag} />)}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

/* MAIN */
const Projects = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  return (
    <section id="Projects" className="min-h-screen bg-black text-white p-16 relative overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-5xl font-bold text-lime-400">LAB.PROJECTS</h2>
        <p className="opacity-70 mt-4 max-w-xl mx-auto font-mono text-sm">
          > Rendering selected experiments, interfaces, and visual systems...
        </p>
      </motion.div>

      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        {(selectedTab === "All" || selectedTab === "Dev") &&
          projectsData.map(p => <ProjectCard key={p.id} project={p} />)}

        {(selectedTab === "All" || selectedTab === "Design") &&
          <DesignGrid designs={designsData} />}
      </div>
    </section>
  );
};

export default Projects;
