import React, { useEffect } from 'react'
import axios from 'axios';

function About() {


  const getusers = () => {
    const api = "https://fakestoreapi.com/users";

    axios.get(api).then(response => {
      console.log(response);
      // setProducts(response.data);
    }).catch(err => {
      console.error(err);
    });
  }




    useEffect(()=>{
      getusers();
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