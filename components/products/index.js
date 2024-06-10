'use client';

import Image from 'next/image';
// import classes from './product.module.css'
import Link from 'next/link';
import Button from '@/constants/reusables/button';
import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';
// let oldUrl = "https://dummyjson.com/products"





const Products = ({products}) => {

const { handleAddToCart } = useCart()

  
  const addToCart = (product) => {
    handleAddToCart(product)
  }

  return (
      <div className="row">
        { products.map((product) => (
              <div className='col-md-4 col-sm-12 col-xl-2' key={product.id}>
                <Link  href={`products/${product.id}`} ><Image src={product.images} width={150} height={100} alt='image'/></Link>
                <p><strong> Product Name </strong>: {product.title} </p>
                <p> Product Price : {product.price}</p>
                <Button onClick={()=>addToCart(product)}> Added To cart </Button>
              </div>
        ))}
      </div>
    
  );
};

export default Products;
