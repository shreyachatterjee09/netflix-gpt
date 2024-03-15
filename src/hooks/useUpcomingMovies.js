import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";




const useUpcomingMovies = () => {
     //Fetch Data from TMDB API and update store
  
  const dispatch = useDispatch();
  const UpcomingMovies = useSelector((store) => store.movies.UpcomingrMovies)

  const getUpcomingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming',
      API_OPTIONS
      )
      const json = await data.json();
      console.log(json.results);
      dispatch(addUpcomingMovies(json.results));


  };

  useEffect(() => {
    if(!UpcomingMovies)
    getUpcomingMovies()
  },[])
};

export default useUpcomingMovies;
