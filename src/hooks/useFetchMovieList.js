import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch ,useSelector} from "react-redux";
const useFetchMovieList = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies =useSelector((state) => state.movies.addNowPlayingMovies)
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS,
    );
    const res = await data.json();
    dispatch(addNowPlayingMovies(res.results));
  };
  useEffect(() => {
    if(!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};
export default useFetchMovieList
