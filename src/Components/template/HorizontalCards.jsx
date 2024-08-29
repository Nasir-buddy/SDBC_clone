import React from 'react'
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const HorizontalCards = ({ data }) => {
    console.log(data);
    
    return (
            <div className='flex w-[100%] overflow-y-hidden p-4'>
                {data.map((d, i) => (<Link
                to={`/${d.media_type}/details/${d.id}`}
                key={i} className='min-w-[17%] mr-5 rounded p-2 bg-zinc-900 
                transition ease-in-out delay-100 hover:translate-x-1 hover:scale-110 hover:bg-[#6556CD] duration-300'> 
                    <img
                        className='w-[full] h-[40%] object-cover rounded transition ease-in-out '
                        src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`} alt="" />

                    <div className='text-white p-2 h-[60%]'>
                        <h1 className='text-xl font-bold mb-3 mt-3'>
                            {d.name || d.title || d.original_name || d.original_title}
                        </h1>
                        <p className='mt-3 mb-5'>
                            {d.overview.slice(0, 50)}
                        </p>
                    </div>
                </Link>))}
            </div>
    )
}

export default HorizontalCards