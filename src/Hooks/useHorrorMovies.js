import { useDispatch } from "react-redux";
import { addHorrorMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useHorrorMovies = () => {
    const dispatch  = useDispatch();

    const getHorrorMovies = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/discover/movie', API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
      dispatch(addHorrorMovies(json.results));
    }
  
    useEffect(() => {
      getHorrorMovies(); 
    }, []);
}

export default useHorrorMovies;