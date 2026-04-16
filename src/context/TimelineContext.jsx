import React, { createContext, useState } from 'react';

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);

    const addActivity = (type) => {
        const newEntry = {
            id: Date.now(),
            type: type,
            timestamp: new Date().toLocaleTimeString()
        };
        setTimeline([newEntry, ...timeline]);
        return newEntry;
    };

    const clearTimeline = () => {
        setTimeline([]);
    };

    return (
        <TimelineContext.Provider value={{ timeline, addActivity, clearTimeline }}>
            {children}
        </TimelineContext.Provider>
    );
};
