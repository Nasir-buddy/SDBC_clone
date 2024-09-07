import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const category = pathname.includes("movie") ? 'movie' : 'tv';
    const ytvideo = useSelector((state) => state[category].info.videos);

    return (
        <div className='bg-[rgba(0,0,0,.7)] w-screen h-screen flex items-center justify-center top-0 left-0 z-10 absolute text-5xl'>
            <Link
                onClick={() => { navigate(-1) }}
                className="hover:text-[#6556CD] ri-close-large-line absolute top-[4%] left-[8%]"></Link>
            <ReactPlayer
                height={800}
                width={1500}
                url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />

        </div>
    )
}

export default Trailer      