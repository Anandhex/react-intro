import { AnimateSharedLayout, motion } from 'framer-motion';
import React, { useState } from 'react';

const Card = ({ id = '', subtitle = '', title = '' }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <motion.div
      className="card w-1/3 shadow-2xl rounded-sm  cursor-pointer"
      layout
      onClick={() => setOpen((open) => !open)}
    >
      <motion.img
        src="https://picsum.photos/seed/picsum/200/200"
        className="w-full rounded-t-sm"
      />
      <motion.h2 layoutId={id} className="p-3" layout="position">
        {title}
      </motion.h2>
      {isOpen && <motion.p className="p-3">{subtitle}</motion.p>}
    </motion.div>
  );
};

export default Card;
