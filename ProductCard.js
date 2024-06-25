// frontend/src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>${product.price}</p>
        </div>
    );
};

export default ProductCard;
