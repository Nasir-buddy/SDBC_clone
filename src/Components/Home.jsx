import React from 'react'
import Sidenav from './template/Sidenav';

const Home = () => {
    document.title = "SCSDB | Movie App";
    return (
        <>
            <Sidenav />
            <div className='w-[80%] h-full'>

            </div>
        </>
    )
}

export default Home