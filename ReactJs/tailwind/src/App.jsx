import React from "react";
import Card from "./components/card"
const App = () => {
  // let mydb={
  //   userName:"Prithvi Raj",
  //   Age:23
  // };
  return (
    <>
      <div className='flex justify-center items-center h-screen bg-orange-100 gap-4'>
        <button
          type='button'
          className='rounded-full bg-black px-10 py-4 text-lg font-semibold  text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mb-7'
        >
          Taiwind Test
        </button>
        <Card userName="Prithvi Raj"/>
        <Card userName="Rahul" btntext="Click Me"/>
      </div>
    </>
  );
};

export default App;
