
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearGptMovieResults } from '../utils/gptSlice';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      // Clear movie results when leaving the GPT search page
      dispatch(clearGptMovieResults());
    };
  }, []);

  return (
    <>
      <div className="fixed -z-10">
        <img
          className="fixed inset-0 w-full h-full object-cover"
          src={BG_URL}
          alt="Background"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;

