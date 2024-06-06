'use client'

import React, { useContext, useEffect, useState } from "react"


const CartContext = React.createContext()


export function useCart() {
    return useContext(CartContext)
}


export function CartProvider({ children }) {
    
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);


     useEffect(() => {
        // Calculate the total quantity of items in the cart
        const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartCount(totalCount);
    }, [cartItems]);


    const handleAddToCart = (product) => {
        console.log("product added",product)
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                console.log("itesm already in cart.quantity increased")
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                console.log("item is new.added to cart")
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
        setCartCount((prevCount) => prevCount + 1);
    };

    const removeFromCartHandler = (productId) => {
        setCartItems((prevItems) => {
            const itemToRemove = prevItems.find((item) => item.id === productId);
            if (!itemToRemove) return prevItems;
            const updatedCart = prevItems.filter((item) => item.id !== productId);
            return updatedCart;
        });
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };


    const value = {
        cartItems,
        handleAddToCart,
        removeFromCartHandler,
        calculateTotalPrice,
        cartCount
    };
    
    return (
        <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    )
}
