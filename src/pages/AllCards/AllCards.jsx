import React, { use } from 'react';
import Cards from '../../components/cards/Cards';

const allFriends = fetch("/friends.json").then((res) => res.json());

const AllCards = () => {
    const friends = use(allFriends);
    console.log(friends);


    return (
        <div className='container mx-auto '>
            <h3 className='font-semibold text-xl pt-15'>Your Friends</h3>

            <div>
                {
                    friends.map(((friend,ind) => {
                        return (
                           <Cards key={ind} friend={friend}/>
                        )
                    }))
                }
            </div>


        </div>
    );
};

export default AllCards;