import { useEffect } from "react";
import { API_OPTIONS, POPULAR } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    // console.log(json);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
