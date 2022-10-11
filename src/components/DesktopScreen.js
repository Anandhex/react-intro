import React from 'react';

const DesktopScreen = ({ children }) => {
  return (
    <div className="desktop-screen ">
      <div className="h-6 bg-slate-500 w-full "></div>
      <section className="p-5">{children}</section>
    </div>
  );
};

export default DesktopScreen;
