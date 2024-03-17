import React from 'react';
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="group w-36 md:w-55 ml-px pr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
