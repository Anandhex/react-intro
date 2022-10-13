import React from 'react';

const SmallCard = ({ title = '', subtitle = '', children }) => {
  return (
    <div className="max-w-[45ch] small-card   rounded-lg p-3 bg-white">
      <h3 className="text-2xl">{title}</h3>
      <hr className="border-b-2 my-2 border-t-0 border-[#F94E34]" />
      {subtitle ? <p>{subtitle}</p> : children}
    </div>
  );
};

export default SmallCard;
