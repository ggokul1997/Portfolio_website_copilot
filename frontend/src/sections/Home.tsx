// ...existing code...
// ...existing code...


import React from 'react';
import { motion } from 'framer-motion';
import { MotionSection } from '../components/MotionSection';
import { MotionButton } from '../components/MotionButton';

const headline = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};


const Hero: React.FC = () => (
  <MotionSection id="home" className="min-h-[90vh] flex flex-col justify-center items-center text-center relative pt-24 pb-12 glass" stagger>
    <div className="container mx-auto px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-700 mb-4"
        variants={headline}
      >
        Hi, I'm <span className="text-primary">G Gokul</span>
      </motion.h1>
      <motion.p
        className="max-w-xl mx-auto text-lg md:text-2xl text-muted mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Full-Stack Developer & AI Engineer with expertise in designing and deploying enterprise AI agents using the MERN stack, LangChain, LangGraph, and OpenAI APIs. Experienced in building agentic RAG systems, knowledge in pipelines, and intuitive interfaces for non-technical users. Fast learner with an engineering mindset and a passion for transforming complex enterprise workflows into seamless user experiences.
      </motion.p>
      <div className="flex gap-4 justify-center">
        <MotionButton as="a" href="#projects" className="px-6 py-2 rounded-glass bg-primary text-white font-semibold shadow-glass hover:bg-red-700 focus-visible:outline-primary transition">
          View Projects
        </MotionButton>
        <MotionButton as="a" href="#contact" className="px-6 py-2 rounded-glass border border-primary text-primary font-semibold hover:bg-primary hover:text-white focus-visible:outline-primary transition">
          Contact
        </MotionButton>
      </div>
    </div>
  </MotionSection>
);

export default Hero;
