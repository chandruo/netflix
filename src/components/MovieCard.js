import React from "react";
import { IMAGE_URL } from "../utils/constant";

const MovieCard = ({ posterUrl }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMAGE_URL + posterUrl} />
    </div>
  );
};

export default MovieCard;
