import { useEffect } from "react";
import { API_OPTIONS, TOP_RATED } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
    // console.log(json);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
