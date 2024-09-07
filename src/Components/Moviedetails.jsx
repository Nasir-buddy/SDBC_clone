import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadmovie, removemovie } from './store/actions/movieActions';
import Loading from './template/Loading';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Moviedetails = () => {
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  console.log("info details : ", info);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    }
  }, [])
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.3), rgba(0,0,0,.6)),
      url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      className='w-screen h-screen px-[10%]'>
      {/* part 1 navigation */}
      <nav className='h-[8vh] flex gap-10 items-center text-2xl text-white'>
        <Link

          onClick={() => { navigate(-1) }}
          className="hover:text-[#6556CD] ri-arrow-left-line"></Link>

        <a target='_blank' className='transition ease-in-out hover:scale-125 delay-100' href={info.details.homepage}><i className="ri-external-link-fill"></i></a>
        <a target='_blank' className='transition ease-in-out hover:scale-125 delay-100' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
        <a target='_blank' className='transition ease-in-out hover:scale-125 delay-100' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>imdb</a>
      </nav>
      {/* part 2 poster and details*/}
      <div className='w-full flex'>
        <img className='h-[40vh] rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:shadow-[8px_17px_38px_2px_rgba(101,86,205,1)] object-cover'
          src={`https://image.tmdb.org/t/p/original/${info.details.poster_path || info.details.backdrop_path}`}
          style={{ objectFit: 'cover' }}
          alt="" />

        {/* heading */}
        <div className='content ml-10'>
          <h1 className='text-5xl font-black text-white'>
            {info.details.name || info.details.title || info.details.original_name || info.details.original_title}
            <small className='text-2xl ml-3 font-bold text-zinc-300'>{info.details.release_date.split('-')[0]}</small>
          </h1>

        {/* rating div */}
        <div className='flex text-white items-center gap-x-5 mt-5 mb-10'>
          <span className='text-white h-[5vh] w-[5vh] bg-yellow-500 flex items-center justify-center rounded-full bottom-[25%] right-2'>
            {(info.details.vote_average * 10).toFixed()} <sup>%</sup>
          </span>
          <h1 className='font-semibold text-2xl w-[60px] leading-6'>User Score</h1>
          <h1>{info.details.release_date}</h1>
          <h1>{info.details.genres.map((item) => item.name).join(',')}</h1>
          <h1>{info.details.runtime}:min</h1>
        </div>

        </div>
      </div>
      {/* part 3 platforms */}
      <div className='flex flex-col w-[80%] gap-y-5 mt-10'>
        {info.watchproviders && info.watchproviders.flatrate &&
          <div className='flex gap-10 items-center text-white'>
            <h1>Available on platforms</h1>
            {info.watchproviders.flatrate.map((item) => (
              <img
                title={item.provider_name}
                className='w-[5vh] h-[5vh] object-cover rounded-md '
                src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} alt='' />
            ))}
          </div>}



        {info.watchproviders && info.watchproviders.rent &&
          <div className='flex gap-x-10 items-center text-white'>
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w) => (<img
              title={w.provider_name}
              className='w-[5vh] h-[5vh] object-cover rounded-md '
              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt='' />))}
          </div>
        }


        {info.watchproviders && info.watchproviders.buy &&
          <div className='flex gap-10 items-center text-white'>
            <h1>Available to buy </h1>
            {info.watchproviders.buy.map((item) => (
              <img
                title={item.provider_name}
                className='w-[5vh] h-[5vh] object-cover rounded-md '
                src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} alt='' />))}
          </div>}
      </div>


    </div>
  ) : <Loading />
}

export default Moviedetails     