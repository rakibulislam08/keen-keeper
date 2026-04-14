import React from 'react';

const Banner = () => {
    return (

        <>
            <div className="hero bg-base-200 h-[250px] container mx-auto ">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-3xl font-bold">Friends to keep close in your life</h1>
                        <p className="py-6 text-gray-600">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the
                            <br />
                            relationships that matter most.
                        </p>
                        <button className="btn bg-[#244D3F] text-white">Add a Friend</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto my-8'>
                <div className="stats shadow">
                    <div className="stat text-center ">
                       <p className='font-semibold text-xl'>10</p>
                       <p className='font-semibold  text-gray-600'>Total Friends</p>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat text-center ">
                       <p className='font-semibold text-xl'>3</p>
                       <p className='font-semibold  text-gray-600'>on Track</p>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat text-center ">
                       <p className='font-semibold text-xl'>6</p>
                       <p className='font-semibold  text-gray-600'>Need Attention</p>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat text-center ">
                       <p className='font-semibold text-xl'>12</p>
                       <p className='font-semibold  text-gray-600'>Interactions This Month</p>
                    </div>
                </div>
               
            </div>
        </>
    );
};

export default Banner;