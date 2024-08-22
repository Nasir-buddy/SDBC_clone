import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './template/Topnav';
import Dropdown from './template/Dropdown';
import axios from '../utils/axios';
import Cards from './template/Cards';
import Loading from './template/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {

    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
            // setTrending(data.results);
            if(data.results.length > 0){
                setTrending((prev) => [...prev, ...data.results]);
                setpage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const refreshHandler = ()=>{
        if(trending.length === 0){
            getTrending();
        } else {
            setpage(1);
            setTrending([]);
            getTrending();
        }
    }

    useEffect(() => {
        refreshHandler(); 
    }, [duration, category])

    return trending.length > 0 ? (
        <div className='w-screen h-screen'>
            <div className='w-full flex items-center'>
                <h1 className='text-2xl text-zinc-400 font-semibold'>
                    <i
                        onClick={() => { navigate(-1) }}
                        className="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i>
                    Trending</h1>
                <Topnav />
                <Dropdown title='category' options={["movie", "tv", "all"]} func={(event) => setCategory(event.target.value)} />
                <div className='w-[2%]'></div>
                <Dropdown title="duration" options={["week", "day"]} func={(event) => setDuration(event.target.value)} />
            </div>

            <InfiniteScroll dataLength={trending.length} next={getTrending} hasMore={hasMore} loader={<h1>Loading</h1>}>
                <Cards data={trending} title={category} />
            </InfiniteScroll>

        </div>
    ) : <Loading />
}

export default Trending