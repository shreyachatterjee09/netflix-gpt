import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector} from "react-redux";


const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo)

  
  useMovieTrailer(movieId);
  

  return (
    <div className=" w-screen">
      <iframe
        className="  w-screen h-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder="0"
        style={{ border: "none", outline: "none" }}
      ></iframe>
    </div>
  );
};
export default VideoBackground