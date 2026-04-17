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
        <div className='container mx-auto'>
            <h1 className='text-3xl font-bold mt-10'>Friendship Analytics</h1>

            <div className='mt-10 shadow rounded-md p-5 border border-slate-300'>
                <p className='mb-10 text-[#244D3F] font-semibold'>By Interaction Type</p>
                <PieChart className='' style={{
                    width: '100%',
                    maxWidth: '500px',
                    maxHeight: '80vh',
                    aspectRatio: 1,
                    margin: ' auto',
                }} responsive >
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend />
                    <Tooltip/>
                </PieChart>
            </div>
        </div>
    );
};

export default Stats;