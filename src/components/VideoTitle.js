import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[130px] inset-x-0 flex flex-col items-start justify-center text-white p-6 md:p-12 lg:pl-24">
        <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:block py-6 text-sm w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="hidden md:inline-block bg-red-600 text-white py-2 px-4 md:py-3 md:px-8 text-lg md:text-xl rounded-lg font-bold hover:bg-opacity-80 mr-4 md:mr-0">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white py-3 px-5 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

