import React from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './template/Topnav';

const Trending = () => {
    const navigate = useNavigate();
    return (
        <div className='w-screen h-screen p-[2%]'>
            <div className='w-full flex items-center'>
                <h1 className='text-2xl text-zinc-400 font-semibold'>
                <i
                onClick={()=>{navigate(-1)}}
                 class="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i>
                    Trending</h1>
                    <Topnav />
            </div>
        </div>
    )
}

export default Trending