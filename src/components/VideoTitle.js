import React from "react";
import { lazy } from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24  absolute  text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-lg w-1/4 my-2">{overview}</p>
      <div>
        <button className="bg-white rounded-lg text-black my-4 p-2 px-8 hover:bg-opacity-80">
          play
        </button>
        <button className="bg-gray-500 rounded-lg text-black mx-2 my-4 p-2 px-8">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
