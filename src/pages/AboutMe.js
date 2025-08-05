// src/pages/AboutMe.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-pulse">
          I Build What Others Fear to Imagine.
        </h1>

        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
          I'm <span className="relative font-bold text-cyan-400 glow-text">Krishna</span> — a system architect, thinker, and creator.
          <br />
          Whether it’s RTL design, FPGA implementation, or high-performance logic,  
          <br />
          I make sure every bit counts.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
