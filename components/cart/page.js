import { useState } from "react";

const CartItems = (props) => {

    const { product } = props;
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
        <div className="table-responsive">
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
        </div>
    );
    

}

export default CartItems;