// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-black to-zinc-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-black opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up">
          Hi, I'm Krishna Hriday
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 animate-fade-up animation-delay-200">
          Welcome to my digital space — aspiring VLSI engineer & creative coder.
        </p>
        <div className="mt-6 animate-fade-up animation-delay-400">
          <a
            href="/projects"
            className="inline-block px-6 py-3 text-sm font-medium text-white bg-zinc-800 rounded-lg hover:bg-zinc-700 transition"
          >
            View My Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
