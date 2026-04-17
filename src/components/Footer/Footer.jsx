import React from 'react';
import { FaFacebook, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer footer-vertical grid sm:grid-cols-1 lg:grid-cols-2 bg-[#244D3F] text-primary-content mt-8 px-4 ">
            <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-6 sm:mt-8 md:mt-10'>KeenKeeper</h1>

            <p className="font-semibold text-gray-400 text-xs sm:text-sm md:text-base max-w-md">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>

            <nav>
                <h3 className='text-base sm:text-lg md:text-xl font-semibold'>Social Links</h3>
                <div className="grid grid-flow-col gap-3 sm:gap-4 text-2xl sm:text-3xl md:text-4xl">
                    <FaInstagram />
                    <FaFacebook />
                    <FaSquareXTwitter />
                </div>
            </nav>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 w-full mb-6 sm:mb-8 md:mb-10'>
                <p> © {new Date().getFullYear()} - KeenKeeper. All rights reserved.</p>
                <div className='flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-400'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;