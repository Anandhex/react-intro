import React from 'react';

const Iframe = ({ link = '', title = '' }) => {
  return (
    <div>
      <a
        href={link}
        target={'_blank'}
        className="text-cyan-300 underline mb-5 inline-block"
      >
        {title}
      </a>

      <iframe
        key={2}
        className="border"
        src={link}
        width={300}
        height={300}
      ></iframe>
    </div>
  );
};

export default Iframe;
