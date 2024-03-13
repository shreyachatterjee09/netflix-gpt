import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";




const useTopRatedMovies = () => {
     //Fetch Data from TMDB API and update store
  
  const dispatch = useDispatch();


  const getTopRatedMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated',
      API_OPTIONS
      )
      const json = await data.json();
      console.log(json.results);
      dispatch(addTopRatedMovies(json.results));


  };

  useEffect(() => {
    getTopRatedMovies()
  },[])
};

export default useTopRatedMovies;
