import React from 'react';
import { motion } from 'framer-motion';
import { imageVariant, textVariant, textVariantReverse } from '../Avatar';
const InfoGraphic = ({ desc = '', imgUrl = '', reverse = false }) => {
  return (
    <div
      className={`flex  ${
        reverse ? 'flex-row-reverse' : ''
      } justify-center items-center info-graphic`}
    >
      <motion.p
        variants={reverse ? textVariantReverse : textVariant}
        initial={'initial'}
        animate="final"
        className={`${reverse ? 'text-left' : 'text-right'} w-1/3 mt-3`}
      >
        {desc}
      </motion.p>
      <motion.img
        variants={imageVariant}
        initial="initial"
        animate="final"
        src={imgUrl}
        height={200}
        width={200}
        alt="info-1"
        className={`rounded-full ${reverse ? 'mr-7' : 'ml-7'}`}
      />
    </div>
  );
};

export default InfoGraphic;
