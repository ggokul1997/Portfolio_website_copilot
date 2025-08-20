import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full py-6 text-center text-muted text-sm bg-muted/40 border-t border-muted/30 mt-12 animated-border">
    <span>
      &copy; {new Date().getFullYear()} <span className="text-primary font-semibold">Your Name</span>. All rights reserved.
    </span>
  </footer>
);

export default Footer;
