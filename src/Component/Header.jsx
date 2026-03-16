import React, { useEffect, useState } from "react";
import { Link } from "react-router";
function Header(){
   const[moviedata,setmoviedata]=useState([]);
   useEffect(()=>{
      async function fetchdata() {
        const response=await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=")
        const data=await response.json();
        setmoviedata(data.results);
    }
    fetchdata();
   },[])
    
   function Moviecard({ moviedata }) {
  return (
    <div className="w-44 cursor-pointer transform hover:scale-110 transition duration-300">
     <Link to={`/movie/detail/${moviedata.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500${moviedata.poster_path}`}
        alt={moviedata.title}
        className="rounded-lg"
      />
</Link>
      <div className="mt-2">
        <p className="text-sm font-semibold line-clamp-1">
          {moviedata.title}
        </p>

        <p className="text-gray-400 text-xs">
          ⭐ {moviedata.vote_average}
        </p>
      </div>

    </div>
  );
}
   console.log(moviedata);
    return(
        <>
       <header className="relative h-screen bg-[url('https://i.pinimg.com/736x/36/d3/92/36d39247289fa60ad6c51a6d5b29f7cc.jpg')] bg-cover bg-center">
  <div className="absolute inset-0 bg-black/70"></div>
  <div className="relative flex justify-between items-center px-10 py-6 container mx-w-[80%] mx-auto">
    
    <img
      className="w-32"
      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      alt="logo"
    />
    <div className="flex gap-4">
      <button className="border text-white px-4 py-1 rounded">
        English
      </button>

      <button className="bg-red-600 text-white px-4 py-1 rounded">
        Sign In
      </button>
    </div>

  </div>
  <div className="relative flex flex-col items-center justify-center text-center text-white h-[80%] px-4">

    <h1 className="text-5xl font-bold max-w-3xl">
      Unlimited movies, TV shows and more
    </h1>

    <p className="text-xl mt-4">
      Starts at ₹149. Cancel anytime.
    </p>

    <p className="mt-6 text-lg">
      Ready to watch? Enter your email to create or restart your membership.
    </p>

    {/* Email Form */}
    <div className="mt-6 w-full max-w-xl">
       <form className="flex flex-col sm:flex-row gap-3">

    <input
      type="email"
      placeholder="Email address"
      className="flex-1 px-4 py-3 bg-black/60 border border-gray-400 rounded text-white"
      required
    />
<Link to="/movie">
    <button
      type="submit"
      className="bg-red-600 px-6 py-3 text-xl font-semibold rounded hover:bg-red-700 transition"
    >
      Get Started
    </button>
</Link>
  </form>
    </div>

  </div>

</header>
<div className="bg-black text-white">
  <div className="container max-w-[80%] mx-auto">

    <p className="text-3xl font-bold py-6">Trending Movies</p>

    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">

      {moviedata?.map((value) => (
        <div key={value.id} className="flex-shrink-0">
          <Moviecard moviedata={value} />
        </div>
      ))}

    </div>

  </div>
  <div>
     <div className="container max-w-[80%] mx-auto">

    <p className="text-3xl font-bold py-6">More Reason To Join</p>

    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">

      <div className="h-92 w-80 bg-gradient-to-br from-[#1f1c2c] via-[#2b2b5e] to-[#3a0ca3] rounded-2xl">
           <p className="text-3xl font-bold p-5">Enjoy on your TV</p>
           <p className="text-xl text-gray-300 font-bold p-5">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
      </div>
       <div className="h-92 w-80 bg-gradient-to-br from-[#1f1c2c] via-[#2b2b5e] to-[#3a0ca3] rounded-2xl">
           <p className="text-3xl font-bold p-5">Download your shows to watch offline</p>
           <p className="text-xl text-gray-300 font-bold p-5">Save your favourites easily and always have something to watch.</p>
      </div>
       <div className="h-92 w-80 bg-gradient-to-br from-[#1f1c2c] via-[#2b2b5e] to-[#3a0ca3] rounded-2xl">
           <p className="text-3xl font-bold p-5">Watch everywhere</p>
           <p className="text-xl text-gray-300 font-bold p-5">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV..</p>
      </div>
       <div className="h-92 w-80 bg-gradient-to-br from-[#1f1c2c] via-[#2b2b5e] to-[#3a0ca3] rounded-2xl">
           <p className="text-3xl font-bold p-5">Create profiles for kids</p>
           <p className="text-xl text-gray-300 font-bold p-5">Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
      </div>

    </div>

  </div>
  </div>
</div>
        </>
    )
}

export default Header;