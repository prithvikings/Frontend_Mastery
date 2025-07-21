/* eslint-disable no-unused-vars */
import React, { use, useCallback } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
function App(){
  
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword=useCallback(()=>{
    const characters = "abcdefghijklmnopqrstuvwxyz";
    let passwordCharacters = characters;
    if(includeUppercase){
      passwordCharacters += characters.toUpperCase();
    }
    if(includeNumbers){
      passwordCharacters += "0123456789";
    }
    if(includeSymbols){
      passwordCharacters += "!@#$%^&*()_+[]{}|;:,.<>?`~";
    }
    let generatedPassword = "";
    for(let i=0;i<length;i++){
      const randomIndex=Math.floor(Math.random()* passwordCharacters.length);
      generatedPassword += passwordCharacters[randomIndex];
    }
    setPassword(generatedPassword);
  },[length, includeUppercase, includeNumbers, includeSymbols,setPassword]);


  // useEffect to generate password on initial render
  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyclipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999); // For mobile devices
    // Copy the password to clipboard
    window.navigator.clipboard.writeText(password)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy password: ", error);
      });
  },[password]);

  return(
    <div className="App bg-gray-200 w-full h-screen p-8 flex flex-col items-center justify-start text-gray-800">
      <h1 className="text-6xl font-medium ">Password Generator</h1>
      <p className="text-lg mt-4">Generate a secure password with just a click!</p>
      <div className="w-4xl width-check mx-auto shadow-md rounded-lg px-6 py-8 my-8 bg-gray-800 text-orange-500">
        <div className="flex shadow rounded-lg mb-4">
          <input type="text"
           name=""
            id=""
            value={password}
            placeholder="Generated Password"
            className="w-full font-medium px-4 py-2 bg-white text-gray-700 outline-none rounded-l-lg focus:ring-blue-500"
            readOnly
            ref={passwordRef}
            />
            <button 
            className="bg-sky-600 text-white p-3 font-medium cursor-pointer hover:bg-sky-700 rounded-r-lg"
            onClick={copyclipboard}
            >Copy</button>
        </div>
        <div className="flex text-sm  flex-wrap items-center mb-4  justify-between">
          <input type="range" 
          name="" 
          id=""
          min="8"
          max="30"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="h-2 bg-gray-300 w-48 rounded-lg appearance-none cursor-pointer"
          />
          <label className="text-gray-500 font-normal text-lg">Length: {length}</label>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
          name="" 
          id=""
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
          className="w-4 h-4 text-blue-600
           bg-gray-100 border border-gray-300 rounded
            focus:ring-blue-500 focus:ring-2"
          />
          <label className="text-gray-500 font-normal text-lg">Include Uppercase</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input type="checkbox" name="" id=""
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label className="text-gray-500 font-normal text-lg">Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input type="checkbox" name="" id="" 
            className="w-4 h-4 text-blue-600 bg-gray-100 border border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            checked={includeSymbols}
            onChange={(e)=>{
              setIncludeSymbols(e.target.checked);
            }}/>
            <label className="text-gray-500 font-normal text-lg">Include Symbols</label>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;