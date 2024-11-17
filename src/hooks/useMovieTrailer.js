import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addtrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const dispatch = useDispatch();
  const getBgMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const trailerList = json.results.filter(
      (result) => result.type === "Trailer"
    );
    const trailer = trailerList.length ? trailerList[0] : json.results[0];
    dispatch(addtrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getBgMovie();
  }, [movieId]);
};
export default useMovieTrailer;
