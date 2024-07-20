import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Topnav = () => {
    // Handle Input search button
    const [inputVal, setInputVal] = useState('');

    const handleInput = (event) => {
        setInputVal(event.target.value);
    };

    const clearInput = () => {
        setInputVal('');
    };

    return (
        <div className='h-[10vh] w-full flex justify-center items-center relative'>
            <i class="ri-search-eye-line text-3xl text-zinc-300 "></i>
            <input type="text" value={inputVal} onChange={handleInput} placeholder='search anything' className='p-5 border-none outline-none bg-transparent w-[50%] text-zinc-300' />
            {inputVal &&
                <i class="ri-close-large-line text-zinc-300 text-3xl" onClick={clearInput}></i>
            }

            <div className='w-[50%] absolute h-[50vh] bg-zinc-400 rounded-lg top-[90%]' >
                <Link className='w-full h-[20%] flex justify-start items-center p-10 border-b-2 border-zinc-600 hover:text-zinc-300 hover:bg-zinc-500 duration-300 hover:rounded-lg hover:border-b-black'>
                    <img src="" alt="" />
                    <span>Hello Everyone</span>
                </Link>
            </div>
        </div>
        
    )
}

export default Topnav