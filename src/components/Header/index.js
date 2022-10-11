import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { prevNextLinks } from '../Layout';

import { motion } from 'framer-motion';

const variants = {
  visible: { opacity: 1, width: '24rem' },
  hidden: { opacity: 0, width: '0px' },
};
const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0  z-20">
        <motion.aside
          initial={false}
          animate={active ? 'visible' : 'hidden'}
          variants={variants}
          className={`${
            active ? 'w-96' : 'w-0'
          } transition-all shadow-xl min-h-screen z-20 bg-red-50 overflow-hidden`}
        >
          <div className="pt-5 flex items-end w-full ">
            <button
              onClick={() => {
                setActive(false);
              }}
              className="text-end w-full pr-5 cursor-pointer inline-block"
            >
              X
            </button>
          </div>
          <h3 className="ml-5 pt-3">Table of Contents</h3>
          <ul id="toc" className="ml-5 mt-3">
            {Object.keys(prevNextLinks).map((key) => (
              <li key={key}>
                <Link
                  to={key === 'start' ? '/' : key}
                  onClick={() => setActive(false)}
                >
                  {prevNextLinks[key].label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.aside>
      </header>
      <motion.div
        initial={false}
        animate={active ? 'hidden' : 'visible'}
        variants={buttonVariants}
        className="fixed top-0 left-0 pl-7 w-screen flex bg-white shadow-xl"
      >
        <button
          onClick={() => setActive(true)}
          className="rotate-90 text-2xl inline-block py-3"
        >
          |||
        </button>
      </motion.div>
    </>
  );
};

export default Header;
