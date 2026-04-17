import React, { useState, useContext } from 'react';
import { FaVideo } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { HiBellSnooze } from 'react-icons/hi2';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';
import { RiDeleteBin6Line, RiInboxArchiveLine } from 'react-icons/ri';
import { Link, useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TimelineContext } from '../../context/TimelineContext';

const CardDetails = () => {
    const { friendId } = useParams();
    // console.log(friendId);

    const friends = useLoaderData();
    // console.log(friends);

    const SingleFriend = friends.find(friend => friend.id === parseInt(friendId));
    // console.log(SingleFriend);

    const {
        picture,
        status,
        tags,
        bio,
        email,
        name,
        goal,
        next_due_date,
        days_since_contact
    } = SingleFriend;

    const { timeline, addActivity } = useContext(TimelineContext);

    const handleInteraction = (type) => {
        addActivity(type);
        
        const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);
        toast.success(`${typeLabel} activity added!`, {
            position: "top-right",
            autoClose: 2000
        });
    }


    return (

        <div className='container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-15 mt-4 sm:mt-5 flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12'>
            <div className='w-full sm:w-80 md:w-96 lg:w-80 flex-shrink-0'>
                <div className="card bg-base-100 h-auto sm:h-96 md:h-[420px] lg:h-[380px] shadow-sm items-center p-4 sm:p-5 md:p-6">
                    <figure>
                        <img className='ring-primary ring-offset-base-100 rounded-full w-32 sm:w-40 md:w-48 lg:w-40 h-32 sm:h-40 md:h-48 lg:h-40 object-cover'
                            src={picture} />
                    </figure>
                    <div className="card-body items-center text-center p-3 sm:p-4 md:p-5">
                        <h2 className="card-title text-base sm:text-lg md:text-xl">
                            {name}
                        </h2>
                        <div className="badge badge-secondary text-xs sm:text-sm">{status}</div>
                        <div className='flex flex-wrap gap-1 sm:gap-2 justify-center'>
                        {
                            tags.map((tag, id) =>
                                <div key={id} className="badge badge-soft badge-success text-xs sm:text-sm">{tag}</div>
                            )
                        }
                        </div>
                        <p className='text-xs sm:text-sm text-gray-400 line-clamp-2'>{bio}</p>
                        <p className='text-xs sm:text-sm text-gray-400'>Preferred:{email}</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-2 sm:gap-3 md:gap-4 lg:gap-3 mt-6 sm:mt-8 md:mt-12 lg:mt-15'>
                    <button className='btn btn-sm sm:btn-md text-xs sm:text-sm'> <HiBellSnooze />Snooze 2 weeks</button>
                    <button className='btn btn-sm sm:btn-md text-xs sm:text-sm'> <RiInboxArchiveLine />Archive</button>
                    <button className='btn btn-sm sm:btn-md text-xs sm:text-sm'> <RiDeleteBin6Line />Delete</button>
                </div>
            </div>
            <div className='flex-1 w-full'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                    <div className="shadow rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 items-center text-center">
                        <div className="text-[#244D3F] text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold">{days_since_contact}</div>
                        <div className="text-gray-500 text-xs sm:text-sm md:text-base">Days Since Contact</div>
                    </div>
                    <div className="shadow rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 items-center text-center">
                        <div className="text-[#244D3F] text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold">{goal}</div>
                        <div className="text-gray-500 text-xs sm:text-sm md:text-base">Goal</div>
                    </div>
                    <div className="shadow rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 items-center text-center">
                        <div className="text-[#244D3F] text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold">{next_due_date}</div>
                        <div className="text-gray-500 text-xs sm:text-sm md:text-base">Next Due Date</div>
                    </div>
                </div>
                <div className='shadow rounded-xl mt-6 sm:mt-8 md:mt-10 lg:mt-12 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6'>
                    <div>
                        <p className='text-[#244D3F] text-base sm:text-lg md:text-xl font-semibold pb-2 sm:pb-3 md:pb-5'>Relationship Goal</p>
                        <p className='text-base sm:text-lg md:text-xl font-semibold'><small className='text-gray-500 text-xs sm:text-sm md:text-base font-semibold'>Connect every</small> 30 days</p>
                    </div>
                    <kbd className="kbd text-xs sm:text-sm">Edit</kbd>
                </div>

                <div>
                    <p className='mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold'>Quick Check-In</p>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12'>
                        <button onClick={() => handleInteraction('call')}
                        className='shadow rounded-xl p-6 sm:p-8 md:p-10 text-center cursor-pointer hover:shadow-md transition-shadow'>
                            <FiPhoneCall className='text-2xl sm:text-3xl mx-auto mb-2 sm:mb-3' />
                            <p className='text-gray-600 font-semibold text-xs sm:text-sm md:text-base'>Calls</p>
                        </button>
                        <button
                        onClick={() => handleInteraction('text')}
                         className='shadow rounded-xl p-6 sm:p-8 md:p-10 text-center cursor-pointer hover:shadow-md transition-shadow'>
                            <MdOutlineTextsms className='text-2xl sm:text-3xl mx-auto mb-2 sm:mb-3' />
                            <p className='text-gray-600 font-semibold text-xs sm:text-sm md:text-base'>Text</p>
                        </button>
                        <button 
                        onClick={() => handleInteraction("video")}
                        className='shadow rounded-xl p-6 sm:p-8 md:p-10 text-center cursor-pointer hover:shadow-md transition-shadow'>
                            <IoVideocamOutline className='text-2xl sm:text-3xl mx-auto mb-2 sm:mb-3' />
                            <p className='text-gray-600 font-semibold text-xs sm:text-sm md:text-base'>Video</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;