import React from 'react';

const Cards = (friend) => {
    return (

        <div className="card bg-base-100 w-96 shadow-sm items-center" >
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"  alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"> {friend.friend.name}
                </h2>
                <p>654d ago</p>

                <div className="badge badge-success">Success</div>
                <div className="badge badge-warning">Warning</div>

            </div>
        </div>

    );
};

export default Cards;