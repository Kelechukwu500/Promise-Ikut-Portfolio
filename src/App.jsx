import React from 'react'
import './index.css'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom'
import ProjectGallery from './Pages/ProjectGallery';
import About from './Pages/About';
import Contact from './Pages/Contact';
import HireMe from './Pages/HireMe';
import Experience from './Pages/Experience';

const App = () => {
  return (
   <>
   
    <Navbar />


     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest-projects" element={<ProjectGallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hire-me" element={<HireMe />} />
        <Route path="/WorkExperience" element={<Experience />} />

      </Routes>





    <Footer />
   
   </>
  )
}

export default App