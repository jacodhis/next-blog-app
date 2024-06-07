'use client'

import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react"


const CartContext = React.createContext()


export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }) {
    
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const router = useRouter()

    useEffect(() => {
        // Calculate the total quantity of items in the cart
        const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartCount(totalCount);
    }, [cartItems]);


    const handleAddToCart = (product) => {
        
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
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
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };
    const checkoutHandler = (data) => {
        console.log("checkout final ", data)
        //process cart,
        //clear cart items
        setCartItems([])
        setCartCount(0)
        router.push('/products')
        //send them back to dashboared page
    }

    const value = {
        cartItems,
        handleAddToCart,
        removeFromCartHandler,
        calculateTotalPrice,
        cartCount,
        checkoutHandler 
    };
    
    return (
        <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    )
}
