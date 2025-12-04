import { useState } from 'react'
import Header from './components/Header.jsx'
import { BrowserRouter, BrowserRouter as Router} from 'react-router-dom' 
import './App.css'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </BrowserRouter>
      </div>

    </>
  )
}

export default App;
