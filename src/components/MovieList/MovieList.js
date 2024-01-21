import React, { useState, useEffect } from 'react';
import {Loader, convertToRoman} from '../Utils/Utils';

const MovieList = ({ movies, selectedMovie, onMovieClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full flex-col">
      {isLoading ? (
        <Loader isLoading='true'/>
      ) : (
        movies.map((movie) => (
          <div
            key={movie.episode_id}
            className={`cursor-pointer p-4 border mb-2 ${
              selectedMovie === movie ? 'bg-blue-200' : ''
            }`}
            onClick={() => onMovieClick(movie)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-2">Episode {movie.episode_id}</div>
                <div className="font-bold mr-2">
                  Episode {convertToRoman(movie.episode_id)}-{movie.title}
                </div>
              </div>
              <div>{movie.release_date}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;
