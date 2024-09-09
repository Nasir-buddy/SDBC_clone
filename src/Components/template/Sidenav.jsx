import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ResponsiveSideNav() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => setIsOpen(!isOpen)

    return (
        <>
            {/* Mobile menu button */}
            <button
                className="lg:hidden absolute top-12 left-4 z-100 p-2 rounded-md bg-zinc-800 text-white"
                onClick={toggleNav}
                aria-label="Toggle menu"
            >
                <i className={`ri-${isOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
                    onClick={toggleNav}
                ></div>
            )}

            {/* Side Navigation */}
            <div
                className={`
          fixed top-0 left-0 h-full w-64 bg-zinc-900 p-6 overflow-y-auto transition-transform duration-300 ease-in-out z-20
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:w-1/5 lg:min-w-[250px]
        `}
            >
                <h1 className="text-2xl text-white font-bold mb-10">
                    <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
                    <span className='bg-gradient-to-bl from-slate-200 via-violet-500 to-zinc-400 bg-clip-text text-transparent'>Nasir Ali OTT</span>
                </h1>

                {/* Nav sections */}
                <nav className="flex flex-col text-zinc-400 text-lg space-y-2 bg-gradient-to-bl from-slate-200 via-violet-500 to-zinc-400 bg-clip-text text-transparent">
                    <h2 className="text-white font-semibold mt-6 mb-3">New Feeds</h2>

                    <NavLink to="/trending" icon="ri-fire-fill">
                        Trending
                    </NavLink>
                    <NavLink to="/popular" icon="ri-bard-fill">
                        Popular
                    </NavLink>
                    <NavLink to="/movie" icon="ri-movie-2-line">
                        Movies
                    </NavLink>
                    <NavLink to="/tv" icon="ri-tv-2-fill">
                        TV Shows
                    </NavLink>
                    <NavLink to="/people" icon="ri-group-line">
                        People
                    </NavLink>
                </nav>

                <hr className="border-none h-px bg-zinc-700 my-6" />

                <nav className="flex flex-col text-zinc-400 text-lg space-y-2 bg-gradient-to-bl from-slate-200 via-violet-500 to-zinc-400 bg-clip-text text-transparent">
                    <h2 className="text-white font-semibold mb-3">Website Information</h2>
                    <NavLink to="/about" icon="ri-information-line">
                        About Us
                    </NavLink>
                    <NavLink to="/contact" icon="ri-contacts-line">
                        Contact Us
                    </NavLink>
                </nav>
            </div>
        </>
    )
}

function NavLink({ to, icon, children }) {
    return (
        <Link
            to={to}
            className="flex items-center hover:bg-[#6556CD] hover:text-white transition-colors duration-300 rounded-lg p-3"
        >
            <i className={`${icon} mr-3 text-xl`}></i>
            {children}
        </Link>
    )
}