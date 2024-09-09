import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';
import noimage from '/no-image.jpg';

const Topnav = () => {
    const [query, setQuery] = useState("");
    const [searches, setSearches] = useState([]);

    const GetSearch = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setSearches(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (query.length > 0) {
            GetSearch();
        } else {
            setSearches([]);
        }
    }, [query]);

    return (
        <div className="relative w-full max-w-2xl mx-auto">
      <div className="flex items-center bg-zinc-800 rounded-full overflow-hidden shadow-lg">
        <i className="ri-search-eye-line text-xl sm:text-2xl text-zinc-300 ml-4"></i>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search anything"
          className="flex-1 px-4 py-2 sm:py-3 bg-transparent text-zinc-300 placeholder-zinc-500 border-none outline-none"
        />
        {query.length > 0 && (
          <button
            onClick={() => setQuery("")}
            className="p-2 text-zinc-300 hover:text-white transition-colors duration-300"
            aria-label="Clear search"
          >
            <i className="ri-close-line text-xl sm:text-2xl"></i>
          </button>
        )}
      </div>

      {query.length > 0 && searches.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 max-h-[60vh] bg-zinc-800 rounded-lg overflow-auto shadow-lg z-10">
          {searches.map((item, index) => (
            <Link
              to={`/${item.media_type}/details/${item.id}`}
              key={index}
              className="flex items-center p-3 hover:bg-zinc-700 transition duration-300"
            >
              <img
                className="w-16 h-16 object-cover rounded-md mr-4"
                src={item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/w200/${item.backdrop_path || item.profile_path}` : noimage}
                alt={item.name || item.title || "Search result"}
              />
              <span className="text-sm sm:text-base text-zinc-300">
                {item.name || item.title || item.original_name || item.original_title}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
    );
};

export default Topnav;
