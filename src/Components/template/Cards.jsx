import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ data, title }) => {
    return (
    <div className='flex flex-wrap w-full h-full px-[5%] py-12 bg-[#1F1E24]'>
      {data.map((card, index) =>
        <Link
          to={`/${card.media_type || title}/details/${card.id}`} 
          key={index}
          className='relative w-[17vw] mb-10 mr-[1%] hover:translate-x-1 hover:scale-110 transition ease-in-out delay-100 '
        >
          <img className='h-[40vh] rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:shadow-[8px_17px_38px_2px_rgba(101,86,205,1)]'
            src={`https://image.tmdb.org/t/p/original/${card.poster_path || card.backdrop_path || card.profile_path}`}
            style={{ objectFit: 'cover' }}
            alt="" />

          <h5 className='text-white text-2xl mt-2 font-semibold'>{card.name || card.title || card.original_name || card.original_title}</h5>
          {card.vote_average && (
            <div className='text-white h-[5vh] w-[5vh] bg-yellow-500 flex items-center justify-center rounded-full absolute bottom-[25%] right-2'>
              {(card.vote_average * 10).toFixed()}
            </div>
          )}
        </Link>)}
    </div>
  )
}

export default Cards    