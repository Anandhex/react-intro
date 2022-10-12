import React from 'react';

const Iframe = ({ link = '', title = '' }) => {
  return (
    <div>
      <a
        href={link}
        target={'_blank'}
        className="text-[#F94E34] underline mb-5 inline-block"
      >
        {title}
      </a>

      <iframe
        key={2}
        className="border bg-white"
        src={link}
        width={300}
        height={300}
      ></iframe>
    </div>
  );
};

export default Iframe;
