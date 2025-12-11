import { useState } from 'react'
import { BrowserRouter, BrowserRouter as Router} from 'react-router-dom' 
import './App.css'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsappButton from './components/WhatsappButton.jsx'
import BackToTop from './components/BackToTop.jsx'
import Services from './components/Services.jsx'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Footer />
            <BackToTop />
            <WhatsappButton />
        </BrowserRouter>
      </div>

    </>
  )
}

export default App;
