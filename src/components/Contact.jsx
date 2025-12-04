import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const socialLinks = [
  { id: 1, name: "GitHub", icon: <FaGithub />, url: "https://github.com/Jeremiah-dev341" },
  { id: 2, name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/jeremiah-kaberere-a0647b38a/" },
  { id: 3, name: "Email", icon: <FaEnvelope />, url: "mailto:jeremiakinuthia341@gmail.com" },
  { id: 4, name: "Phone", icon: <FaPhone />, url: "tel:+254797933466" },
];

const Contacts = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="Contact" className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center p-10">

      {/* Animated Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>

      <motion.div
        className="relative z-10 max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-lime-400 mb-3">CONNECT.NODE</h2>
          <p className="font-mono text-sm opacity-70 mb-6">
            > Establishing secure communication channel...
          </p>

          {/* SOCIAL ORBS */}
          <div className="flex gap-4 mb-10">
            {socialLinks.map(link => (
              <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center rounded-full border border-white/20 hover:border-lime-400 transition"
              >
                <span className="absolute inset-0 rounded-full bg-lime-400 blur-lg opacity-0 group-hover:opacity-40 transition"></span>
                <span className="text-2xl relative z-10 group-hover:text-lime-400 transition">{link.icon}</span>
              </a>
            ))}
          </div>

          <p className="opacity-70">
            Want to collaborate, hire, or just vibe?  
            Drop your message into the signal stream and let’s talk.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {submitted && (
            <p className="text-lime-400 font-mono text-sm">
              > Transmission received. I will get back to you shortly!
            </p>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/60 border border-white/10 focus:ring-2 focus:ring-lime-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/60 border border-white/10 focus:ring-2 focus:ring-lime-400 outline-none"
          />

          <textarea
            name="message"
            required
            rows="4"
            placeholder="Type message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/60 border border-white/10 focus:ring-2 focus:ring-lime-400 outline-none resize-none"
          />

          <button
            type="submit"
            className="relative w-full py-3 font-bold rounded-lg bg-lime-400 text-black hover:scale-105 transition"
          >
            <span className="absolute inset-0 bg-lime-300 blur-xl opacity-30"></span>
            <span className="relative z-10">Transmit Message</span>
          </button>
        </form>

      </motion.div>
    </section>
  );
};

export default Contacts;
