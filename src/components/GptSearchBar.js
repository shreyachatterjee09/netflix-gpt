import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import lang from "../utils/languageConstants";
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice'; 

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [gptMovies, setGptMovies] = useState([]);

    // Search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
            const json = await data.json();
            return json.results;
        } catch (error) {
            console.error('Error fetching movie from TMDB:', error);
            return [];
        }
    };

    const handleGptSearchClick = async () => {
        try {
            const query = searchText.current.value.trim();
            if (!query) {
                setErrorMessage('Please enter a search query.');
                return;
            }
          
            const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query: " + query + ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
            const gptResults = await openai.chat.completions.create({
                messages: [{ role: 'user', content: gptQuery }],
                model: 'gpt-3.5-turbo',
            });
            const contents = gptResults.choices?.[0]?.message?.content;
            if (!contents) {
                setErrorMessage('No movie recommendations found for the query.');
                return;
            }
            console.log(contents);
            const movies = contents.split(",");
            setGptMovies(movies);

            const promiseArray = movies.map(movie => searchMovieTMDB(movie));
            const tmdbResults = await Promise.all(promiseArray);
            console.log(tmdbResults);

            dispatch(addGptMovieResult({ movieNames: movies, movieResults: tmdbResults }));
        } catch (error) {
            console.error('Error fetching movie recommendations:', error.message);
            setErrorMessage('An error occurred while fetching movie recommendations. Please try again later.');
        }
    };

    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    type="text"
                    className="p-4 m-4 col-span-9"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>
                    {lang[langKey].search}
                </button>
            </form>
            {errorMessage && <div className="text-red-600">{errorMessage}</div>}
        </div>
    );
};

export default GptSearchBar;
