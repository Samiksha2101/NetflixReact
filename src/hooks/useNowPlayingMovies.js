import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMoviesList = useSelector(
    (store) => store.movies.nowPlayingMoviesList
  );
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMoviesList && getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
