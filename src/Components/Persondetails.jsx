import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadperson, removeperson } from './store/actions/personAction';
import Loading from './template/Loading';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import HorizontalCards from './template/HorizontalCards'
import Dropdown from './template/Dropdown';



const Persondetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const [category, setCategory] = useState("movie")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    }
  }, [id]);

  return info ? (
    <div className='px-4 md:px-10 lg:px-[4%] w-full flex flex-col overflow-auto'>
  {/* part 1: Navigation */}
  <nav className='h-[10vh] flex gap-5 md:gap-10 items-center text-lg md:text-2xl text-white'>
    <Link
      onClick={() => { navigate(-1) }}
      className="hover:text-[#6556CD] ri-arrow-left-line"
    ></Link>
  </nav>

  {/* part 2: Main Content */}
  <div className='w-full flex flex-col lg:flex-row'>
    {/* Left Section: Poster and Details */}
    <div className='w-full lg:w-[30%] xl:w-[20%]'>
      <img
        className='h-[30vh] md:h-[35vh] w-full rounded-md shadow-lg hover:shadow-xl object-cover'
        src={`https://image.tmdb.org/t/p/original/${info.details.profile_path}`}
        alt=""
      />
      <hr className='mt-10 h-[3px] border-none bg-zinc-600' />

      {/* Links */}
      <div className='text-lg md:text-2xl flex gap-2 md:gap-4 mt-3 text-white'>
        {info.externalid.wikidata_id && (
          <a
            target='_blank'
            className='transition ease-in-out hover:scale-125 delay-100'
            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          >
            <i className="ri-earth-fill"></i>
          </a>
        )}
        {info.externalid.facebook_id && (
          <a
            target='_blank'
            className='transition ease-in-out hover:scale-125 delay-100'
            href={`https://www.facebook.com/${info.externalid.facebook_id}`}
          >
            <i className="ri-facebook-line"></i>
          </a>
        )}
        {info.externalid.instagram_id && (
          <a
            target='_blank'
            className='transition ease-in-out hover:scale-125 delay-100'
            href={`https://www.instagram.com/${info.externalid.instagram_id}`}
          >
            <i className="ri-instagram-line"></i>
          </a>
        )}
      </div>

      {/* Personal Information */}
      <div className='mt-4'>
        <h1 className='text-lg md:text-xl font-semibold italic text-zinc-400'>Personal Information</h1>
        <div className='mt-3'>
          <h1 className='text-md md:text-lg font-semibold italic text-zinc-400'>Known For</h1>
          <h1 className='text-zinc-400'>{info.details.known_for_department}</h1>
        </div>
        <div className='mt-3'>
          <h1 className='text-md md:text-lg font-semibold italic text-zinc-400'>Gender</h1>
          <h1 className='text-zinc-400'>{info.details.gender === 2 ? "Male" : "Female"}</h1>
        </div>
        <div className='mt-3'>
          <h1 className='text-md md:text-lg font-semibold italic text-zinc-400'>Date of Birth</h1>
          <h1 className='text-zinc-400'>{info.details.birthday}</h1>
        </div>
        <div className='mt-3'>
          <h1 className='text-md md:text-lg font-semibold italic text-zinc-400'>Death Day</h1>
          <h1 className='text-zinc-400'>{info.details.deathday || "Alive"}</h1>
        </div>
        <div className='mt-3'>
          <h1 className='text-md md:text-lg font-semibold italic text-zinc-400'>Place of Birth</h1>
          <h1 className='text-zinc-400'>{info.details.place_of_birth}</h1>
        </div>
        <div className='mt-3'>
          <h1 className='text-md md:text-lg font-semibold italic text-zinc-400'>Also Known for</h1>
          <h1 className='text-zinc-400'>{info.details.also_known_as.join(', ')}</h1>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className='w-full lg:w-[70%] xl:w-[75%] ml-0 lg:ml-[5%]'>
      <h1 className='text-2xl text-zinc-400 font-semibold my-5 '>
        {info.details.name}
      </h1>

      {/* Biography */}
      <h1 className='text-lg text-zinc-400 font-semibold'>
        Biography
      </h1>
      <p className='text-zinc-400 mt-5'>{info.details.biography}</p>

      {/* Summary */}
      <h1 className='text-lg text-zinc-400 font-semibold mt-3'>
        Summary
      </h1>
      <HorizontalCards data={info.combinedCredits.cast} />

      {/* Acting Section */}
      <div className='w-full flex justify-between mt-5'>
        <h1 className='text-xl text-zinc-400 font-semibold'>
          Acting
        </h1>
        <Dropdown title="Category" options={["tv", "movie"]} func={(e) => setCategory(e.target.value)} />
      </div>

      {/* Acting List */}
      <div className='list-disc text-zinc-400 w-full h-[50vh] rounded-lg overflow-y-auto shadow-[0px_39px_48px_15px_rgba(170,_144,_170,_0.3)] mb-10 mt-5'>
        {info[category + "Credits"]?.data.cast.map((c, i) => (
          <li key={i} className='hover:text-white duration-300 cursor-pointer p-5 rounded'>
            <Link to={`/${category}/details/${c.id}`}>
              <span>
                {c.name || c.title || c.original_name || c.original_title}
              </span>
              {c.character && <span className='block'>Character Name: {c.character}</span>}
            </Link>
          </li>
        ))}
      </div>
    </div>
  </div>
</div>


  ) : <Loading />
}

export default Persondetails

