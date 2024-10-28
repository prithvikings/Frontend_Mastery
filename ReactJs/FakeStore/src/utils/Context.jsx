import React, { useState } from 'react'
import { createContext } from 'react';
import axios from './axios';
import { useEffect } from 'react';
export const productContext = createContext();


const Context = (props) => {
    const [products,setProducts]=useState(null)
    const getProducts=async()=>{
        try{
            const res=await axios.get("/products")
            // console.log(res.data)
            setProducts(res.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getProducts()
    },[])



  return (
    <div>
        <productContext.Provider value={{products,setProducts}}>
            {props.children}
        </productContext.Provider>
    </div>
  )
}

export default Context