import React from 'react';
import { HiBellSnooze } from 'react-icons/hi2';
import { RiDeleteBin6Line, RiInboxArchiveLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';

const CardDetails = () => {
    const { friendId } = useParams();
    // console.log(friendId);

    const friends = useLoaderData();
    // console.log(friends);

    const singleFriend = friends.find(friend => friend.friendId == friend.friendId);
    // console.log(singleFriend);
    const {
        name,
        picture,
        status,
        tags,
        bio,
        email,
        days_since_contact,
        next_due_date,
    } = singleFriend;


    return (
        <div className='container mx-auto mt-20 flex gap-10'>
            <div className=' w-[300px]'>
                <div className="card bg-base-100  h-[380px] shadow-sm items-center">
                   
                        <img className='ring-primary  ring-offset-base-100   rounded-full'
                            src={picture} />
                  
                    <div className="card-body items-center">
                        <h2 className="card-title">

                        </h2>
                        <div className="badge badge-secondary">{status}</div>
                        {
                            singleFriend.tags.map((tag, id) =>
                                <div key={id} className="badge badge-soft badge-success">{tags}</div>
                            )
                        }
                        <p className='text-semibold text-gray-400'>{bio}</p>
                        <p className='text-sm text-gray-400'>Preferred:{email}</p>
                    </div>
                </div>
                <div className='grid grid-row-3 mt-15 space-y-6'>
                    <button class="btn"> <HiBellSnooze />Snooze 2 weeks</button>
                    <button class="btn"> <RiInboxArchiveLine />Archive</button>
                    <button class="btn"> <RiDeleteBin6Line />Delete</button>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  ">
                    <div className="shadow rounded-xl p-10 items-center text-center">
                        <div className="text-[#244D3F]  text-3xl font-bold ">{days_since_contact}</div>
                        <div className="text-gray-500">Days Since Contact</div>
                    </div>
                    <div className="shadow rounded-xl p-10 items-center text-center">
                        <div className="text-[#244D3F]  text-3xl font-bold ">{days_since_contact}</div>
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


            </div>
        </div>
    )
};

export default CardDetails;