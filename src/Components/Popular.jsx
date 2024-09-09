import axios from '../utils/axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Loading from './template/Loading';
import Topnav from './template/Topnav';
import Dropdown from './template/Dropdown';
import Cards from './template/Cards';
const Popular = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "SCSDB | Popular"
    const getPopular = async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);
            if (data.results.length > 0) {
                setpopular((prev) => [...prev, ...data.results]);
                setpage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const refreshHandler = () => { 
        if (popular.length === 0) {
            getPopular();
        } else {
            setpage(1);
            setpopular([]);
            getPopular();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category]);
    return popular.length > 0 ? (
        <div className='w-screen h-screen mt-3'>
        {/* Header Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center px-5 py-5 sm:py-1'>
            <h1 className='text-2xl text-zinc-400 font-semibold flex items-center'>
                <i
                    onClick={() => { navigate(-1) }}
                    className="hover:text-[#6556CD] ri-arrow-left-line mr-2"
                ></i>
                Popular
            </h1>

            {/* Ensure Topnav spans full width on its column */}
            <div className='col-span-1md:col-span-2'>
                <Topnav />
            </div>

            {/* Align Dropdown to the right */}
            <div className='flex justify-center md:justify-end'>
                <Dropdown title='category' options={["movie", "tv"]} func={(event) => setCategory(event.target.value)} />
            </div>
        </div>

        {/* Infinite Scroll Section */}
        <InfiniteScroll dataLength={popular.length} next={getPopular} hasMore={hasMore} loader={<h1>Loading...</h1>}>
            <Cards data={popular} title={category} />
        </InfiniteScroll>
    </div>
    ) : <Loading />
}

export default Popular