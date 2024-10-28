import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/3 grid grid-cols-12 ">
        <input
          placeholder={language[langKey].gpSearchPlaceholder}
          type="text"
          className="p-2 m-2 col-span-9 "
        ></input>
        <button className="bg-red-500 p-2 m-2 col-span-3">
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
