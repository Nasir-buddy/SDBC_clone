import React, { useEffect, useState } from 'react'
import Sidenav from './template/Sidenav';
import Topnav from './template/Topnav';
import axios from '../utils/axios';
import Header from './template/Header';
import HorizontalCards from './template/HorizontalCards';
const Home = () => {
    document.title = "SCSDB | Movie App";
    const [wallpaper, setWallpaper] = useState(null);

    const getHeaderWallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`);
            let fixedData = data.results[(Math.random() * data.results.length).toFixed()];
           setWallpaper(fixedData);
            
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        !wallpaper && getHeaderWallpaper();
    }, []);
    
    return wallpaper ? (
        <>
            <Sidenav />
            <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
                <Topnav />
                <Header data={wallpaper} />
                <HorizontalCards />
            </div>
        </>
    ) : <div className='h-full w-full flex justify-center items-center text-yellow-300 text-[6rem]'>
        <h1>Loading......</h1>
    </div>
}

export default Home