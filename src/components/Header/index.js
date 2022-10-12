import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { prevNextLinks } from '../Layout';

import { motion } from 'framer-motion';
import hamburger from '../../assets/pngs/more.png';
import close from '../../assets/svgs/close.svg';
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
          } transition-all shadow-md min-h-screen z-20 bg-slate-700 overflow-hidden relative`}
        >
          <button
            onClick={() => {
              setActive(false);
            }}
            className="px-4 py-4 rounded-full bg-white mt-3 flex justify-end cursor-pointer  shadow absolute right-[12px]"
          >
            <img src={close} alt="close" />
          </button>
          <h3 className="text-3xl ml-5 pt-3 mt-7 text-white">
            Site Navigation
          </h3>
          <ul id="toc" className="ml-5 pl-5 mt-3 list-disc">
            {Object.keys(prevNextLinks).map((key) => (
              <li
                key={key}
                className="text-xl text-[#d1d1d1] mb-3 hover:text-white hover:underline"
              >
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
      <motion.button
        initial={false}
        animate={active ? 'hidden' : 'visible'}
        variants={buttonVariants}
        className="fixed top-5 left-5  rounded-full flex items-center justify-center bg-white shadow-lg   px-3 py-2 text-center"
        onClick={() => setActive(true)}
      >
        <img src={hamburger} alt="menu" width={24} />
      </motion.button>
    </>
  );
};

export default Header;
