import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0  ">
        <aside
          className={`${
            active ? "w-96" : "w-0"
          } transition-all shadow-xl min-h-screen z-20 bg-red-50 overflow-hidden`}
        >
          <div className="pt-5 flex items-end w-full ">
            <a
              onClick={() => setActive(false)}
              className="text-end w-full pr-5 cursor-pointer"
            >
              X
            </a>
          </div>
          <h3 className="ml-5 pt-3">Table of Contents</h3>
          <ul id="toc" className="ml-5 mt-3">
            <li key={1}>
              <Link to={"/"}>Start</Link>
            </li>
            <li key={2}>
              <Link to={"/speaker"}>Speaker</Link>
            </li>
            <li key={3}>
              <Link to={"/web"}>What is Web?</Link>
            </li>
          </ul>
        </aside>
      </header>
      {!active ? (
        <button
          className="fixed top-0 left-0  mt-5 ml-7 rotate-90 text-2xl"
          onClick={() => setActive(true)}
        >
          |||
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
