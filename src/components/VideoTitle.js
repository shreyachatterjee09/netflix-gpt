import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-start justify-center text-white pl-6 md:pl-12 lg:pl-24">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-shadow-md">{title}</h1>
      <p className="hidden md:inline-block py-6 text-m w-1/4 text-shadow-md">{overview}</p>
      <div>
        <button className="bg-red-600 text-white py-2 md:py-3 px-4 md:px-8 text-lg md:text-xl rounded-lg font-bold hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block ml-4 bg-gray-800 text-white p-2 md:p-3 px-6 md:px-8 text-lg md:text-xl bg-opacity-80 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;