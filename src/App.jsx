import { useState } from 'react'
import Header from './Component/Header'
import { BrowserRouter } from "react-router";
import { Route,Routes } from 'react-router';
import Moviepage from './Component/Movic';
import Moviedetail from './Component/Moviedatail';
import SearchPage from './Component/Searchpage';
import MovieTrailer from './Component/Playpage';
import Secondaryhome from './Component/secondaryhome';
function App() {
  return (
    <>
    <BrowserRouter>
      {/* <Header/> */}
    <Routes>
      <Route path='/' element={<Header/>}></Route>
      <Route element={<Secondaryhome></Secondaryhome>}>
      <Route path='/movie' element={<Moviepage/>}></Route>
      <Route path='/movie/detail/:id' element={<Moviedetail/>}></Route>
      <Route path='/searchpage' element={<SearchPage/>}></Route>
      <Route path='/movie/detail/:id/play' element={<MovieTrailer></MovieTrailer>}></Route>
      </Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
