import { useState } from "react";

function App() {
  const [color, setColor] = useState("#333");
  return (
    <>
      <div
        className="h-screen w-full flex justify-center items-end "
        style={{ backgroundColor: color }}
      >
        <div className="w-8/12 h-14 rounded-xl bg-slate-100 mb-6 flex justify-around items-center shadow-2xl border-2 border-black">
          <button
            className="bg-red-700 h-10 w-20 rounded-lg text-xl font-custom text-white"
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="bg-yellow-300 h-10 w-20 rounded-lg text-xl font-custom text-black"
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="bg-blue-700 h-10 w-20 rounded-lg text-xl font-custom text-white"
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="bg-green-600 h-10 w-20 rounded-lg text-xl font-custom text-white"
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="bg-orange-400 h-10 w-20 rounded-lg text-xl font-custom text-white"
            onClick={() => {
              setColor("orange");
            }}
          >
            orange
          </button>

          <button
            className="bg-cyan-400 h-10 w-20 rounded-lg text-xl font-custom text-black "
            onClick={() => {
              setColor("cyan");
            }}
          >
            Cyan
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
