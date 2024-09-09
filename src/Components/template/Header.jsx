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
        <Link to={`/${data.media_type}/details/${data.id}`} className="bg-gradient-to-bl from-slate-200 via-violet-500 to-zinc-400 bg-clip-text text-transparent">
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
        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#8E61F6] transition duration-300 ease-out border-2 border-[#8E61F6] rounded-full shadow-md group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#8E61F6] group-hover:translate-x-0 ease">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-[#8E61F6] transition-all duration-300 transform group-hover:translate-x-full ease">Watch Trailer</span>
        <span className="relative invisible">Button Text</span>
      </Link>
    </div>
  )
}

export default Header