import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const geminiToggle = useSelector((store) => store.gemini.toggleGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  /*
  Main continer 
  - bg video 
  - movie name 
  Secondary container
  - moviesList * n 
   - movieCard * n 
   */
  return (
    <div>
      <Header></Header>
      {geminiToggle ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer></MainContainer>
          <SecondaryContainer></SecondaryContainer>
        </>
      )}
    </div>
  );
};

export default Browse;
