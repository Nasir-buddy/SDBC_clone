import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movies from './Components/Movies'
import Tvshow from './Components/Tvshow'
import People from './Components/People'
import Moviedetails from './Components/Moviedetails'
import Tvdetails from './Components/Tvdetails'
import Persondetails from './Components/Persondetails'
import Trailer from './Components/template/Trailer'
import Notfound from './Components/template/Notfound'

const App = () => {
  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />}></Route>
        <Route path='/movie' element={<Movies />} />
        <Route path='/movie/details/:id' element={<Moviedetails />}>
          <Route path='/movie/details/:id/trailer' element={<Trailer />} />
        </Route>
        <Route path='/tv' element={<Tvshow />} />
        <Route path='/tv/details/:id' element={<Tvdetails />}>
          <Route path='/tv/details/:id/trailer' element={<Trailer />} />
        </Route>
        <Route path='/people' element={<People />} />
        <Route path='/person/details/:id' element={<Persondetails />} />
        <Route path='*' element={<Notfound />}></Route>

      </Routes>
    </div>
  )
}

export default App