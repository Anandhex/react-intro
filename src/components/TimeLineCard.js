import React from 'react';

const TimeLineCard = ({
  reverse = false,
  year = '',
  img = '',
  content = '',
  title = '',
  children,
}) => {
  return (
    <div className={`flex items-center ${reverse ? 'flex-row-reverse' : ''} `}>
      <h4 className="text-3xl ">{year}</h4>
      <div className="h-[2px] w-52 bg-black"></div>
      <div className="w-[40ch] rounded-lg p-3 small-card bg-white">
        <h4 className="text-2xl font-bold flex items-center">
          {img && (
            <img
              className="inline-block mr-3"
              alt="logo"
              width={40}
              src={img}
            />
          )}
          <span className="inline-block">{title}</span>
        </h4>
        <hr className="border-b-2 my-2 border-t-0 border-[#F94E34]" />
        <p>{content ? content : children}</p>
      </div>
    </div>
  );
};

export default TimeLineCard;
