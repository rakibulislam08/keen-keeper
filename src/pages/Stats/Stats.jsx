import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineContext } from '../../context/TimelineContext';





const Stats = () => {


    const { timeline } = useContext(TimelineContext);
    

    const data = [
        { name: 'Call ', value: timeline.length, fill: '#244D3F' },
        { name: 'Text', value: timeline.length, fill: 'blue' },
        { name: 'Video', value: timeline.length, fill: 'green' },
    ];

    return (
        <div className='container mx-auto px-3 sm:px-4 md:px-6 lg:px-8'>
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-6 sm:mt-8 md:mt-10 lg:mt-12'>Friendship Analytics</h1>

            <div className='mt-6 sm:mt-8 md:mt-10 lg:mt-12 shadow rounded-md p-4 sm:p-5 md:p-6 lg:p-8 border border-slate-300'>
                <p className='mb-6 sm:mb-8 md:mb-10 text-[#244D3F] font-semibold text-sm sm:text-base md:text-lg'>By Interaction Type</p>
                <div className='flex justify-center w-full overflow-x-auto'>
                    <PieChart style={{
                        width: '100%',
                        maxWidth: '280px',
                        height: '280px',
                        minWidth: '200px'
                    }} 
                    responsive={true}
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                    >
                        <Pie
                            data={data}
                            innerRadius="60%"
                            outerRadius="80%"
                            cornerRadius="50%"
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend />
                        <Tooltip/>
                    </PieChart>
                </div>
                <div className='hidden sm:block'>
                    <PieChart style={{
                        width: '100%',
                        maxWidth: '500px',
                        height: '400px',
                    }} 
                    responsive={true}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    >
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            cornerRadius="50%"
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend />
                        <Tooltip/>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Stats;