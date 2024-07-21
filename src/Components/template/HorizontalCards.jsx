import React from 'react'

const HorizontalCards = ({ data }) => {
    console.log(data);
    return (
        <div className='w-full p-5'>
            <div className='mb-5'>
                <h1 className='text-3xl font-semibold text-zinc-400'>Trending</h1>
            </div>
            <div className='flex w-[100%] overflow-y-hidden  p-4'>
                {data.map((d, i) => <div key={i} className='min-w-[17%] mr-5 rounded p-2 bg-zinc-900 
                transition ease-in-out delay-100 hover:translate-x-1 hover:scale-110 hover:bg-[#6556CD] duration-300'>
                    <img
                        className='w-[full] h-[40%] object-cover rounded transition ease-in-out '
                        src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`} alt="" />
                    <h1 className='text-white text-2xl font-bold mb-6'>
                        {d.name || d.title || d.original_name || d.original_title}
                    </h1>
                    <p className='mt-3 mb-5 text-white'>
                        {d.overview.slice(0,100)}
                    </p>
                </div>)}
            </div>
        </div>
    )
}

export default HorizontalCards