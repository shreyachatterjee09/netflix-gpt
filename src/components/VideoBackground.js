import React from 'react';
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className=" w-full h-full top-0 left-0 overflow-hidden -mt-20 ">
      <iframe
        className="w-full h-full  aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?playlist=" + trailerVideo?.key + "&loop=1&autoplay=1&mute=1&controls=0&start=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder="0"
        style={{
          border: "none",
          margin: "0",
          padding: "0",
          width: "120%",
          marginTop:"-5%",
          objectFit: "cover",
          marginLeft: "-10%",
          marginBottom:"-10%",
        }} 
      ></iframe>
    </div>
  );
};

export default VideoBackground;