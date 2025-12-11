import { FaCode, FaPalette, FaLaptop } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Services() {
  const services = [
    {
      title: 'Web Development',
      desc: 'Building responsive and fast web applications using JavaScript and Python.',
      icon: <FaCode className="text-lime-500 text-4xl mb-4" />
    },
    {
      title: 'UI/UX Design',
      desc: 'Designing user-friendly interfaces with modern design principles.',
      icon: <FaLaptop className="text-lime-500 text-4xl mb-4" />
    },
    {
      title: 'Graphic Design',
      desc: 'Creating visual content for branding and social media.',
      icon: <FaPalette className="text-lime-500 text-4xl mb-4" />
    },
  ]

  return (
    <section id="Services" className="py-20 px-5 bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl animate-pulse" />
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-4xl font-bold mb-6 text-center text-lime-400"
      >
        WHAT I CAN DO
      </motion.h2>

      <div className="text-center mb-10">
        <a
          href="/My Resume.pdf"
          download
          className="inline-block bg-lime-500 text-black font-semibold px-6 py-3 rounded shadow hover:bg-lime-600 transition"
        >
          Download Resume
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-300 text-center">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
