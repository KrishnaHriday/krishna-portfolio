import React from 'react';
//import '../styles/StarBackground.css';
import { motion } from 'framer-motion';

const Mindset = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-gradient-to-br from-black to-zinc-900">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">My Mindset</h1>
          <p className="text-xl max-w-2xl">
            I believe in continuous growth, embracing failure, and staying consistent with discipline. My mindset is shaped by both my struggles and my ambitions.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Mindset;
