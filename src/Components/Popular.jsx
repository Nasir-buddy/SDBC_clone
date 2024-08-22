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
    document.title = "SCSDB | Popular" + category.toUpperCase();
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
        <div className='w-screen h-screen'>
            <div className='w-full flex items-center px-10'>
                <h1 className='text-2xl text-zinc-400 font-semibold'>
                    <i
                        onClick={() => { navigate(-1) }}
                        className="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i>
                    Popular</h1>
                <Topnav />
                <Dropdown title='category' options={["movie", "tv"]} func={(event) => setCategory(event.target.value)} />
            </div>

            <InfiniteScroll dataLength={popular.length} next={getPopular} hasMore={hasMore} loader={<h1>Loading</h1>}>
                <Cards data={popular} title={category} />
            </InfiniteScroll>

        </div>
    ) : <Loading />
}

export default Popular