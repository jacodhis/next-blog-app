'use client';

import Image from 'next/image';
// import classes from './product.module.css'
import Link from 'next/link';
import Button from '@/constants/reusables/button';
import { useState } from 'react';

const Products = ({ products }) => {

  const [cartItems, setCartItems] = useState([])
  

  const handleAddToCart = (product) => {
    console.log("product",product)
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Increase the quantity of the existing item
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new product to the cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }

  const removeFromCartHandler = (productId) => {
    setCartItems((prevItems) => {
      // Filter out the item with the specified product ID
      const updatedCart = prevItems.filter((item) => item.id !== productId);
      return updatedCart;
    });
  }
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  return (
    <>
      {cartItems && cartItems.length > 0 && <div>
        <div className='d-flex justify-content-between'>
          <h1>Cart Items</h1>
          <span><b>Total Price </b>: ${calculateTotalPrice()}</span>
        </div>
        <table class="table">
          <thead>
              <tr>
              
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">remove</th>
              </tr>
          </thead>
          <tbody>
              {cartItems.map((cartItem) =>  ( 
                  <tr key={cartItem.id}>
                    <td>{ cartItem.title }</td>
                    <td>{ cartItem.price}</td>
                    <td>{cartItem.quantity}</td>
                    <td><span class="text-danger" onClick={()=> removeFromCartHandler(cartItem.id) }>X</span></td>
                  </tr>
                  
              ))}
          </tbody>
        </table>
      </div>}

      <div className="row">
        {products.map((product) => (
              <div className='col-md-4 col-sm-12 col-xl-2' key={product.id}>
                <Link  href={`products/${product.id}`} ><Image src={product.images[0] } width={150} height={100}/></Link>
                <p><strong> Product Name </strong>: {product.title} </p>
                <p> Product Price : {product.price}</p>
                <Button onClick={()=>handleAddToCart(product)}> Added To cart </Button>
              </div>
        ))}
      </div>

    </>
    
  );
};

export default Products;
