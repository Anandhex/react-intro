import React from 'react';
import { Link } from 'react-router-dom';

const prevNextLinks = {
  start: {
    prev: '',
    next: 'speaker',
  },
  speaker: {
    prev: '',
    next: 'web',
  },
  web: {
    prev: 'speaker',
    next: '',
  },
};

const Layout = ({ children, id }) => {
  return (
    <section id={id} className="min-h-screen">
      {children}

      <div className="fixed bottom-0 flex justify-center w-full mb-5 items-center">
        <Link to={`/${prevNextLinks[id]?.prev}`}>
          <button className="px-5 py-3 shadow-2xl border rounded-full  bg-red-300 text-white font-bold hover:bg-yellow-200 hover:text-black transition-all">
            &lt;
          </button>
        </Link>
        <div className="mx-5 font-bold">
          {Object.keys(prevNextLinks).findIndex((key) => key === id) + 1}/
          {Object.keys(prevNextLinks).length}
        </div>
        <Link to={`/${prevNextLinks[id]?.next}`}>
          <button className="px-5 py-3 shadow-2xl border rounded-full bg-red-300 text-white font-bold hover:bg-yellow-200 hover:text-black transition-all">
            &gt;
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Layout;
