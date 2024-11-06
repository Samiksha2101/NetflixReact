import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
const GetSearchSuggestion = () => {
  const { movieNames, suggestedMovies } = useSelector((store) => store.gemini);
  if (!movieNames || !suggestedMovies) return null;
  return (
    <div className="w-full  mt-7">
      <div className=" flex justify-evenly">
        {movieNames.map((movieName, index) => (
          <MoviesList
            key={movieName}
            movies={suggestedMovies[index]}
            title={""}
          ></MoviesList>
        ))}
      </div>
    </div>
  );
};

export default GetSearchSuggestion;
