import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
const useFetchMovieList = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS,
    );
    const res = await data.json();
    dispatch(addNowPlayingMovies(res.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useFetchMovieList
