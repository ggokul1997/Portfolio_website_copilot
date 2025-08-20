import React from 'react';

const Skills: React.FC = () => (
  <section id="skills" className="py-24 glass fade-in" tabIndex={-1} aria-labelledby="skills-heading">
    <div className="container max-w-4xl mx-auto px-4">
      <h2 id="skills-heading" className="text-3xl font-bold mb-8 text-primary">Skills</h2>
      {/* TODO: Render animated skills cloud from resume.json */}
      <div className="flex flex-wrap gap-3 justify-center">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium animate-pulse">TypeScript</span>
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium animate-pulse">React</span>
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium animate-pulse">Node.js</span>
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium animate-pulse">Tailwind CSS</span>
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium animate-pulse">Jest</span>
      </div>
    </div>
  </section>
);

export default Skills;
