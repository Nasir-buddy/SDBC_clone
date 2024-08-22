import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {



    return (
        // Header Section of nav
        <div className='w-[20%] h-full  border-r-2 border-zinc-400 p-10'>
            <h1 className='text-2xl text-white font-bold '>
                <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
                <span>SCSDB</span>
            </h1>
            {/* Nav section */}
            <nav className='flex flex-col text-zinc-400 text-[1.2rem]'>
                <h1 className='text-white font-semibold mt-10 mb-5'>New Feeds</h1>
                <Link to='/trending'
                className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                <i className='mr-2 ri-fire-fill'></i>
                Trending</Link>
                <Link to='/popular' className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                <i className='mr-2 ri-bard-fill'></i>
                Popular</Link> 
                <Link to='/movie' className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                <i className="mr-2 ri-movie-2-line"></i>
                Movies</Link>
                <Link to='/tvshow' className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                <i className="mr-2 ri-tv-2-fill"></i>
                Tv Shows</Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                <i className="mr-2 ri-group-line"></i>
                People</Link>
            </nav>

            <hr className='border-none h-[1px] bg-zinc-400 mt-2' />

            <nav className='flex flex-col text-zinc-400 text-[1.2rem]'>
                <h1 className='text-white font-semibold mt-10 mb-5'>Website Information</h1>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                <i className="mr-2 ri-info-i"></i>
                AboutUs </Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                <i className="mr-2 ri-contacts-line"></i>
                Contact</Link>
            </nav>

        </div>
    )
}

export default Sidenav  