import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './template/Topnav';
import Dropdown from './template/Dropdown';
import axios from '../utils/axios';
import Cards from './template/Cards';
import Loading from './template/Loading';

const Trending = () => {
    
    const navigate = useNavigate();
    const [category, setCategory] = useState('all');
    const [duration, setDuration] = useState('day');
    const [trending, setTrending] = useState(null);

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}`);
            setTrending(data.results);

        } catch (error) {
            console.log(error);
        }
    }
    console.log(trending);
    
    useEffect(()=>{
        getTrending();

    }, [category, duration])

    return trending ? (
        <div className='w-screen h-screen px-[2%]'>
            <div className='w-full flex items-center'>
                <h1 className='text-2xl text-zinc-400 font-semibold'>
                <i
                onClick={()=>{navigate(-1)}}
                 class="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i>
                    Trending</h1>
                    <Topnav />
                    <Dropdown title='category'  options={["movie", "tv", "all"]} func={(event)=>setCategory(event.target.value)}/>
                    <div className='w-[2%]'></div>
                    <Dropdown  title="duration" options={["week", "day"]} func={(event)=>{(event)=>setDuration(event.target.value)}}/>
            </div>

        <Cards data={trending} />

        </div>
    ) : <Loading />
}

export default Trending