// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-black/70 backdrop-blur-md fixed top-0 left-0 w-full z-50 px-6 py-4 border-b border-white/10">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">Krishna</h1>
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-cyan-300">Home</Link>
          <Link to="/about" className="hover:text-cyan-300">About</Link>
          <Link to="/projects" className="hover:text-cyan-300">Projects</Link>
          <Link to="/mindset" className="hover:text-cyan-300">Mindset</Link>
          <Link to="/hobbies" className="hover:text-cyan-300">Hobbies</Link>
          <Link to="/qualifications" className="hover:text-cyan-300">Qualifications</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/" onClick={closeMenu} className="block hover:text-cyan-300">Home</Link>
          <Link to="/about" onClick={closeMenu} className="block hover:text-cyan-300">About</Link>
          <Link to="/projects" onClick={closeMenu} className="block hover:text-cyan-300">Projects</Link>
          <Link to="/mindset" onClick={closeMenu} className="block hover:text-cyan-300">Mindset</Link>
          <Link to="/hobbies" onClick={closeMenu} className="block hover:text-cyan-300">Hobbies</Link>
          <Link to="/qualifications" onClick={closeMenu} className="block hover:text-cyan-300">Qualifications</Link>
        </div>
      )}
    </nav>
  );
}
