import React, { useEffect } from "react";
import Header from "./Header";
import useFetchMovieList from "../hooks/useFetchMovieList";
import MainContianer from "./MainContianer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";

const Browse = () => {
  useFetchMovieList()
  useFetchPopularMovies()

  return (
    <div>
      <Header />
      <MainContianer ></MainContianer>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
