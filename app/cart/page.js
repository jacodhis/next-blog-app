'use client'

import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const CartItems = () => {

    const { authUser, isLoggedIn} = useAuth()

    const [name, setName] = useState(isLoggedIn ? authUser.name : '')
    const [email, setEmail] = useState(isLoggedIn ? authUser.email : '')
    const [phone, setPhone] = useState(isLoggedIn ? authUser.phone : '')
    const [hasError, setHasError] = useState(false)
    const [error,setError] = useState(false)

    const { cartItems, removeFromCartHandler, calculateTotalPrice ,checkoutHandler } = useCart()


    const submitFormHandler = (e) => {
        e.preventDefault();
        if (name == "" || email == "" || phone == "") {
            setHasError(true)
            setError('Please fill in your information')
        }
        let data = {
            name: name,
            email: email,
            phone:phone
        }
        checkoutHandler (data)
        //check if the user data exists in the users a table.if yes, proceed.if data changed, update witht the new record or create a new user ,confirm with email
        console.log("cart data", data)
        //clear cart after a successful checkout and return user to the dahboard page
    }
 
    
    
    const removeFromCart = (productId) => {
        removeFromCartHandler(productId)
    }

    const myCartItems =  <div className="col-md-7 col-sm-12">
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

    const checkoutForm = <div className="row col-md-5 col-sm-12">
        <form onSubmit={submitFormHandler}>
                <div>
                    <p><b>Form Should be filled </b><span className="text-danger">*</span> </p>
                    <p>{hasError && error}</p>
                </div>
                <div className="mb-3 col-md-4 mt-3">
                    <label for="Name" class="form-label">Name <span className="text-danger">*</span> </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="mb-3 col-md-4 mt-3">
                    <label for="Email" class="form-label">Email <span className="text-danger">*</span> </label>
                    <input type="email" class="form-control" id="exampleInputEmail1"  value={email} onChange={(e)=>setEmail(e.target.value)} />
                
                </div>
                <div className="col-md-4 mb-3">
                    <label for="Phone" class="form-label">Phone <span className="text-danger">*</span> </label>
                    <input type="text" class="form-control" id="phone"  value={phone} onChange={(e)=>setPhone(e.target.value)}  />
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
