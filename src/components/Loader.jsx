import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center">
      <div className="animate-ping h-4 w-4 bg-teal-500 rounded-full"></div>
    </div>
  );
};

export default Loader;
