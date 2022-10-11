import React from 'react';
import { motion } from 'framer-motion';
export const imageVariant = {
  initial: {
    rotate: '540deg',
  },
  final: {
    rotate: '0deg',
  },
};

export const textVariant = {
  initial: {
    x: -500,
  },
  final: {
    x: 0,
  },
};
export const textVariantReverse = {
  initial: {
    x: 500,
  },
  final: {
    x: 0,
  },
};

const Avatar = ({ userName = '', desc = '' }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.img
        initial="initial"
        animate="final"
        variants={imageVariant}
        src="https://picsum.photos/seed/picsum/200/200"
        className="rounded-full"
        alt="speaker 1"
        height={200}
        width={200}
      />
      <motion.h4
        variants={textVariant}
        initial={'initial'}
        animate="final"
        className="text-xl mt-3"
      >
        {userName}{' '}
      </motion.h4>
      <motion.p
        variants={textVariant}
        initial={'initial'}
        animate="final"
        className="text-center"
      >
        {desc}
      </motion.p>
    </div>
  );
};

export default Avatar;
