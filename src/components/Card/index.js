import { AnimateSharedLayout, motion } from 'framer-motion';
import React, { useState } from 'react';

const Card = ({
  id = '',
  subtitle = '',
  title = '',
  setSelectedCard,
  imgUrl = '',
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <motion.div
      className="card w-1/3 shadow-2xl rounded-md  cursor-pointer bg-white"
      layout
      animate={
        isOpen
          ? {
              margin: '0 auto',
            }
          : {}
      }
      onClick={() =>
        setOpen((open) => {
          const res = !open;
          if (!res) {
            setSelectedCard(null);
          } else {
            setSelectedCard(id);
          }
          return res;
        })
      }
    >
      <div>
        <motion.img
          src={imgUrl}
          className=" rounded-t-md w-full h-[200px] object-cover"
          width={200}
          height={200}
        />
      </div>
      <motion.h2
        layoutId={id}
        className="p-3 text-xl font-bold"
        layout="position"
      >
        {title}
      </motion.h2>
      {isOpen && (
        <>
          <motion.p className="p-3 ">{subtitle}</motion.p>
        </>
      )}
    </motion.div>
  );
};

export default Card;
