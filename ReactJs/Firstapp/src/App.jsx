import React from "react";
import Croduct from "./Croduct";
function App(){
  return(
    <>
      <div className="w-full h-screen bg-blue-950 p-4">
        <div className="w-64 h-63 rounded-r-xl bg-red-500 p-4 text-white flex items-center justify-center">
          <h1 className="font-poppins font-bold text-5xl">Prithvi Raj</h1>
        </div>
        <Croduct />
      </div>
    </>
  )
}

export default App