import React from 'react';
import {convertToRoman} from '../Utils/Utils';

const MovieDetails = ({ selectedMovie }) => {
  const isMovieSelected = !!selectedMovie;

  return (
    <div className={`flex-grow ml-8 lg:w-1/2 ${isMovieSelected ? '' : 'flex items-center justify-center'}`}>
      <div className={`text-xl font-bold mb-4 ${isMovieSelected ? '' : 'text-center'}`}>
        {isMovieSelected ? (
          <>
            <strong>Episode:</strong> {convertToRoman(selectedMovie.episode_id)} - {selectedMovie.title}
          </>
        ) : (
          'No Movie Selected'
        )}
      </div>
      {selectedMovie && (
        <div>
          <div>
           {selectedMovie.opening_crawl}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
