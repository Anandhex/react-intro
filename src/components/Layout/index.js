import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const prevNextLinks = {
  start: {
    prev: '',
    next: 'speaker',
    label: 'Start!',
  },
  speaker: {
    prev: '',
    next: 'web',
    label: 'Speaker',
  },
  web: {
    prev: 'speaker',
    next: 'journeyOfWeb',
    label: 'What is Web?',
  },
  journeyOfWeb: {
    prev: 'web',
    next: 'initialWeb',
    label: 'Journey of Web',
  },
  initialWeb: {
    prev: 'journeyOfWeb',
    next: 'intermediateWeb',
    label: 'What is Initial Web',
  },
  intermediateWeb: {
    prev: 'initialWeb',
    next: 'modernWeb',
    label: 'What is Intermediate Web',
  },
  modernWeb: {
    prev: 'intermediateWeb',
    next: 'comparison',
    label: 'What is Modern Web?',
  },
  comparison: {
    prev: 'modernWeb',
    next: 'tacklesModernWeb',
    label: 'Comparison of Differnet Webpages',
  },
  tacklesModernWeb: {
    prev: 'comparison',
    next: 'timeLine',
    label: 'How Modern Web handles Web?',
  },
  timeLine: {
    prev: 'tacklesModernWeb',
    next: 'frameWorks',
    label: 'Framework Timeline',
  },
  frameWorks: {
    prev: 'timeLine',
    next: 'reactDeepDive',
    label: 'Comparison of Frameworks',
  },
  reactDeepDive: {
    prev: 'frameWorks',
    next: 'genericCode',
    label: 'React Deep Dive',
  },
  genericCode: {
    prev: 'reactDeepDive',
    next: 'qa',
    label: 'How to Code in React',
  },
  qa: {
    prev: 'genericCode',
    next: '',
    label: "Q&A's",
  },
};
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Layout = ({ children, id }) => {
  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 3 }}
      id={id}
      className="min-h-screen"
    >
      {children}

      <div className="fixed bottom-0 flex justify-center w-full mb-5 items-center">
        <Link to={`/${prevNextLinks[id]?.prev}`}>
          <button className="px-5 py-3 shadow-2xl border rounded-full  bg-red-300 text-white font-bold hover:bg-yellow-200 hover:text-black transition-all">
            &lt;
          </button>
        </Link>
        <div className="mx-5 font-bold">
          {Object.keys(prevNextLinks).findIndex((key) => key === id) + 1}/
          {Object.keys(prevNextLinks).length}
        </div>
        <Link to={`/${prevNextLinks[id]?.next}`}>
          <button className="px-5 py-3 shadow-2xl border rounded-full bg-red-300 text-white font-bold hover:bg-yellow-200 hover:text-black transition-all">
            &gt;
          </button>
        </Link>
      </div>
    </motion.section>
  );
};

export default Layout;
