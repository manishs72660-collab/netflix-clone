import React, { useEffect, useState } from "react";
import { Link } from "react-router";
function Moviepage() {
  const[moviedata,setmoviedata]=useState([]);
  const [showdata,setshowdata]=useState([]);
  const [topdata,settopdata]=useState([]);
  const [horrordata,sethorrordata]=useState([]);
  const[romancedata,setromancedata]=useState([]);
  useEffect(()=>{
    async function fetchdata(){
        const response=await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=3fd229c1647696e22bec8820123773e9");
        const data=await response.json();
        setmoviedata(data.results)
    }
    fetchdata();
  },[])
 useEffect(()=>{
   async function showcard() {
       const response=await fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=3fd229c1647696e22bec8820123773e9");
       const data=await response.json();
       setshowdata(data.results)
   }
   showcard()
 },[])
 useEffect(()=>{
   async function showcard() {
       const response=await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3fd229c1647696e22bec8820123773e9");
       const data=await response.json();
       settopdata(data.results)
   }
   showcard()
 },[])
 useEffect(()=>{
   async function showcard() {
       const response=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=3fd229c1647696e22bec8820123773e9&with_genres=27");
       const data=await response.json();
       sethorrordata(data.results)
   }
   showcard()
 },[])
 useEffect(()=>{
   async function showcard() {
       const response=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=3fd229c1647696e22bec8820123773e9&with_genres=10749");
       const data=await response.json();
       setromancedata(data.results)
   }
   showcard()
 },[])
function Moviecard({movieinfo}){
    return(
        <>
        <Link to={`/movie/detail/${movieinfo.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${movieinfo.poster_path}`} alt="" className="h-60 w-40 p-2 object-cover rounded-lg" />
        </Link>
        </>
    )
}
  return (
    <div className="bg-gray-900 min-h-screen text-white">

      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          className="w-36"
        />

        <button className="bg-white text-black px-5 py-2 rounded-full font-semibold">
          Sign Out
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[85vh] max-w-[90%] container mx-auto">

        {/* Background image */}
        <img
          src="http://i.pinimg.com/1200x/f7/33/6b/f7336baea8bc9bb7774b906b0f2306aa.jpg"
          className="absolute w-full h-full object-cover rounded-2xl"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>

        {/* Text Content */}
        <div className="relative flex flex-col justify-center h-full px-20 max-w-2xl">

          <h1 className="text-6xl font-bold mb-4">
            Movies
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Movies move us like nothing else can, whether they're scary,
            funny, dramatic, romantic or anywhere in-between.
            So many titles, so much to experience.
          </p>
          <p className="text-gray-400 mt-4">
            Endless entertainment starting at ₹149
          </p>

        </div>

      </div>
<div className="container max-w-[80%] mx-auto">
<h1 className="text-4xl font-bold mt-5 mb-4">Trending Movies</h1>
<div className="flex gap-4 flex-wrap">     
   {
    moviedata.map((value)=> <Moviecard key={value.id} movieinfo={value} ></Moviecard>)
   }
</div>
</div>

<div className="container max-w-[80%] mx-auto">
<h1 className="text-4xl font-bold mt-5 mb-4">Trending TV Shows</h1>
<div className="flex gap-4 flex-wrap ">     
   {
    showdata.map((value)=> <Moviecard key={value.id} movieinfo={value} ></Moviecard>)
   }
</div>
</div>
<div className="container max-w-[80%] mx-auto">
<h1 className="text-4xl font-bold mt-5 mb-4">Top Rated Movies</h1>
<div className="flex gap-4 flex-wrap">     
   {
    topdata.map((value)=> <Moviecard key={value.id} movieinfo={value} ></Moviecard>)
   }
</div>
</div>
<div className="container max-w-[80%] mx-auto">
<h1 className="text-4xl font-bold mt-5 mb-4">Horror Movies</h1>
<div className="flex gap-4 flex-wrap">     
   {
    horrordata.map((value)=> <Moviecard key={value.id} movieinfo={value} ></Moviecard>)
   }
</div>
</div>
<div className="container max-w-[80%] mx-auto">
<h1 className="text-4xl font-bold mt-5 mb-4">Romance Movies</h1>
<div className="flex gap-4 flex-wrap">     
   {
    romancedata.map((value)=> <Moviecard key={value.id} movieinfo={value} ></Moviecard>)
   }
</div>
</div>


    </div>
  );
}

export default Moviepage;