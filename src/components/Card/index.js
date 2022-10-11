import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const Card = ({ id, subtitle, title }) => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div>
      <motion.div layoutId={id} onClick={() => setSelectedId(id)}>
        <motion.h5>{subtitle}</motion.h5>
        <motion.h2>{title}</motion.h2>
      </motion.div>
      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>{subtitle}</motion.h5>
            <motion.h2>{title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;
