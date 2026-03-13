import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const useFetchVideos = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((state)=> state.movies.trailer)
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS,
    );
    const res = await data.json();
    const filterData = res.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : res.results[0];
    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    if(!trailer) getMovieVideos();
  }, []);
};
export default useFetchVideos;
