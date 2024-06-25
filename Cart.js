// frontend/src/pages/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div className="container">
            <h1>Cart</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.product._id}>
                        <h2>{item.product.name}</h2>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => removeFromCart(item.product._id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
