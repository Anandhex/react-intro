import React from 'react';

const Link = ({ label, link }) => {
  return (
    <a className="rounded-full mt-3 text-2xl border-2 px-4 py-2" href={link}>
      {label}
    </a>
  );
};

export default Link;
