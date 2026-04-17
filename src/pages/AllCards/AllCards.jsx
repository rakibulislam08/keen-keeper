import React, { use } from 'react';
import Cards from '../../components/cards/Cards';

const allFriends = fetch("/friends.json").then((res) => res.json());

const AllCards = () => {
    const friends = use(allFriends);

    return (
        <div className='container mx-auto px-3 sm:px-4 md:px-6 lg:px-8'>
            <h3 className='font-semibold text-lg sm:text-xl md:text-2xl pt-8 sm:pt-10 md:pt-15'>Your Friends</h3>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 place-items-center sm:place-items-start mt-8 sm:mt-10 md:mt-15'>
                {friends.map((friend, ind) => (
                    <Cards key={ind} friend={friend} />
                ))}
            </div>
        </div>
    );
};

export default AllCards;