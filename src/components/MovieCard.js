import React from 'react'
import { IMG_CDN_URL } from "../utils/constants";


const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-55 ml-px pr-4 ">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};
export default MovieCard;