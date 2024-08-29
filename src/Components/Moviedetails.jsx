import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadmovie, removemovie } from './store/actions/movieActions';
import Loading from './template/Loading';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Moviedetails = () => {
  const { id } = useParams();
  const { info } = useSelector((state)=>state.movie);
  console.log("info details : ", info);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    dispatch(asyncloadmovie(id));
    return ()=>{
      dispatch(removemovie());
    } 
  }, [])
  return info ?  (
    <div
    style={{
      background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.3), rgba(0,0,0,.6)),
      url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
    className='w-screen h-screen px-[10%]'>
      <nav className='w-full'>
      <Link
        onClick={() => { navigate(-1) }}
        className="hover:text-[#6556CD] ri-arrow-left-line mr-2"></Link>

        <a href=""><i className="ri-external-fill"></i></a>
        <a href=""><i className="ri-earth-fill"></i></a>
        <a href="">imdb</a>
      </nav>
    </div>
  ) : <Loading />
}

export default Moviedetails     