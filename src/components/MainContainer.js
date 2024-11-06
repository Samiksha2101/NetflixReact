import React from "react";
import { useSelector } from "react-redux";
import Title from "./Title";
import VideoBg from "./VideoBg";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMoviesList);
  if (!movies) return;

  const { original_title, overview, id } = movies[0];

  return (
    <div>
      <Title title={original_title} overview={overview}></Title>
      <VideoBg movieId={id}></VideoBg>
    </div>
  );
};

export default MainContainer;
