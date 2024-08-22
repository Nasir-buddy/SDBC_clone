import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movies from './Components/Movies'
import Tvshow from './Components/Tvshow'

const App = () => {
  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />}></Route>
        <Route path='/movie' element={<Movies />}></Route>
        <Route path='/tvshow' element={<Tvshow/>}></Route>
      </Routes>
    </div>
  )
}

export default App