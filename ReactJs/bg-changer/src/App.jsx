// IMPORTANT TAKE AWAY FROM VIDEO
// The on click method in React expects a function reference
// You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax
// Refresh karne pe olive is lie aa rah a kio ke usestate ki defualt value di ha humne
// To update the state we need to use the setState method
// setState method takes a callback function as an argument
// Inside the callback function we can update the state

import { useState } from "react";

function App() {
  const [color, setColor] = useState("#333");
  return (
    <>
    <div className="h-screen w-full flex justify-center items-end " style={{ backgroundColor: color }}>
      <div className="w-8/12 h-14 rounded-xl bg-slate-100 mb-6 flex justify-around items-center shadow-2xl border-2 border-black">
        <button className="bg-red-700 h-10 w-24 rounded-lg text-xl font-custom text-white" onClick={()=>{setColor("red")}}>Red</button>
        <button className="bg-blue-700 h-10 w-24 rounded-lg text-xl font-custom text-white" onClick={()=>{setColor("blue")}}>Blue</button>
        <button className="bg-green-700 h-10 w-24 rounded-lg text-xl font-custom text-white" onClick={()=>{setColor("green")}}>Green</button>
        <button className="bg-orange-500 h-10 w-24 rounded-lg text-xl font-custom text-white" onClick={()=>{setColor("orange")}}>Orange</button>
        <button className="bg-cyan-400 h-10 w-24 rounded-lg text-xl font-custom text-white" onClick={()=>{setColor("cyan")}}>Cyan</button>
        <button className="bg-yellow-400 h-10 w-24 rounded-lg text-xl font-custom text-white" onClick={()=>{setColor("yellow")}}>Yellow</button>
      </div>
    </div>
    </>
  );
}

export default App;
