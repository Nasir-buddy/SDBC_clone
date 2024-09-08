import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadperson, removeperson } from './store/actions/personAction';
import Loading from './template/Loading';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import HorizontalCards from './template/HorizontalCards'



const Persondetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  console.log("info details : ", info);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    }
  }, [id]);

  return info ? (
    <div className='px-[10%] w-screen flex flex-col'>
      {/* part 1 */}
      <nav className='h-[10vh] flex gap-10 items-center text-2xl text-white'>
        <Link
          onClick={() => { navigate(-1) }}
          className="hover:text-[#6556CD] ri-arrow-left-line"></Link>
      </nav>
      <div>
        {/* part 2 left poster and details*/}
        <div className='w-full'>
          <div className='w-[20%]'>
            <img className='h-[30vh] rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:shadow-[8px_17px_38px_2px_rgba(101,86,205,1)] object-cover'
              src={`https://image.tmdb.org/t/p/original/${info.details.profile_path}`}
              style={{ objectFit: 'cover' }}
              alt="" />

            <hr className='mt-10 h-[3px] border-none bg-zinc-600' />
            {/* links */}
            <div className='text-2xl flex gap-4 mt-3 text-white'>
              <a target='_blank' className='transition ease-in-out hover:scale-125 delay-100' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a> 
              <a target='_blank' className='transition ease-in-out hover:scale-125 delay-100' href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className="ri-facebook-line"></i></a>
              <a target='_blank' className='transition ease-in-out hover:scale-125 delay-100' href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i className="ri-instagram-line"></i></a>
            </div>

            {/* personal information */}
            <h1 className='text-xl font-semibold italic text-zinc-400 mt-4'>Personal Information</h1>
            <h1 className='text-lg font-semibold italic text-zinc-400 '>Known For </h1>
            <h1 className='text-zinc-400 '>{info.details.known_for_department}</h1>

            <h1 className='text-lg font-semibold italic text-zinc-400 mt-3'>Gender</h1>
            <h1 className='text-zinc-400 '>{info.details.gender === 2 ? "Male" : "Female"}</h1>
          
            <h1 className='text-lg font-semibold italic text-zinc-400 mt-3'>Date fo birth</h1>
            <h1 className='text-zinc-400 '>{info.details.birthday}</h1>

            <h1 className='text-lg font-semibold italic text-zinc-400 mt-3'>Death Day</h1>
            <h1 className='text-zinc-400 '>{info.details.deathday ? info.details.deathday : "Alive"}</h1>

            <h1 className='text-lg font-semibold italic text-zinc-400 mt-3'>Place of Birth</h1>
            <h1 className='text-zinc-400 '>{info.details.place_of_birth}</h1>
            
            <h1 className='text-lg font-semibold italic text-zinc-400 mt-3'>Also Known for</h1>
            <h1 className='text-zinc-400 '>{info.details.also_known_as.join(' ')}</h1>
          </div>
        </div>
      </div>
    </div>
  ) : <Loading />
}

export default Persondetails

