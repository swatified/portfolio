import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="w-full flex justify-center gap-4 py-4 fixed top-0 z-50">
      <Link
        href="/"
        className="px-8 py-2 bg-neutral-200/80 hover:bg-neutral-300/80 
        dark:bg-neutral-800/80 dark:hover:bg-neutral-700/80 
        rounded-lg backdrop-blur-sm transition-colors"
      >
        Portfolio
      </Link>
      <Link
        href="/resume/Swati_Sharma.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-2 bg-neutral-200/80 hover:bg-neutral-300/80 
        dark:bg-neutral-800/80 dark:hover:bg-neutral-700/80 
        rounded-lg backdrop-blur-sm transition-colors"
      >
        Resume
      </Link>
    </nav>
  );
};

export default Navigation;