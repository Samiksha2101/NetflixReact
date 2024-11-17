import React from "react";
import { CDN_IMG_URLS } from "../utils/Constants";

const MovieCard = ({ movie }) => {
  if (movie.poster_path === null) return null;
  if (!movie.poster_path) return null;
  return (
    <div>
      <div className="w-36 md:w-56 p-3">
        <img src={CDN_IMG_URLS + movie.poster_path} alt="poster"></img>
        <h1 className="text-white">{movie.title}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
