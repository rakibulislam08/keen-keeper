import React from 'react';

const Cards = (friend) => {
    return (

        <div className="card bg-base-100 w-[250] shadow-sm items-center" >
            <div className='avatar'>
                <figure>
                    <img className="ring-primary  ring-offset-base-100 w-24 h-24 rounded-full "
                        src={friend.friend.picture} />
                </figure>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title"> {friend.friend.name}
                </h2>
                <p>{friend.friend.days_since_contact}d ago</p>

                <div className='flex gap-3'>
                    {
                        friend.friend.tags.map((tag, id) =>
                            <div key={id} className="badge badge-soft badge-success">{tag}</div>
                        )
                    }
                </div>

                <div className="badge badge-warning mt-3">{friend.friend.status}</div>  
            </div>
        </div>

    );
};

export default Cards;