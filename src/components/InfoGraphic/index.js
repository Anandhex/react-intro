import React from 'react';
import { motion } from 'framer-motion';
import { imageVariant, textVariant, textVariantReverse } from '../Avatar';
const InfoGraphic = ({
  desc = '',
  imgUrl = '',
  reverse = false,
  header = '',
}) => {
  return (
    <div
      className={`flex  ${
        reverse ? 'flex-row-reverse' : ''
      } justify-center items-center info-graphic`}
    >
      <div className="w-1/3 mt-3">
        <motion.h3
          className={`text-4xl font-bold mb-5 ${
            reverse ? 'text-left' : 'text-right'
          }`}
        >
          {header}
        </motion.h3>
        <motion.p
          variants={reverse ? textVariantReverse : textVariant}
          initial={'initial'}
          animate="final"
          className={`${reverse ? 'text-left' : 'text-right'} `}
        >
          {desc}
        </motion.p>
      </div>
      <motion.img
        variants={imageVariant}
        initial="initial"
        animate="final"
        src={imgUrl}
        height={500}
        width={500}
        alt="info-1"
        className={`rounded-full ${reverse ? 'mr-7' : 'ml-7'}`}
      />
    </div>
  );
};

export default InfoGraphic;
