import React, { use } from 'react';
import Cards from '../../components/cards/Cards';

const allFriends = fetch("/friends.json").then((res) => res.json());

const AllCards = () => {
    const friends = use(allFriends);

    return (
        <div className='container mx-auto'>
            <h3 className='font-semibold text-xl pt-15'>Your Friends</h3>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10'>
                {friends.map((friend, ind) => (
                    <Cards key={ind} friend={friend} />
                ))}
            </div>
        </div>
    );
};

export default AllCards;