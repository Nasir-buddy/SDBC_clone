import React from 'react'
import axios from '../utils/axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Loading from './template/Loading';
import Topnav from './template/Topnav';
import Dropdown from './template/Dropdown';
import Cards from './template/Cards';

const People = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("popular");
    const [person, setPerson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "SCSDB | TV Shows"
    const getPerson = async () => {
        try {
            const { data } = await axios.get(`/person/${category}?page=${page}`);
            if (data.results.length > 0) {
                setPerson((prev) => [...prev, ...data.results]);
                setpage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const refreshHandler = () => {
        if (person.length === 0) {
            getPerson();
        } else {
            setpage(1);
            setPerson([]);
            getPerson();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category]);
    return person.length > 0 ? (
        <div className='w-screen h-screen'>
        {/* Header Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center px-5 max-[640px]:py-5 sm:py-5'>
            <h1 className='text-xl md:text-2xl text-zinc-400 font-semibold max-md:mb-5'>
                <i
                    onClick={() => { navigate(-1) }}
                    className="hover:text-[#6556CD] ri-arrow-left-line mr-2"
                ></i>
                Persons
            </h1>
    
            {/* Center Topnav in the second column */}
            <div className='flex justify-center md:justify-end'>
                <Topnav />
            </div>
        </div>
    
        {/* Infinite Scroll Section */}
        <InfiniteScroll dataLength={person.length} next={getPerson} hasMore={hasMore} loader={<h1>Loading...</h1>}>
            {/* Card Section */}
            <Cards data={person} title='person' />
        </InfiniteScroll>
    </div>
    

    ) : <Loading />
}

export default People