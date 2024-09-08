import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.3), rgba(0,0,0,.6)),
      url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      className='w-full h-[50vh] flex flex-col justify-end items-start p-[5%] mb-5'>
      <h1 className='text-white text-3xl font-bold mb-6 w-[70%]'>
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className='text-white w-[70%] mb-2'>{data.overview.slice(0, 200)} ...<Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-500'>more</Link></p>

      <p className='text-white font-semibold'>
      {data.release_date || data.first_air_date ? <>
        <i className="ri-megaphone-fill text-yellow-400 mr-2"></i>{data.release_date ||  data.first_air_date}</> : null}
      <i className="ri-movie-2-line text-yellow-400 ml-5 mr-2"></i>{data.media_type.toUpperCase()}
      </p>

      <Link
      to={`/${data.media_type}/details/${data.id}/trailer`}
       className='mt-5 bg-[#6556CD] p-4 rounded text-white font-semibold'>
      Watch Trailer
      </Link>
    </div>
  )
}

export default Header