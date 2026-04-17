import React from 'react';
import { Link } from 'react-router';

const Cards = (friend) => {
    return (

        <Link to={`/cardDetails/${friend.friend.id}`} className="card bg-base-100 w-full sm:w-[200px] md:w-[220px] lg:w-[250px] shadow-sm items-center hover:shadow-md transition-shadow" >
            <div className='avatar'>
                <figure>
                    <img className="ring-primary ring-offset-base-100 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full"
                        src={friend.friend.picture} />
                </figure>
            </div>
            <div className="card-body items-center text-center p-3 sm:p-4 md:p-5">
                <h2 className="card-title text-sm sm:text-base md:text-lg"> {friend.friend.name}
                </h2>
                <p className="text-xs sm:text-sm">{friend.friend.days_since_contact}d ago</p>

                <div className='flex flex-wrap gap-1 sm:gap-2 justify-center'>
                    {
                        friend.friend.tags.map((tag, id) =>
                            <div key={id} className="badge badge-soft badge-success text-xs sm:text-sm">{tag}</div>
                        )
                    }
                </div>

                <div className="badge badge-warning mt-2 sm:mt-3 text-xs sm:text-sm">{friend.friend.status}</div>
            </div>
        </Link>

    );
};

export default Cards;