import React from "react";
import SearchBar from "./SearchBar";
import { BG_IMG } from "../utils/Constants";
import GetSearchSuggestion from "./GetSearchSuggestion";

const GptSearchPage = () => {
  return (
    <div className="bg-black bg-opacity-70 aspect-video ">
      <img src={BG_IMG} alt="bgImg" className="fixed -z-10"></img>
      <SearchBar />
      <GetSearchSuggestion></GetSearchSuggestion>
    </div>
  );
};

export default GptSearchPage;
