import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Moviedetail() {

  const { id } = useParams();
  const [moviedata, setmoviedata] = useState(null);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3fd229c1647696e22bec8820123773e9`
      );
      const data = await response.json();
      setmoviedata(data);
    }
    fetchdata();
  }, [id]);

  if (!moviedata) {
    return (
      <div className="bg-black text-white h-screen flex justify-center items-center">
        Loading Movie...
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">

      {/* HERO BANNER */}
      <div className="relative h-[70vh] w-full">

        <img
          src={`https://image.tmdb.org/t/p/original${moviedata.backdrop_path}`}
          alt="banner"
          className="w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

        {/* movie title */}
        <div className="absolute bottom-16 left-10 max-w-2xl">

          <h1 className="text-5xl font-bold">
            {moviedata.title}
          </h1>

          <p className="text-gray-300 mt-3 text-lg">
            {moviedata.tagline}
          </p>

          <div className="flex gap-4 mt-6">

            <button className="bg-white text-black px-7 py-3 rounded font-semibold hover:bg-gray-200">
              ▶ Play
            </button>

            <button className="bg-gray-700 px-7 py-3 rounded hover:bg-gray-600">
              + My List
            </button>

          </div>
        </div>

      </div>


      {/* MOVIE CONTENT */}
      <div className="container mx-auto max-w-[85%] py-12 flex gap-12 flex-wrap md:flex-nowrap">

        {/* POSTER */}
        <div className="w-72 shrink-0">

          <img
            src={`https://image.tmdb.org/t/p/w500${moviedata.poster_path}`}
            alt="poster"
            className="rounded-xl shadow-2xl border border-gray-800"
          />

        </div>


        {/* DETAILS */}
        <div className="flex-1">

          <h2 className="text-3xl font-bold mb-4">
            About this movie
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-3xl">
            {moviedata.overview}
          </p>


          {/* movie info */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-gray-300">

            <p>
              <span className="text-gray-500">Release Date:</span>{" "}
              {moviedata.release_date}
            </p>

            <p>
              <span className="text-gray-500">Rating:</span>{" "}
              ⭐ {moviedata.vote_average}
            </p>

            <p>
              <span className="text-gray-500">Runtime:</span>{" "}
              {moviedata.runtime} min
            </p>

            <p>
              <span className="text-gray-500">Language:</span>{" "}
              {moviedata.original_language.toUpperCase()}
            </p>

          </div>


          {/* GENRES */}
          <div className="mt-6 flex flex-wrap gap-3">

            {moviedata.genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-red-600 px-4 py-1 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Moviedetail;