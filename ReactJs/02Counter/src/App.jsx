import { useState } from 'react';
import './App.css'

function App() {
  let [counter,SetCounter]=useState(45);
function addValue(){
  console.log(counter);
  SetCounter(counter+1)
}
function removeValue(){
  console.log(counter);
  SetCounter(counter-1)
}

  return (
    <>
      <h1>Hello</h1>
      <h1>counter:{counter} </h1>
      <button onClick={addValue}
      >Add {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
