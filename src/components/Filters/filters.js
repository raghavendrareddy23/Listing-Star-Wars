import React from 'react';

const MovieFilters = ({ onSortChange, onFilterChange, sortOption, filterText }) => {
  return (
    <div className="flex mb-4 mt-10 space-x-4">
      <div className="w-24">
        <select
          id="sortSelect"
          className="block appearance-none w-full bg-white border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
          onChange={onSortChange}
          value={sortOption}
        >
          <option value="Sort by...">Sort by...</option>
          <option value="year">Year</option>
          <option value="episode">Episode</option>
        </select>
      </div>
      <div className="w-4/5">
        <input
          type="text"
          id="filterInput"
          className="appearance-none w-full bg-white border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Enter movie name"
          value={filterText}
          onChange={onFilterChange}
        />
      </div>
    </div>
  );
};

export default MovieFilters;
