import React from 'react';

const Experience: React.FC = () => (
  <section id="experience" className="py-24 glass fade-in" tabIndex={-1} aria-labelledby="experience-heading">
    <div className="container max-w-4xl mx-auto px-4">
      <h2 id="experience-heading" className="text-3xl font-bold mb-8 text-primary">Experience</h2>
      <div className="border-l-2 border-primary/40 pl-6">
        <div className="mb-8">
          <div className="text-lg font-semibold text-primary">Agentic AI Developer Intern @ NT Global Solutions</div>
          <div className="text-sm text-muted mb-2">Apr 2025 - Present</div>
          <ul className="list-disc ml-5 text-muted">
            <li>Built agentic AI systems with LangChain, OpenAI, LlamaIndex, and LangSmith, improving usability through RAG pipelines, prompting, and workflow automation on real-world data.</li>
          </ul>
        </div>
        <div className="mb-8">
          <div className="text-lg font-semibold text-primary">IT Operations @ LULU Group</div>
          <div className="text-sm text-muted mb-2">Sep 2024 - Apr 2025</div>
          <ul className="list-disc ml-5 text-muted">
            <li>Set up and configured IT systems for business operations.</li>
            <li>Troubleshot and resolved supermarket POS issues.</li>
            <li>Managed SAP tasks to streamline operations.</li>
            <li>Provided cross department technical support.</li>
            <li>Maintained smooth IT operations through problem-solving.</li>
          </ul>
        </div>
        <div className="mb-8">
          <div className="text-lg font-semibold text-primary">MERN Stack Developer Intern @ Luminar Techno Lab</div>
          <div className="text-sm text-muted mb-2">Jan 2024 - Jun 2024</div>
          <ul className="list-disc ml-5 text-muted">
            <li>Developed Node.js applications and server backends with request/response handling.</li>
            <li>Used NPM for package management.</li>
            <li>Applied callbacks, event-driven programming, event loop, and event emitter concepts.</li>
            <li>Performed file system operations and utilized global objects/utility modules.</li>
            <li>Developed and scaled REST APIs.</li>
          </ul>
        </div>
        <div className="mb-8">
          <div className="text-lg font-semibold text-primary">Mechanical Engineering Designer @ Polmor Pvt Ltd</div>
          <div className="text-sm text-muted mb-2">Jan 2022 - Oct 2023</div>
          <ul className="list-disc ml-5 text-muted">
            <li>Mechanical engineering design and drafting for manufacturing projects.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
