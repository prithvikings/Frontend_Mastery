import React, { useRef } from 'react'

import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package
const App = () => {
    const boxref=useRef();

    useGSAP(()=>{
      gsap.from(boxref.current,{
        x:-500,
        duration:2
      })
    })//this is one way of adding gsap 


    //Another way of adding gsap
    useGSAP(()=>{
      gsap.from(".box",{
        rotate:360,
        scale:0,
        duration:2,
        delay:0.5,
        opacity:0
      })
    },{scope:".kuch"})


  return (
    <main>
      <div className="container">
        <div className="circle"></div>
        <div ref={boxref} className="box"></div>
      </div>

      <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  )
}

export default App 