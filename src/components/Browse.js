import React, { useEffect } from "react";
import Header from "./Header";
import useFetchMovieList from "../hooks/useFetchMovieList";
import MainContianer from "./MainContianer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  useFetchMovieList();
  useFetchPopularMovies();
  const searchEnabled = useSelector((state) => state.gptSearch.searchEnabled);

  return (
    <div>
      <Header />
      {searchEnabled ? (
        <GptSearch />
      ) : (
        <div>
          <MainContianer></MainContianer>
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
