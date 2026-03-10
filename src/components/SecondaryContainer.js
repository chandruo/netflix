import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.addNowPlayingMovies);
  const popularMovies = useSelector((store)=> store.popularMovies.addPopularMovies)
  return (
    <div className="bg-black px-4">
      <div className="-mt-56 relative z-30">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular Movies"} movies={popularMovies} />
         <MovieList title={"Popular Movies"} movies={popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
