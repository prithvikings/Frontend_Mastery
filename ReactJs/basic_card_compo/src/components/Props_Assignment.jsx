//Humara Data Actually main component mein hoga aur hum use props ke through pass karenge cards mein har card par ek add friend button hoga and humein add friend button par click hone par alert dena hai
import React from 'react';

function Props_Assignment({ Profession, name, index, image, dummy, Friend }) {
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
      <div className='w-full h-40 bg-sky-200'>
        <img className='object-cover h-full w-full object-[90%]' src={image} alt="" />
      </div>
      <div className='w-full p-3'>
        <h3 className='font-semibold text-xl'>{name}</h3>
        <h3 className='text-sm'>{Profession}</h3>
        <button
          onClick={() => dummy(index)}
          className='px-3 py-1 text-l rounded-md mt-2 text-white bg-blue-500 font-medium'
        >
          {Friend ? "Friends" : "Add Friend"}
        </button>
      </div>
    </div>
  );
}

export default Props_Assignment;

