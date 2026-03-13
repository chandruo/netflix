import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch,useSelector } from "react-redux";
import { addPopularMovies } from "../utils/popularMovieSlice";

export default function useFetchPopularMovies() {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state)=> state.popularMovies.addPopularMovies)
  const fetchPopularMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS,
    );
    const data = await res.json();
    dispatch(addPopularMovies(data.results));
  };
  useEffect(() => {
    if(!popularMovies)fetchPopularMovies();
  }, []);
}
