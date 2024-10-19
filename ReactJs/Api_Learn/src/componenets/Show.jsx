import React from 'react'
import axios from 'axios';
import { useState } from 'react';
function Show() {
  const [products, setProducts] = useState([]);

  const getProduct = () => {
    const api = "https://fakestoreapi.com/products";

    axios.get(api)
    .then(response => {
      console.log(response);
      setProducts(response.data);
    })
    .catch(err => {
      console.error(err);
    });
  }

  const addProduct = () => {
    const api = "https://fakestoreapi.com/products";

    axios.post(api, {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }).then(response => {
      console.log(response);
    }).catch(err => {
      console.error(err);
    });
  }

  console.log(products);

  return (
    <>
      <div className='p-6'>
        <button className='rounded px-5 py-2 bg-red-300' onClick={getProduct}>Get Product</button>
        <br /><br />
        <button className='rounded px-5 py-2 bg-red-300' onClick={addProduct}>Add Product</button>

        <hr className='my-10' />

        <ul >
          {products.length > 0 ? (
            products.map((product, index) => (
              <li key={index} className='p-5 bg-red-200 rounded'>
                Product Name: {product.title}
    
                Category Name: {product.category}
                <img className='object-cover w-24 h-18' src={`${product.image}`} alt="" />
              </li>
            ))
          ) : (
            <li>No Product Found</li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Show