import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
  return (
    <main>
      <Header />
      <Outlet></Outlet>
    </main>
  );
};

export default Root;
