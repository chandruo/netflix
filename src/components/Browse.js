import React, { useEffect } from "react";
import Header from "./Header";
import useFetchMovieList from "../hooks/useFetchMovieList";
import MainContianer from "./MainContianer";

const Browse = () => {
  useFetchMovieList()

  return (
    <div>
      <Header />
      <MainContianer ></MainContianer>
    </div>
  );
};

export default Browse;
