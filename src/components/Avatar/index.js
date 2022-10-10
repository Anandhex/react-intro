import React from 'react';

const Avatar = ({ userName = '', desc = '' }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://picsum.photos/seed/picsum/200/200"
        className="rounded-full"
        alt="speaker 1"
      />
      <h4 className="text-xl mt-3">{userName} </h4>
      <p className="text-center">{desc}</p>
    </div>
  );
};

export default Avatar;
