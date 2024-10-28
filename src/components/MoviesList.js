import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="p-0  ">
      <h1 className="text-white text-2xl p-2 px-10">{title}</h1>
      <div className="overflow-x-scroll scrollbar-hide">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
