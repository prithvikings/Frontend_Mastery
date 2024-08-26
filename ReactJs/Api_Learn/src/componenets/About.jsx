import React, { useEffect } from 'react'

function About() {
    useEffect(()=>{
      console.log("About page loaded");

      return ()=>{
        console.log("About page unloaded");
      }
    }) 

  return (
    <div>About</div>
  )
}

export default About