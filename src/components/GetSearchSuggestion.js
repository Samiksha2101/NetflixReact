import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
const GetSearchSuggestion = () => {
  const { movieNames, suggestedMovies } = useSelector((store) => store.gemini);
  if (!movieNames || !suggestedMovies) return null;
  return (
    <div className="w-screen mt-7  ">
      <div className=" justify-evenly flex flex-wrap ">
        {suggestedMovies.map((movie, index) => (
          <MovieCard
            key={movie.title}
            movie={suggestedMovies[index]}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default GetSearchSuggestion;
