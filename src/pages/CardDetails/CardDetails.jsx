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

        <div className='container mx-auto p-15 mt-5 flex gap-10'>
            <div className=' w-[320px]'>
                <div className="card bg-base-100  h-[380px] shadow-sm items-center">
                    <figure>
                        <img className='ring-primary  ring-offset-base-100   rounded-full'
                            src={picture} />
                    </figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">
                            {name}
                        </h2>
                        <div className="badge badge-secondary">{status}</div>
                        {
                            tags.map((tag, id) =>
                                <div key={id} className="badge badge-soft badge-success">{tags}</div>
                            )
                        }
                        <p className='text-semibold text-gray-400'>{bio}</p>
                        <p className='text-sm text-gray-400'>Preferred:{email}</p>
                    </div>
                </div>
                <div className='grid grid-row-3 mt-15 space-y-6'>
                    <button className='btn'> <HiBellSnooze />Snooze 2 weeks</button>
                    <button className='btn'> <RiInboxArchiveLine />Archive</button>
                    <button className='btn'> <RiDeleteBin6Line />Delete</button>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  ">
                    <div className="shadow rounded-xl p-10 items-center text-center">
                        <div className="text-[#244D3F]  text-3xl font-bold ">{days_since_contact}</div>
                        <div className="text-gray-500">Days Since Contact</div>
                    </div>
                    <div className="shadow rounded-xl p-10 items-center text-center">
                        <div className="text-[#244D3F]  text-3xl font-bold ">{goal}</div>
                        <div className="text-gray-500">Goal</div>
                    </div>
                    <div className="shadow rounded-xl p-10 items-center text-center">
                        <div className="text-[#244D3F]  text-3xl font-bold ">{next_due_date
                        }</div>
                        <div className="text-gray-500">Next Due Date</div>
                    </div>

                </div>
                <div className='shadow rounded-xl mt-10 p-5 flex justify-between'>

                    <div>
                        <p className='text-[#244D3F] text-xl font-semibold pb-5'>Relationship Goal</p>
                        <p className='text-xl font-semibold'><small className='text-gray-500 text-xl font-semibold'>Connect every</small> 30 days</p>
                    </div>

                    <kbd className="kbd">Edit</kbd>
                </div>

                <div>
                    <p className='mt-15  text-2xl font-semibold'>Quick Check-In</p>


                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6  mt-10'>
                        <button onClick={() => handleInteraction('call')}
                        className='shadow rounded-xl p-10 mx-auto w-[250px] text-center cursor-pointer'>
                            <FiPhoneCall className='text-3xl mx-auto mb-2 ' />
                            <p className='text-gray-600 font-semibold'>Calls</p>
                        </button>
                        <button
                        onClick={() => handleInteraction('text')}
                         className='shadow rounded-xl p-10 mx-auto w-[250px] text-center cursor-pointer'>
                            <MdOutlineTextsms className='text-3xl mx-auto mb-2 ' />
                            <p className='text-gray-600 font-semibold'>Text</p>
                        </button>
                        <button 
                        onClick={() => handleInteraction("video")}
                        className=' shadow rounded-xl p-10 mx-auto w-[250px] text-center cursor-pointer'>
                            <IoVideocamOutline className='text-3xl mx-auto mb-2 ' />
                            <p className='text-gray-600 font-semibold'>Video</p>
                        </button>


                    </div>
                </div>

               

            </div>
        </div>
    );
};

export default CardDetails;