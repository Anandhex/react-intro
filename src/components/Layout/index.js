import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import arrow from '../../assets/svgs/arrow.svg';

export const prevNextLinks = {
  start: {
    prev: 'feedback',
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
    label: "Early 90's",
  },
  intermediateWeb: {
    prev: 'initialWeb',
    next: 'modernWeb',
    label: "Early 2010's",
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
    next: 'frameWorks',
    label: 'How Modern Web handles Web?',
  },
  frameWorks: {
    prev: 'tacklesModernWeb',
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
    next: 'feedback',
    label: "Q&A's",
  },
  feedback: {
    prev: 'qa',
    next: '',
    label: 'Feedback?',
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

const Layout = ({ children, id, background = '' }) => {
  const navigate = useNavigate();
  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      id={id}
      className={`min-h-screen snap-container ${background}`}
    >
      <span className="flex justify-end items-end  pr-12 top-4 font-bold absolute right-0">
        <span className="text-4xl">
          {Object.keys(prevNextLinks).findIndex((key) => key === id) + 1}
        </span>
        <span className="text-2xl">/</span>
        {Object.keys(prevNextLinks).length}
      </span>
      {children}

      <button
        onClick={() => navigate(`/${prevNextLinks[id]?.prev}`)}
        className="px-5 py-4 shadow-lg mb-4  fixed bottom-0 left-[48%]  rounded-full  mr-3 bg-[#F94E34] text-white font-bold hover:bg-yellow-200 hover:text-black transition-all"
      >
        <img src={arrow} alt="left" />
      </button>
      {/* <div className="mx-5 font-bold">
          {Object.keys(prevNextLinks).findIndex((key) => key === id) + 1}/
          {Object.keys(prevNextLinks).length}
        </div> */}
      <button
        onClick={() => navigate(`/${prevNextLinks[id]?.next}`)}
        className="px-5 py-4 mb-4 shadow-lg fixed bottom-0 left-[52%] rounded-full bg-[#F94E34] text-white font-bold hover:bg-yellow-200 hover:text-black transition-all"
      >
        <img src={arrow} alt="right" className="rotate-180" />
      </button>
    </motion.section>
  );
};

export default Layout;
