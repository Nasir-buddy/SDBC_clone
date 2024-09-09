import React from 'react'
import { Link } from 'react-router-dom';
import noimage from '/no-image.jpg'
const HorizontalCards = ({ data }) => {

  return (
    <div className="w-full overflow-hidden p-4">
      <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
        {data.length > 0 ? (
          data.map((d, i) => (
            <Link
              to={`/${d.media_type}/details/${d.id}`}
              key={i}
              className="flex-shrink-0 w-72 sm:w-72  bg-zinc-900 rounded-lg overflow-hidden shadow-lg 
                         transition duration-300 ease-in-out transform hover:bg-[#6556CD]"
            >
              <img
                className="w-full h-40 object-cover transition-opacity duration-300 ease-in-out"
                src={d.backdrop_path || d.poster_path ? `https://image.tmdb.org/t/p/w500/${d.backdrop_path || d.poster_path}` : noimage}
                alt={d.name || d.title || d.original_name || d.original_title || "Media image"}
                loading="lazy"
              />
              <div className="p-4">
                <h2 className="text-white text-lg font-bold mb-2 line-clamp-2">
                  {d.name || d.title || d.original_name || d.original_title}
                </h2>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {d.overview}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-white text-lg">Nothing to show</p>
        )}
      </div>
    </div>


  )
}

export default HorizontalCards