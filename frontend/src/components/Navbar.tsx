import React, { useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // TODO: Add scrollspy logic and focus management
  return (
  <nav className="fixed top-0 left-0 w-full z-50 bg-muted/70 backdrop-blur shadow-glass border-b border-muted/40 animated-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        <a href="#home" className="text-primary font-bold text-lg tracking-widest focus:outline-primary">Portfolio</a>
        <div className="hidden md:flex gap-6">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="relative px-2 py-1 rounded focus-visible:outline-primary transition-colors hover:text-primary"
              tabIndex={0}
              aria-label={`Go to ${s.label}`}
            >
              {s.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden p-2 rounded focus-visible:outline-primary"
          aria-label="Open navigation menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          className="md:hidden bg-muted/95 backdrop-blur border-b border-muted/40 px-4 py-4 flex flex-col gap-4"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-2 py-2 rounded text-lg focus-visible:outline-primary transition-colors hover:text-primary"
              tabIndex={0}
              aria-label={`Go to ${s.label}`}
              onClick={() => setMobileOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
