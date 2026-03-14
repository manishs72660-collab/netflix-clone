import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function MovieTrailer() {
  const { id } = useParams();
  const [videoKey, setVideoKey] = useState("");

  useEffect(() => {
    async function fetchTrailer() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=3fd229c1647696e22bec8820123773e9`
      );

      const data = await res.json();

      if (data.results.length > 0) {
        setVideoKey(data.results[1].key);
      }
    }

    fetchTrailer();
  }, [id]);

  return (
    <div className="bg-black min-h-screen text-white">

      {/* Page Container */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-8">
          Movie Trailer
        </h1>

        {/* Video Container */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800">

          {videoKey ? (
            <iframe
              className="w-full h-[550px]"
              src={`https://www.youtube.com/embed/${videoKey}`}
              title="Movie Trailer"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="flex items-center justify-center h-[550px] bg-gray-900">
              <p className="text-gray-400">Loading trailer...</p>
            </div>
          )}

        </div>

        {/* Movie Info Section */}
        <div className="mt-10 bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border border-gray-800">

          <h2 className="text-2xl font-semibold mb-3">
            About This Movie
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Watch the official trailer. You can also display movie details
            here like overview, rating, release date and cast using the API.
          </p>

        </div>

      </div>

    </div>
  );
}

export default MovieTrailer;