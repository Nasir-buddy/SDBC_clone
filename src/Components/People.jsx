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
            console.log(data);
            
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
            <div className='w-full flex items-center px-10'>
                <h1 className='text-2xl text-zinc-400 font-semibold'>
                    <i
                        onClick={() => { navigate(-1) }}
                        className="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i>
                    Persons</h1>
                <Topnav />
            </div>
  
            <InfiniteScroll dataLength={person.length} next={getPerson} hasMore={hasMore} loader={<h1>Loading</h1>}>
                <Cards data={person} title={category} />
            </InfiniteScroll>
  
        </div>
    ) : <Loading />
}

export default People