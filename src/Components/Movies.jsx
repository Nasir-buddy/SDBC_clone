import React from 'react';
import axios from '../utils/axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Loading from './template/Loading';
import Topnav from './template/Topnav';
import Dropdown from './template/Dropdown';
import Cards from './template/Cards';

const Movies = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("now_playing");
    const [movie, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    document.title = "SCSDB | Movies";

    const getMovies = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);
            if (data.results.length > 0) {
                setMovies(prev => [...prev, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const refreshHandler = () => { 
        if (movie.length === 0) {
            getMovies();
        } else {
            setPage(1);
            setMovies([]);
            getMovies();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return movie.length > 0 ? (
        <div className='w-screen h-screen mt-3'>
            {/* Header Section */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center px-5 py-5 sm:py-1'>
                <h1 className='text-2xl text-zinc-400 font-semibold flex items-center'>
                    <i
                        onClick={() => { navigate(-1) }}
                        className="hover:text-[#6556CD] ri-arrow-left-line mr-2"
                    ></i>
                    Movies
                </h1>

                {/* Ensure Topnav spans full width on its column */}
                <div className='col-span-1'>
                    <Topnav />
                </div>

                {/* Align Dropdown to the right */}
                <div className='flex justify-center md:justify-end'>
                    <Dropdown title='category' options={["now_playing", "popular", "top_rated", "upcoming"]} func={(event) => setCategory(event.target.value)} />
                </div>
            </div>

            {/* Infinite Scroll Section */}
            <InfiniteScroll
                dataLength={movie.length}
                next={getMovies}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
            >
                <Cards data={movie} title='movie' />
            </InfiniteScroll>
        </div>
    ) : <Loading />;
};

export default Movies;
