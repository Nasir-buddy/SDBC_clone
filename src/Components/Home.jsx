import React, { useEffect, useState } from 'react'
import Sidenav from './template/Sidenav';
import Topnav from './template/Topnav';
import axios from '../utils/axios';
import Header from './template/Header';
import HorizontalCards from './template/HorizontalCards';
import Loading from './template/Loading';
import Dropdown from './template/Dropdown';
const Home = () => {
    document.title = "Nasir Ali OTT App";
    const [wallpaper, setWallpaper] = useState(null);
    const [trending, setTrending] = useState(null);
    const [category, setCategory] = useState("all");

    const getHeaderWallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`);
            let fixedData = data.results[(Math.random() * data.results.length).toFixed()];
            setWallpaper(fixedData);

        } catch (error) {
            console.log(error);
        }
    }

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);
            setTrending(data.results);

        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        !wallpaper && getHeaderWallpaper();
        getTrending();
    }, [category]);


    return wallpaper && trending ? (
        <>
 
          <div className='relative'>
          <Sidenav />
          </div>

            <div className='w-full h-full overflow-auto overflow-x-hidden'>
                <Topnav />
                <Header data={wallpaper} />


                <div className='flex justify-between py-4 mx-5'>
                    <h1 className='text-3xl font-semibold text-zinc-400 mr-10'>Trending</h1>
                    <Dropdown
                        title="Filter" 
                        options={["all", "tv", "movie"]}
                        func={(e) => setCategory(e.target.value)} />
                </div>

                <HorizontalCards data={trending} />
            </div>
        </>
    ) : <Loading />
}

export default Home