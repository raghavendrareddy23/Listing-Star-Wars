import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieFilters from "./components/Filters/filters";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortOption, setSortOption] = useState("year");
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://swapi.dev/api/films/?format=json"
      );
      setMovies(response.data.results);
    };

    fetchData();
  }, []);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortOption === "Sort by...") {
      return a.release_date.localeCompare(b.release_date);
    } else if (sortOption === "year") {
      return a.release_date.localeCompare(b.release_date);
    }
    return a.episode_id - b.episode_id;
  });

  return (
    <div>
      <MovieFilters
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
        sortOption={sortOption}
        filterText={filterText}
      />
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row xxl:flex-row h-full">
        <div className="flex-1 border-r flex">
          <MovieList
            movies={sortedMovies}
            selectedMovie={selectedMovie}
            onMovieClick={handleMovieClick}
          />
        </div>
        <div className="w-1 bg-gray-300 hidden md:block lg:block xl:block xxl:block"></div>

        <div className="flex-1 flex justify-center">
          <MovieDetails selectedMovie={selectedMovie} />
        </div>
      </div>
    </div>
  );
};

export default App;
