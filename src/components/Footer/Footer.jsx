import React from 'react';
import { FaFacebook, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content mt-10">
            <h1 className='text-8xl font-bold mt-10 '>KeenKeeper</h1>

            <p className="font-semibold text-gray-400">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>

            <nav>
                <h3 className='text-xl font-semibold'>Social Links</h3>
                <div className="grid grid-flow-col gap-4 text-4xl">
                    <FaInstagram />
                    <FaFacebook />
                    <FaSquareXTwitter />
                </div>
            </nav>
            <div className='flex justify-between items-center text-sm text-gray-400 container mx-auto px-20 mb-10 w-full'>
                <p> © {new Date().getFullYear()} - KeenKeeper. All rights reserved.</p>
                <div className=' flex space-x-4 text-sm text-gray-400'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;