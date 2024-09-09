import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadmovie, removemovie } from './store/actions/movieActions'
import Loading from './template/Loading'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import HorizontalCards from './template/HorizontalCards'

export default function Component() {
  const { pathname } = useLocation()
  const { id } = useParams()
  const { info } = useSelector((state) => state.movie)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(asyncloadmovie(id))
    return () => {
      dispatch(removemovie())
    }
  }, [id, dispatch])

  if (!info) return <Loading />

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.3), rgba(0,0,0,.6)),
      url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      className="min-h-screen w-full overflow-x-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Navigation */}
      <nav className="flex items-center gap-4 py-4 text-xl text-white sm:gap-6 sm:text-2xl">
        <button onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></button>
        <a target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110" href={info.details.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
          <i className="ri-earth-fill"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>
          imdb
        </a>
      </nav>

      {/* Poster and Details */}
      <div className="flex flex-col gap-6 md:flex-row">
        <img
          className="h-auto w-full max-w-[300px] rounded-md object-cover shadow-lg transition-shadow hover:shadow-[8px_17px_38px_2px_rgba(101,86,205,1)] md:h-[50vh]"
          src={`https://image.tmdb.org/t/p/original/${info.details.poster_path || info.details.backdrop_path}`}
          alt=""
        />

        <div className="flex-1">
          <h1 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
            {info.details.name || info.details.title || info.details.original_name || info.details.original_title}
            <small className="ml-2 text-xl font-bold text-zinc-300 sm:text-2xl">{info.details.release_date.split('-')[0]}</small>
          </h1>

          <div className="mt-3 mb-4 flex flex-wrap items-center gap-3 text-white sm:gap-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-lg font-bold">
              {(info.details.vote_average * 10).toFixed()}<sup>%</sup>
            </span>
            <h2 className="text-lg font-semibold sm:text-xl">User Score</h2>
            <h2>{info.details.release_date}</h2>
            <h2>{info.details.genres.map((item) => item.name).join(', ')}</h2>
            <h2>{info.details.runtime} min</h2>
          </div>

          <h2 className="text-lg italic text-zinc-200 sm:text-xl">{info.details.tagline}</h2>

          <h2 className="mt-4 mb-2 text-xl text-white">Overview</h2>
          <p className="text-white">{info.details.overview}</p>

          <h2 className="mt-4 mb-2 text-xl text-white">Movie Translated</h2>
          <p className="mb-6 text-white">{info.translations.join(' ')}</p>

          <Link
            className="inline-block rounded-md bg-white p-3 px-6 transition-colors hover:bg-blue-500 hover:text-white"
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-large-fill"></i> Play Trailer
          </Link>
        </div>
      </div>

      {/* Platforms */}
      <div className="mt-8 space-y-6">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex flex-wrap items-center gap-4 text-white">
            <h2 className="text-lg font-semibold">Available on platforms</h2>
            <div className="flex flex-wrap gap-3">
              {info.watchproviders.flatrate.map((item, index) => (
                <img
                  key={index}
                  title={item.provider_name}
                  className="h-10 w-10 rounded-md object-cover sm:h-12 sm:w-12"
                  src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                  alt={item.provider_name}
                />
              ))}
            </div>
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex flex-wrap items-center gap-4 text-white">
            <h2 className="text-lg font-semibold">Available on Rent</h2>
            <div className="flex flex-wrap gap-3">
              {info.watchproviders.rent.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="h-10 w-10 rounded-md object-cover sm:h-12 sm:w-12"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt={w.provider_name}
                />
              ))}
            </div>
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex flex-wrap items-center gap-4 text-white">
            <h2 className="text-lg font-semibold">Available to buy</h2>
            <div className="flex flex-wrap gap-3">
              {info.watchproviders.buy.map((item, index) => (
                <img
                  key={index}
                  title={item.provider_name}
                  className="h-10 w-10 rounded-md object-cover sm:h-12 sm:w-12"
                  src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                  alt={item.provider_name}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Recommendations and Similar */}
      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Recommendations And Similar</h2>
        <HorizontalCards data={info.recommendations.length > 0 ? info.recommendations : info.similar} />
      </div>

      <Outlet />
    </div>
  )
}