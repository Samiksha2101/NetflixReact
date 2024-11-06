import React from "react";

const Title = ({ title, overview }) => {
  return (
    <div className="absolute w-full z-20 bg-gradient-to-r from-black aspect-video pt-60">
      <h1 className="font-bold text-2xl text-white ml-24 ">{title}</h1>
      <p className="text-white w-1/3 ml-24">{overview}</p>
      <button className="bg-white p-2 px-5 rounded-md  ml-24 mt-6 hover:opacity-70">
        ▶ Play
      </button>
      <button className="bg-white p-2 px-6 ml-5 rounded-md hover:opacity-70">
        Info
      </button>
    </div>
  );
};

export default Title;
