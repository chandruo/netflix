import React, { useRef } from "react";
import { useState } from "react";
import client from "../utils/openai";

const GptSearchBar = () => {
  const searchRef = useRef(null);

  const handleSearch = async () => {
    const response = await client.responses.create({
      model: "gpt-5.4",
      input: "Write a short bedtime story about a unicorn.",
    });

    console.log(response.output_text);
  };
  return (
    <div>
      <img
        className="h-screen object-cover w-screen -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_medium.jpg"
        alt="background"
      />
      <form className="pt-[20%] mx-auto w-full  flex justify-center absolute  top-0">
        <input
          type="text"
          placeholder="Enter the movies to search"
          className="border-2 w-4/12 p-2 "
          ref={searchRef}
        />
        <button
          type="button"
          onClick={handleSearch}
          className="bg-red-600 px-4"
        >
          search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
