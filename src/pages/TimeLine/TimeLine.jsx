import React, { useContext, useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';
import { TimelineContext } from '../../context/TimelineContext';

const TimeLine = () => {
    const { timeline } = useContext(TimelineContext);
    const [filter, setFilter] = useState('all');

    const filteredTimeline = filter === 'all' 
        ? timeline 
        : timeline.filter(entry => entry.type === filter);
    return (
        <div className='mt-15 container mx-auto p-10'>
            <p className='mt-15  text-2xl font-bold'>Timeline</p>
            
            <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="select select-neutral mt-6 w-[200px]"
            >
                
                <option value="all">Filter Timeline</option>
                <option value="call">Calls</option>
                <option value="text">Text</option>
                <option value="video">Video</option>
            </select>

            <div className='shadow rounded-xl p-10 mt-10'>
                {filteredTimeline.length === 0 ? (
                    <div className='text-center text-gray-400 py-8'>
                        <p className='text-lg'>No activity yet</p>
                    </div>
                ) : (
                    <div className='space-y-3'>
                        {filteredTimeline.map((entry) => (
                            <div key={entry.id} className='flex items-center gap-4 p-4 bg-gray-50 rounded-lg'>
                                <div>
                                    {entry.type === 'call' && <FiPhoneCall className='text-2xl shadow-xl rounded-xl text-blue-500' />}
                                    {entry.type === 'text' && <MdOutlineTextsms className='text-2xl text-green-500' />}
                                    {entry.type === 'video' && <IoVideocamOutline className='text-2xl text-purple-500' />}
                                </div>
                                <div className='flex-1'>
                                    <p className='font-semibold capitalize'>{entry.type}</p>
                                    <p className='text-sm text-gray-500'>{entry.timestamp}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimeLine;