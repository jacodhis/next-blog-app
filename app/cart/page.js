'use client'

import { useCart } from "@/context/CartContext";
import { useState } from "react";

const CartItems = () => {

    const [name, setName] = useState();
    const { cartItems, removeFromCartHandler, calculateTotalPrice } = useCart()


    const checkoutFormHandler = () => {
        setShowCheckOut(true)
    }
 
    
    
    const removeFromCart = (productId) => {
        removeFromCartHandler(productId)
    }

    const myCartItems =  <div className="row col-7 ">
                    <h4>Cart Items</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((cartItem) => (
                                <tr key={cartItem.id}>
                                    <td>{cartItem.title}</td>
                                    <td>{cartItem.price}</td>
                                    <td>{cartItem.quantity}</td>
                                    <td>
                                        <span 
                                            className="text-danger" 
                                            onClick={() => removeFromCart(cartItem.id)}
                                            style={{cursor: 'pointer'}}
                                        >
                                            X
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                   
                </div>
                
    const noCartItems = <p>No Cart Items yet</p>

    //mycheckout form

    const checkoutForm = <div className="row col-5 ">
        <form>
                <div>
                    <span  className="btn btn-info ">My Cart</span>
                </div>
                <div className="mb-3 col-md-4 mt-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                
                </div>
                <div className="col-md-4 mb-3">
                    <label for="exampleInputPassword1" class="form-label">email</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div>
                    <span><b>Total Price </b>: ${calculateTotalPrice()}</span>
                </div>
            <button type="submit" class="btn btn-primary">checkout</button>
        </form>
    </div>;
  
    return (

        <div className="row">
            {cartItems && cartItems.length > 0 ? <>
                    {myCartItems}
                    {checkoutForm}
                </>
            : noCartItems}
         
        </div>
    );
}

export default CartItems;
