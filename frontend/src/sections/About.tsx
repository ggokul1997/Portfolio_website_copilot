import React from 'react';

const About: React.FC = () => (
  <section id="about" className="py-24 glass fade-in" tabIndex={-1} aria-labelledby="about-heading">
    <div className="container max-w-3xl mx-auto px-4">
      <h2 id="about-heading" className="text-3xl font-bold mb-4 text-primary">About Me</h2>
      <p className="text-lg text-muted">
        {/* TODO: Load summary from resume.json */}
        Passionate developer with a focus on building accessible, performant web apps.
      </p>
    </div>
  </section>
);

export default About;
