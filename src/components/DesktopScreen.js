import React from 'react';
import { motion } from 'framer-motion';
import { textVariant } from './Avatar';

const DesktopScreen = ({ children }) => {
  return (
    <motion.div
      initial={'initial'}
      animate="final"
      variants={textVariant}
      className="desktop-screen bg-white"
    >
      <div className="h-6 bg-slate-500 w-full "></div>
      <section className="">{children}</section>
    </motion.div>
  );
};

export default DesktopScreen;
