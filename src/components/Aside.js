import React from 'react';
import { motion } from 'framer-motion';
import { textVariantReverse } from './Avatar';
const Aside = ({ children }) => {
  return (
    <motion.aside
      className="w-4/12"
      initial="initial"
      animate="final"
      variants={textVariantReverse}
    >
      {children}
    </motion.aside>
  );
};

export default Aside;
