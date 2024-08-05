import { useState } from 'react';
import './App.css'
function App() {
  let [counter,setcounter]=useState(14);
  function addValue(){
    if(counter<20){
      setcounter(counter+1);
    }
  }
function removeValue(){
  if(counter>0){
    setcounter(counter-1);
  }
}
  return (
    <>
     <h1>Counter: {counter} </h1>
     {/* <button onClick={()=>{addValue()}}>Increase: {counter}</button>
     <button onClick={()=>{removeValue()}}>Decrease: {counter}</button> */}
     {/* Another way of doing this  */}
     <button onClick={()=>{if(counter<20){setcounter(counter+1)}}}>addValue: {counter}</button>
     <button onClick={()=>{if(counter>0){setcounter(counter-1)}}}>removeValue: {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}
export default App
