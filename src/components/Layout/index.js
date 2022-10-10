import React from 'react';

const Layout = ({ children, id }) => {
  return (
    <section id={id} className="min-h-screen">
      {children}
    </section>
  );
};

export default Layout;
