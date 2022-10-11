import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../components/Header';
import { AnimatePresence } from 'framer-motion';

const Root = () => {
  return (
    <main>
      <Header />
      <ScrollRestoration />
      <AnimatePresence exitBeforeEnter>
        <Outlet></Outlet>
      </AnimatePresence>
    </main>
  );
};

export default Root;
