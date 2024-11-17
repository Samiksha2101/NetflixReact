import React from "react";

const Title = ({ title, overview }) => {
  return (
    <div className="absolute w-full z-20 bg-gradient-to-r from-black aspect-video pt-32 lg:pt-56 md:pt-36">
      <h1 className="font-bold text-sm md:text-2xl text-white ml-6 md:ml-24 ">
        {title}
      </h1>
      <p className="hidden  md:block text-white w-1/3 ml-24">{overview}</p>
      <button className="bg-white md:py-2 md:px-5 px-1 py-1 rounded-md ml-6 md:ml-24 md:mt-6 mt-3 hover:opacity-70">
        ▶ Play
      </button>
      <button className="bg-white md:py-2 md:px-5 px-2 py-1 ml-5 rounded-md hover:opacity-70 hidden  md:inline-block">
        Info
      </button>
    </div>
  );
};

export default Title;
