import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";




const useTopRatedMovies = () => {
     //Fetch Data from TMDB API and update store
  
  const dispatch = useDispatch();
  const TopRatedMovies = useSelector((store) => store.movies.TopRatedMovies)

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
    if(!TopRatedMovies) 
    getTopRatedMovies()
  },[])
};

export default useTopRatedMovies;
