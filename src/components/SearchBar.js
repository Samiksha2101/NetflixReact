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
    // console.log(result);
    if (!result && json.results.length > 0) {
      // Fallback: If no exact match, use the first result
      result = json.results[0];
      console.warn(
        `Exact match not found for "${movie}". Using first result:`,
        result
      );
    }

    // return result ? [result] : [];
    return result ? result : null;
  };

  const handleGenAiSearch = async () => {
    const query = inputRef.current.value;
    const prompt =
      "Act as movie recommendation system. Don't ask again for input from user. Suggest for given provided query only. Provide a list of 5 recommended movies separated by comma based on the following query: " +
      query +
      " example: don,ready,bahubali,raaz,3 idiots";

    const movieNames = await model.generateContent(prompt);

    if (!movieNames) return null;
    const movieNameArr = movieNames.response.text().split(", ");
    const array = [];
    // const promiseArr =
    movieNameArr.map((name) => {
      return array.push(searchMoviesSuggestion(name));
    });

    // [promise,promise,promise,promise,promise]
    const TMDB_result = await Promise.all(array);
    console.log(TMDB_result);
    dispatch(
      addMovieSuggestions({
        movieNames: movieNameArr,
        suggestedMovies: TMDB_result,
      })
    );
  };

  return (
    <div className="md:pt-[10%] pt-[40%] flex justify-center w-full ">
      <form
        className="w-full  md:w-1/3 grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          placeholder={language[langKey].gpSearchPlaceholder}
          type="text"
          className="p-2 m-2 col-span-9  "
          ref={inputRef}
        ></input>
        <button
          className="bg-red-500 p-2 m-2 col-span-3 "
          onClick={handleGenAiSearch}
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
