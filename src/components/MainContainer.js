import React from 'react';
import { useSelector } from "react-redux";
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    // Check if movies array is null or undefined
    if (!movies || movies.length === 0) {
        return null; // Return null or display a loading indicator
    }

    // If movies array is not empty, proceed to access the first movie
    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;

    return (
        <div className="bg-slate-900">
            {/* Render VideoTitle with only movie title for small screens */}
            <VideoTitle title={original_title} overview={overview} mobileOnly />
            <VideoBackground movieId={id} />
        </div>
    );
}

export default MainContainer;
