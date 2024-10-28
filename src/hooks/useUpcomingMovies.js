import { useEffect } from "react";
import { API_OPTIONS, UPCOMING } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
    // console.log(json);
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
