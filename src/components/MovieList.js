import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl my-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll overflow-auto no-scrollbar">
        {movies && (
          <div className="flex">
            {movies?.map((movie) => {
              return (
                <MovieCard
                  className="flex"
                  key={movie.id}
                  posterUrl={movie.poster_path}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
