import React from 'react';
import { Link } from 'react-router-dom';
import noimage from '/no-image.jpg';

const Cards = ({ data, title }) => {
  return (
    <div className='w-full h-full px-[5%] py-12 bg-[#1F1E24]'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {data.map((card, index) => (
          <Link
            to={`/${card.media_type || title}/details/${card.id}`}
            key={index}
            className='relative hover:translate-x-1 hover:scale-105 transition ease-in-out delay-100'
          >
            <img
              className='max-w-[100%] rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover'
              src={card.poster_path || card.backdrop_path || card.profile_path ? `https://image.tmdb.org/t/p/original/${card.poster_path || card.backdrop_path || card.profile_path}` : noimage}
              alt=""
            />

            <h5 className='text-lg md:text-2xl mt-2 font-semibold mb-5 text-violet-700'>
              {card.name || card.title || card.original_name || card.original_title}
              {card.vote_average && (
                <div className='text-yellow-300'>Rating : 
                  {(card.vote_average * 10).toFixed()} <sup>%</sup>
                </div>
              )}
            </h5>


          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cards;
