// frontend/src/pages/Checkout.js
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

const Checkout = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const [address, setAddress] = useState('');

    const handleCheckout = async () => {
        const products = cartItems.map(item => ({
            product: item.product._id,
            quantity: item.quantity
        }));
        const totalAmount = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

        try {
            await axios.post('/api/orders', {
                user: 'user-id', // Replace with actual user ID
                products,
                totalAmount,
                deliveryAddress: address
            });

            clearCart();
            alert('Order placed successfully!');
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Failed to place order.');
        }
    };

    return (
        <div className="container">
            <h1>Checkout</h1>
            <input
                type="text"
                placeholder="Delivery Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={handleCheckout}>Place Order</button>
        </div>
    );
};

export default Checkout;
