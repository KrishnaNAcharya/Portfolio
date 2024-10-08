
import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-black">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-emerald-500"></div>
    </div>
  );
};

export default Loading;