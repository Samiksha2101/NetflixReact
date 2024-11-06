import React, { createRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import model from "../utils/gemini";
import { API_OPTIONS } from "../utils/Constants";
import { addMovieSuggestions } from "../utils/geminiSlice";
const SearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const inputRef = createRef(null);
  const dispatch = useDispatch();

  const searchMoviesSuggestion = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=true&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    if (json.results.length === 0) return null;

    let result = json.results.find(
      (result) =>
        result.title.toLowerCase().trim() === movie.toLowerCase().trim()
    );

    if (!result && json.results.length > 0) {
      // Fallback: If no exact match, use the first result
      result = json.results[0];
      console.warn(
        `Exact match not found for "${movie}". Using first result:`,
        result
      );
    }

    return result ? [result] : []; // return json.results;
  };

  const handleGenAiSearch = async () => {
    const query = inputRef.current.value;
    const prompt =
      "Act as movie recommendation system. Don't ask again for input from user. Suggest for given provided query only. Provide a list of 5 recommended movies separated by comma based on the following query: " +
      query +
      " example: don,ready,bahubali,raaz,3 idiots";

    const movieNames = await model.generateContent(prompt);

    if (!movieNames) return null;
    const moviePromise = movieNames.response.text().split(", ");

    const promiseArr = moviePromise.map((name) => {
      return searchMoviesSuggestion(name);
    });

    // [promise,promise,promise,promise,promise]
    const TMDB_result = await Promise.all(promiseArr);

    dispatch(
      addMovieSuggestions({
        movieNames: moviePromise,
        suggestedMovies: TMDB_result,
      })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/3 grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          placeholder={language[langKey].gpSearchPlaceholder}
          type="text"
          className="p-2 m-2 col-span-9 "
          ref={inputRef}
        ></input>
        <button
          className="bg-red-500 p-2 m-2 col-span-3"
          onClick={handleGenAiSearch}
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
