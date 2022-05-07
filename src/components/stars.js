import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

//react icons take in color prop add to FaStar

const StarRating = () => {
    //use constant rating and set rating. set initial rating to null
    //get rating and set rating with usestate hook
     //save value of star in state usestate import
    const [rating, setRating] = useState(null);
    //add for hover
    const [hover, setHover] = useState(null);


    //map through array of 5 undefined items in new array
    return (
    <div>
        {[...Array(5)].map((star, i) => { //i=iterator, first item will return 0 then 1,2,3,4
            //add value to the stars
            //arrays start at one
            const ratingValue = i + 1;

            //onclick... set first star set to 1 , etc
            return (
                <label>
                <input 
                    type="radio" 
                    className="star-input"
                    name='rating' 
                    value={ratingValue} 
                    onClick={() =>setRating(ratingValue)} 
                /> 
                
                <FaStar 
                    className='star' 
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                    size={50}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}/> 
                </label> //stars will be labels and there will be a radio button behind the scenes
            ); //hide radio button with css
        })}

        <p> The rating is {rating}</p>
    </div>
    );
};

export default StarRating;