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
        <div className='mt-8 sm:mt-12 md:mt-15 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10'>
            <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Timeline</p>
            
            <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="select select-neutral mt-4 sm:mt-6 w-full sm:w-[180px] md:w-[200px] text-sm sm:text-base"
            >
                
                <option value="all">Filter Timeline</option>
                <option value="call">Calls</option>
                <option value="text">Text</option>
                <option value="video">Video</option>
            </select>

            <div className='shadow rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 mt-6 sm:mt-8 md:mt-10'>
                {filteredTimeline.length === 0 ? (
                    <div className='text-center text-gray-400 py-6 sm:py-8 md:py-12'>
                        <p className='text-base sm:text-lg md:text-xl'>No activity yet</p>
                    </div>
                ) : (
                    <div className='space-y-2 sm:space-y-3 md:space-y-4'>
                        {filteredTimeline.map((entry) => (
                            <div key={entry.id} className='flex items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition'>
                                <div className='flex-shrink-0'>
                                    {entry.type === 'call' && <FiPhoneCall className='text-xl sm:text-2xl shadow-xl rounded-xl text-blue-500' />}
                                    {entry.type === 'text' && <MdOutlineTextsms className='text-xl sm:text-2xl text-green-500' />}
                                    {entry.type === 'video' && <IoVideocamOutline className='text-xl sm:text-2xl text-purple-500' />}
                                </div>
                                <div className='flex-1 min-w-0'>
                                    <p className='font-semibold capitalize text-sm sm:text-base'>{entry.type}</p>
                                    <p className='text-xs sm:text-sm text-gray-500'>{entry.timestamp}</p>
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