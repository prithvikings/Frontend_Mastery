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


/* App.jsx:

import { useState } from "react";
import Props_Assignment from "./components/Props_Assignment";

function App() {
  const data = [
    {
      name: "John",
      Profession: "Painter",
      image: "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Friend: false,
    },
    {
      name: "Amit",
      Profession: "Coder",
      image: "https://images.unsplash.com/photo-1676490218457-479de62cb990?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Friend: false,
    },
    {
      name: "Rohit",
      Profession: "Berojgar",
      image: "https://images.unsplash.com/photo-1618306842557-a2515acf2112?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Friend: false,
    },
    {
      name: "JethaLal",
      Profession: "BusinessMen",
      image: "https://images.unsplash.com/photo-1661370343739-b26f0bb72dbf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Friend: false,
    },
  ];

  const [realdata, setdata] = useState(data);

  const handleFriendsButton = (index) => {
    setdata((previous) =>
      previous.map((item, i) => {
        if (i === index) {
          return { ...item, Friend: !item.Friend }; // Toggle the Friend status
        }
        return item;
      })
    );
  };

  return (
    <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
      {realdata.map((item, index) => (
        <Props_Assignment
          dummy={handleFriendsButton}
          index={index}
          key={index}
          name={item.name}
          image={item.image}
          Profession={item.Profession}
          Friend={item.Friend}
        />
      ))}
    </div>
  );
}

export default App;
*/