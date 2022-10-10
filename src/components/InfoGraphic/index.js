import React from 'react';

const InfoGraphic = ({ desc = '', imgUrl = '', reverse = false }) => {
  return (
    <div
      className={`flex  ${
        reverse ? 'flex-row-reverse' : ''
      } justify-center info-graphic`}
    >
      <p className={`${reverse ? 'text-left' : 'text-right'} w-1/4 mt-3`}>
        {desc}
      </p>
      <img
        src={imgUrl}
        alt="info-1"
        className={`rounded-full ${reverse ? 'mr-7' : 'ml-7'}`}
      />
    </div>
  );
};

export default InfoGraphic;
