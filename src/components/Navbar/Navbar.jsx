import React from 'react';
import { FaHome } from 'react-icons/fa';
import { RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const menuItems = (
        <>

            <NavLink to={'/'}
                className={({ isActive }) => `flex items-center gap-1 ${isActive ? "bg-[#244D3F] text-white px-4 py-2 rounded-lg" : ""}`}> <FaHome />Home </NavLink>
            <NavLink to={'/timeline'} className={({ isActive }) => `flex items-center gap-1 ${isActive ? "bg-[#244D3F] text-white px-4 py-2 rounded-lg" : ""}`}><RiTimeLine />Timeline</NavLink>
            <NavLink to={'/stats'} className={({ isActive }) => `flex items-center gap-1 ${isActive ? "bg-[#244D3F] text-white px-4 py-2 rounded-lg" : ""}`}><TfiStatsUp />Stats</NavLink>
        </>
    )
    return (
        <nav className='bg-base-100 shadow-sm sticky top-0 z-50'>
            <div className="navbar container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex-1">
                    <a className="font-bold text-lg sm:text-xl md:text-2xl">Keen<span className='text-[#244D3F] font-semibold'>Keeper</span></a>
                </div>
                <div className=" grid gap-1 sm:grid-rows-1 md:grid-cols-1 lg:grid-cols-3 rounded-lg px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm md:text-base">
                    {menuItems}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;