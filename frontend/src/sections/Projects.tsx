import React from 'react';

const Projects: React.FC = () => (
  <section id="projects" className="py-24 glass fade-in" tabIndex={-1} aria-labelledby="projects-heading">
    <div className="container max-w-5xl mx-auto px-4">
      <h2 id="projects-heading" className="text-3xl font-bold mb-8 text-primary">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-muted/60 rounded-glass shadow-glass p-6 flex flex-col items-start hover:scale-[1.03] transition-transform cursor-pointer">
          <div className="text-lg font-semibold text-primary mb-2">BranchGPT</div>
          <div className="text-sm text-muted mb-2">ChatGPT-like app with branching agent memory. Built a custom UI to spawn sidebar threads on selected text for contextual queries. Enabled parallel reasoning using LangChain agents and OpenAI Assistants.</div>
        </div>
        <div className="bg-muted/60 rounded-glass shadow-glass p-6 flex flex-col items-start hover:scale-[1.03] transition-transform cursor-pointer">
          <div className="text-lg font-semibold text-primary mb-2">Semantic Subtitle Translator</div>
          <div className="text-sm text-muted mb-2">AI-enhanced YouTube subtitle Chrome extension. Translates and injects real-time YouTube subtitles using LangChain & OpenAI.</div>
        </div>
        <div className="bg-muted/60 rounded-glass shadow-glass p-6 flex flex-col items-start hover:scale-[1.03] transition-transform cursor-pointer">
          <div className="text-lg font-semibold text-primary mb-2">E-commerce Platform</div>
          <div className="text-sm text-muted mb-2">Full MERN stack shopping platform with cart, login, and backend dashboard.</div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
