import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMoviesList
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  if (!nowPlayingMovies) return;
  return (
    <div className="bg-black">
      <div className="z-30 relative -mt-40">
        <MoviesList
          movies={nowPlayingMovies}
          title={"Now Playing Movies"}
        ></MoviesList>
        <MoviesList
          movies={popularMovies}
          title={"Popular Movies"}
        ></MoviesList>
        <MoviesList
          movies={upcomingMovies}
          title={"Upcoming Movies"}
        ></MoviesList>
        <MoviesList
          movies={topRatedMovies}
          title={"Top Rated Movies"}
        ></MoviesList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
