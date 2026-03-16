import React, { useState } from "react";
import { Link } from "react-router";
function SearchPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  async function searchMovie(e) {
    e.preventDefault();

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=&query=${query}`
    );

    const data = await res.json();
    setMovies(data.results);
  }

  return (
    <div className="bg-black min-h-screen text-white p-10">

      {/* Search bar */}
      <form onSubmit={searchMovie} className="flex gap-4 mb-10">
        <input
          type="text"
          placeholder="Search movies..."
          className="flex-1 px-4 py-3 rounded bg-gray-900 border border-gray-700"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="bg-red-600 px-6 py-3 rounded">
          Search
        </button>
      </form>

      {/* Results */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {movies?.map((movie) => (
         <Link to={`/movie/detail/${movie.id}`}>
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded hover:scale-105 transition"
          />
          </Link>
        ))}
      </div>

    </div>
  );
}

export default SearchPage;