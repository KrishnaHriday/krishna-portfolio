// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Projects from './pages/Projects.jsx';
import Mindset from './pages/Mindset.jsx';
import Hobbies from './pages/Hobbies.jsx';
import Qualifications from './pages/Qualifications.jsx';
import Navbar from './components/Navbar.jsx';
import './tailwind.css'; // Tailwind styles

function App() {
  return (
    <Router>
      <div className="min-h-screen text-white font-sans bg-gradient-to-br from-black to-zinc-900">
        <Navbar />
        <div className="pt-20 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/mindset" element={<Mindset />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/qualifications" element={<Qualifications />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
