import React from 'react';
import { FaFacebook, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='mx-auto'>
            <footer className="footer   bg-[#244D3F] p-10">
                <div className='container mx-auto flex flex-col   gap-4 justify-center text-center items-center'>
                    <h1 className='lg:text-5xl font-bold sm:text-sm text-white'>KeenKeeper</h1>

                    <p className="font-semibold  text-white">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <p className='text-white font-semibold text-3xl'>Social Link</p>
                    <nav>
                        <div className="grid grid-flow-col gap-4 text-white text-2xl">
                            <FaInstagram />
                            <FaFacebook />
                            <FaSquareXTwitter />
                        </div>
                    </nav>
                </div>
                <div className='container mx-auto sm:px-15 lg:flex sm:flex-row justify-between   text-white'>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    <div className='flex sm:flex-row flex-col gap-4 justify-center items-center'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;