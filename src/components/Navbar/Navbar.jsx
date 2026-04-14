import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const menuItems = (
        <>
        <NavLink to={'/'}
        className={({isActive}) =>isActive ? "bg-[#244D3F] text-white px-4 py-2 rounded-lg" : "px-4 py-2 rounded-lg"}>
        Home</NavLink>
        <NavLink to={'/card'} className={({isActive}) =>isActive ? "bg-[#244D3F] text-white px-4 py-2 rounded-lg" : "px-4 py-2 rounded-lg"}>TImeline</NavLink>
        <NavLink to={'/stats'} className={({isActive}) =>isActive ? "bg-[#244D3F] text-white px-4 py-2 rounded-lg" : "px-4 py-2 rounded-lg"}>Stats</NavLink>
        </>
    )
    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className="flex-1 ">
                <a className="font-bold text-xl">Keen<span className='text-[#244D3F] font-semibold'>Keeper</span></a>
            </div>
            <div className="flex space-x-2    rounded-lg px-4 py-2">
                {menuItems}
            </div>
        </div>
    );
};

export default Navbar;