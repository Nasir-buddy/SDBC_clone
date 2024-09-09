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
      className="w-full min-h-[50vh] flex flex-col justify-end items-start p-4 sm:p-6 md:p-8 lg:p-[5%] mb-5"
    >
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="text-white text-sm sm:text-base w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mb-2">
        {data.overview.slice(0, 200)}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400 hover:text-blue-300 ml-1">
          more
        </Link>
      </p>

      <p className="text-white font-semibold text-sm sm:text-base mb-4">
        {data.release_date || data.first_air_date ? (
          <>
            <i className="ri-megaphone-fill text-yellow-400 mr-2" aria-hidden="true"></i>
            <span className="sr-only">Release date:</span>
            {data.release_date || data.first_air_date}
          </>
        ) : null}
        <i className="ri-movie-2-line text-yellow-400 ml-3 sm:ml-5 mr-2" aria-hidden="true"></i>
        <span className="sr-only">Media type:</span>
        {data.media_type.toUpperCase()}
      </p>

      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="mt-2 sm:mt-4 bg-[#6556CD] hover:bg-[#5346bd] transition-colors duration-300 px-4 py-2 sm:px-6 sm:py-3 rounded text-white font-semibold text-sm sm:text-base"
      >
        Watch Trailer
      </Link>
    </div>
  )
}

export default Header