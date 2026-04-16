import React from 'react';
import { FaHome } from 'react-icons/fa';
import { RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const menuItems = (
        <>
            
                <NavLink to={'/'}
                    className= {({ isActive }) => `flex items-center gap-1 ${isActive ? "bg-[#244D3F] text-white px-4 py-2 rounded-lg" : ""}`}>
                    <FaHome />Home </NavLink>
           
            <NavLink to={'/card'} className= {({ isActive }) => `flex items-center gap-1 ${isActive ? "bg-[#244D3F] text-white px-4 py-2 rounded-lg" : ""}`}><RiTimeLine />Timeline</NavLink>
            <NavLink to={'/stats'} className= {({ isActive }) => `flex items-center gap-1 ${isActive ? "bg-[#244D3F] text-white px-4 py-2 rounded-lg" : ""}`}><TfiStatsUp />Stats</NavLink>
        </>
    )
    return (
        <nav className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto  ">
                <div className="flex-1 ">
                    <a className="font-bold text-xl">Keen<span className='text-[#244D3F] font-semibold'>Keeper</span></a>
                </div>
                <div className="flex space-x-2    rounded-lg px-4 py-2">
                    {menuItems}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;