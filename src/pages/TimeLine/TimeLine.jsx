import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';
import { TimelineContext } from '../../context/TimelineContext';

const TimeLine = () => {
    const { timeline } = useContext(TimelineContext);
    return (
        <div className='mt-15 container mx-auto p-10'>
            <p className='mt-15  text-2xl font-bold'>Timeline</p>
            <div className='shadow rounded-xl p-10 mt-10'>
                {timeline.length === 0 ? (
                    <div className='text-center text-gray-400 py-8'>
                        <p className='text-lg'>No activity yet</p>
                    </div>
                ) : (
                    <div className='space-y-3'>
                        {timeline.map((entry) => (
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