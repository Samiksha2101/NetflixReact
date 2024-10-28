import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/Constants";

const GptSearchPage = () => {
  return (
    <div className="bg-gradient-to-b from-black aspect-video  ">
      <img src={BG_IMG} alt="bgImg" className="absolute -z-10"></img>
      <GptSearchBar />
    </div>
  );
};

export default GptSearchPage;
