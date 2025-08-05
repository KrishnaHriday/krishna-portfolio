// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Qualifications from "./pages/Qualifications";
import Mindset from "./pages/Mindset";
import Hobbies from "./pages/Hobbies";
import WaterBackground from "./components/WaterBackground";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <WaterBackground />

        <nav className="nav-bar">
          <ul>
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/qualifications">Qualifications</Link></li>
            <li><Link to="/mindset">Mindset</Link></li>
            <li><Link to="/hobbies">Hobbies</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/qualifications" element={<Qualifications />} />
            <Route path="/mindset" element={<Mindset />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
