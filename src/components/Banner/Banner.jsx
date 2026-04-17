import React from 'react';
import { FiPlus } from 'react-icons/fi';

const Banner = () => {
    return (

        <>
            <div className="hero bg-base-200 sm:h-[200px] md:h-[250px] lg:h-[280px]">
                <div className="hero-content text-center px-4 sm:px-6 md:px-8">
                    <div className="">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Friends to keep close in your life</h1>
                        <p className="py-3 sm:py-4 md:py-6 text-xs sm:text-sm md:text-base text-gray-600">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the
                            <br />
                            relationships that matter most.
                        </p>
                        <button className="btn btn-sm sm:btn-md md:btn-lg bg-[#244D3F] text-white"><FiPlus />Add a Friend</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 container mx-auto my-6 sm:my-8 px-4 sm:px-6 md:px-8'>
                <div className="stats shadow">
                    <div className="stat text-center py-3 sm:py-4">
                       <p className='font-semibold text-lg sm:text-xl md:text-2xl'>10</p>
                       <p className='font-semibold text-xs sm:text-sm text-gray-600'>Total Friends</p>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat text-center py-3 sm:py-4">
                       <p className='font-semibold text-lg sm:text-xl md:text-2xl'>3</p>
                       <p className='font-semibold text-xs sm:text-sm text-gray-600'>on Track</p>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat text-center py-3 sm:py-4">
                       <p className='font-semibold text-lg sm:text-xl md:text-2xl'>6</p>
                       <p className='font-semibold text-xs sm:text-sm text-gray-600'>Need Attention</p>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat text-center py-3 sm:py-4">
                       <p className='font-semibold text-lg sm:text-xl md:text-2xl'>12</p>
                       <p className='font-semibold text-xs sm:text-sm text-gray-600'>Interactions This Month</p>
                    </div>
                </div>
               
            </div>
        </>
    );
};

export default Banner;