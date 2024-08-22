import axios from '../utils/axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Popular = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getPopular = async () => {
        try {
            const { data } = await axios.get(` ${category}/popular?page=${page}`);
            // setpopular(data.results);
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
    return (
        <div>Popular</div>
    )
}

export default Popular