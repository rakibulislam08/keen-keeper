import React from 'react';

const Error = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center bg-white text-[#244e63] text-center px-4 sm:px-6 md:px-8'>
            <h1 className='text-7xl sm:text-8xl md:text-9xl m-0 font-bold'>404</h1>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl my-3 sm:my-4 md:my-6'>Page Not Found</h2>
            <p className='text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 text-white max-w-md'>
                The page you're looking for doesn't exist or has been moved.
            </p>
            <a href="/" className='no-underline bg-blue-500 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-lg font-bold hover:bg-blue-600 transition text-sm sm:text-base md:text-lg'>
                Go Back Home
            </a>
        </div>
    );
};

export default Error;