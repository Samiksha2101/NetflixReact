import React from "react";
import { CDN_IMG_URLS } from "../utils/Constants";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="w-52 p-3">
        <img src={CDN_IMG_URLS + movie.poster_path} alt="poster"></img>
        <h1 className="text-white">{movie.original_title}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
