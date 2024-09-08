import React from 'react'
import { Link } from 'react-router-dom';
import noimage from '/no-image.jpg'
const HorizontalCards = ({ data }) => {
    console.log(data);
    
    return (
            <div className='flex w-[100%] max-h-[38%] overflow-y-hidden p-4'>
                {data.length > 0 ? data.map((d, i) => (<Link
                to={`/${d.media_type}/details/${d.id}`}
                key={i} className='min-w-[17%] mr-5 rounded p-2 bg-zinc-900 
                transition ease-in-out delay-100 hover:translate-x-1 hover:scale-110 hover:bg-[#6556CD] duration-300'> 
                    <img
                        className='rounded transition ease-in-out '
                        src={d.backdrop_path || d.poster_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}` : noimage} alt="" />

                    <div className='text-white p-2 h-[55%] overflow-y-auto'>
                        <h1 className='text-xl font-bold mb-3 mt-3'>
                            {d.name || d.title || d.original_name || d.original_title}
                        </h1>
                        <p className='mt-3 mb-5'>
                            {d.overview.slice(0, 100)}
                        </p>
                    </div>
                </Link>)) : <h1>Nothing to show</h1>}
            </div>
    )
}

export default HorizontalCards