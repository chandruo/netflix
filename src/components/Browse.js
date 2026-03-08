import React, { useEffect } from "react";
import Header from "./Header";
import useFetchMovieList from "../hooks/useFetchMovieList";
import MainContianer from "./MainContianer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useFetchMovieList()

  return (
    <div>
      <Header />
      <MainContianer ></MainContianer>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
